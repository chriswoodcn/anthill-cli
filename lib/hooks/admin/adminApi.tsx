import { translate } from "@/lib/client";
import useEffectOnce from "../useEffectOnce";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { remoteFetcher, nextFetcher } from "@/lib/fetcher";
import Toast from "@/lib/toast";
import { i18next } from "@/i18n/client";
import { aesDecrypt, aesEncrypt, isBrowser, withBasePath } from "@/lib";
import configuraton from "@/configuration.mjs";
import useSWR, { SWRConfiguration } from "swr";

enum OperateType {
  GET,
  ADD,
  UPDATE,
  DELETE,
  CLEAR,
}
const handle401Response = (res: any) => {
  if (res && res.code == 401) {
    Toast.fireErrorAction({
      html: (
        <p className="text-2xl font-bold">
          {res.msg || i18next.t("operate_error")}
        </p>
      ),
      callback: () => {
        window.history.replaceState(
          null,
          "",
          configuraton.BasePath + configuraton.PathAuth.Login
        );
      },
    });
    return false;
  }
  return true;
};
const handleOperateResponse = (res: any, ot = OperateType.GET) => {
  if (!handle401Response(res)) return;
  if (res.code == 200) {
    if (ot == OperateType.GET) {
      return res.data;
    }
    Toast.fireSuccessAction({
      html: (
        <p className="text-2xl font-bold">{i18next.t("operate_success")}</p>
      ),
    });
    return true;
  } else {
    Toast.fireErrorAction({
      html: (
        <p className="text-2xl font-bold">
          {res.msg || i18next.t("operate_error")}
        </p>
      ),
      timer: 0,
    });
    return false;
  }
};
interface AlertOptions {
  show: boolean;
  type?: "F" | "O";
  success?: string;
  error?: string;
}
// hooks
function useAdminFetch(
  doAction: boolean,
  alert: AlertOptions = { show: false },
  params: Record<string, any>,
  config: SWRConfiguration | undefined = {},
  final: () => void | undefined = () => {}
) {
  const { t } = useTranslation();
  const combineConfig = Object.assign(
    {
      onSuccess(data: any, key: string, config: any) {
        if (alert.show && data.code == 200)
          if (alert.success) {
            Toast.fireSuccessAction({
              html: (
                <p className="text-black-7 dark:text-white-7 text-xl">
                  {t(alert.success)}
                </p>
              ),
            });
          } else {
            if (alert.type == "F") {
              Toast.fireSuccessAction({
                html: (
                  <p className="text-black-7 dark:text-white-7 text-xl">
                    {t("fetch_success")}
                  </p>
                ),
              });
            }
            if (alert.type == "O") {
              {
                Toast.fireSuccessAction({
                  html: (
                    <p className="text-black-7 dark:text-white-7 text-xl">
                      {t("operate_success")}
                    </p>
                  ),
                });
              }
            }
          }

        if (data.code != 200) {
          if (alert.error) {
            Toast.fireErrorAction({
              html: <p className="text-2xl font-bold">{t(alert.error)}</p>,
              timer: 0,
            });
          } else {
            if (alert.type == "F") {
              Toast.fireErrorAction({
                html: (
                  <p className="text-2xl font-bold">
                    {data.msg || t("fetch_error")}
                  </p>
                ),
                timer: 0,
              });
            }
            if (alert.type == "O") {
              Toast.fireErrorAction({
                html: (
                  <p className="text-2xl font-bold">
                    {data.msg || t("operate_error")}
                  </p>
                ),
                timer: 0,
              });
            }
          }
        }
        final();
      },
      onError(err: any, key: string, config: any) {
        Toast.fireErrorAction({
          html: (
            <p className="text-2xl font-bold">
              {err.message || t("fetch_error")}
            </p>
          ),
          timer: 0,
        });
        final();
      },
    },
    config
  );

  const { data, error, isLoading, mutate } = useSWR(
    doAction ? params : null,
    remoteFetcher,
    combineConfig
  );

  return {
    data: data,
    error: error,
    isLoading,
    mutate,
  };
}

/**
 * 系统菜单
 */
export const SystemMenuApi = {
  useList: (data: Record<string, any> = {}) => {
    const [result, setResult] = useState<any>(undefined);
    const {
      data: fetchData,
      isLoading,
      mutate,
    } = useAdminFetch(true, undefined, {
      url: "/backend/menu/list",
      method: "POST",
      data,
    });
    useEffectOnce(() => {
      if (fetchData && fetchData.code == 200) {
        setResult(fetchData.data);
      }
    }, [fetchData]);
    return {
      data: result,
      isLoading,
      mutate,
    };
  },
  useSelect: (data: Record<string, any> = {}) => {
    const [result, setResult] = useState<any>(undefined);
    const {
      data: fetchData,
      isLoading,
      mutate,
    } = useAdminFetch(true, undefined, {
      url: "/backend/menu/select",
      method: "GET",
      params: data,
    });
    useEffectOnce(() => {
      if (fetchData && fetchData.code == 200) {
        setResult(fetchData.data);
      }
    }, [fetchData]);
    return {
      data: result,
      isLoading,
      mutate,
    };
  },
  all: async (data: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/menu/list",
      method: "POST",
      data,
    });
    return handleOperateResponse(res);
  },
  getById: async (id: string | number) => {
    const res = await remoteFetcher({
      url: "/backend/menu/getById/" + id,
      method: "GET",
    });
    return handleOperateResponse(res);
  },
  add: async (data: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/menu/add",
      method: "POST",
      data,
    });
    return handleOperateResponse(res, OperateType.ADD);
  },
  update: async (data: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/menu/update",
      method: "POST",
      data,
    });
    return handleOperateResponse(res, OperateType.UPDATE);
  },
  delete: async (ids: (string | number)[]) => {
    const res = await remoteFetcher({
      url: "/backend/menu/deleteLogic/" + ids,
      method: "GET",
    });
    return handleOperateResponse(res, OperateType.DELETE);
  },
};
/**
 *  筛选系统字典方法
 *  1. sys_status '2' 不显示
 */
function filterDict(records: any[]) {
  if (records.length > 0) {
    if (records[0].dictType == "sys_status") {
      return records.filter((r) => r.dictValue != "2");
    }
  }
  return records;
}

export interface LoginForm {
  username: string | undefined;
  password: string | undefined;
  remember: boolean;
}

export const getStorageLoginForm = () => {
  const emptyForm: LoginForm = {
    username: undefined,
    password: undefined,
    remember: false,
  };
  if (typeof window != "undefined") {
    let jsonStr = window.localStorage.getItem("__admin_login_form__");
    if (!jsonStr) return emptyForm;
    let target = JSON.parse(jsonStr);
    if (!target.remember) return emptyForm;
    if (target.password) target.password = aesDecrypt(target.password);
    return target as LoginForm;
  }
  return emptyForm;
};

export const setStorageLoginForm = ({
  username,
  password,
  remember,
}: LoginForm) => {
  let target = {};
  if (remember == true && username && password) {
    target = { username: username, password: aesEncrypt(password), remember };
  } else {
    target = { remember: false };
  }
  if (isBrowser()) {
    if (password)
      window.localStorage.setItem("__admin_unlock_pwd__", aesEncrypt(password));
    window.localStorage.setItem("__admin_login_form__", JSON.stringify(target));
  }
};
export const SysLoginApi = {
  login: async (data: LoginForm & Record<string, any>) => {
    const res = await nextFetcher({
      url: withBasePath("/api/auth/login"),
      method: "POST",
      data: data,
    });
    handle401Response(res);
    return res;
  },
  logout: async () => {
    const res = await nextFetcher({
      url: withBasePath("/api/auth/logout"),
      method: "GET",
    });
    handle401Response(res);
    return res;
  },
};
/**
 * 系统字典
 */
export const SystemDictApi = {
  useDict: (
    params: Record<string, any> = {},
    config: Record<string, any> = {}
  ) => {
    const { i18n } = useTranslation();
    const [result, setResult] = useState<any[]>([]);
    const { data: fetchData, isLoading } = useAdminFetch(true, undefined, {
      url: "/backend/dict",
      method: "GET",
      params,
    });
    useEffectOnce(() => {
      handle401Response(fetchData);
      if (fetchData) {
        handle401Response(fetchData);
        if (fetchData.code == 200) {
          const res = config.filter
            ? config.filter(fetchData.data)
            : [...fetchData.data];
          res.forEach((d: any) => {
            d.value = d.dictValue;
            d.label = translate(d.dictLabelJson);
          });
          setResult(res);
        }
      }
    }, [fetchData, i18n.language]);
    return {
      data: result,
      isLoading,
    };
  },
};
/**
 * 系统字典类型
 */
export const SystemDictTypeApi = {
  usePage: (data: Record<string, any> = {}) => {
    const [result, setResult] = useState<any>(undefined);
    const {
      data: fetchData,
      isLoading,
      mutate,
    } = useAdminFetch(true, undefined, {
      url: "/backend/dict/type/page",
      method: "POST",
      data,
    });
    useEffectOnce(() => {
      if (fetchData) {
        handle401Response(fetchData);
        if (fetchData.code == 200) setResult(fetchData.data);
      }
    }, [fetchData]);
    return {
      data: result,
      isLoading,
      mutate,
    };
  },
  getById: async (id: string | number) => {
    const res = await remoteFetcher({
      url: "/backend/dict/type/getById/" + id,
      method: "GET",
    });
    return handleOperateResponse(res);
  },
  add: async (data: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/dict/type/add",
      method: "POST",
      data,
    });
    return handleOperateResponse(res, OperateType.ADD);
  },
  update: async (data: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/dict/type/update",
      method: "POST",
      data,
    });
    return handleOperateResponse(res, OperateType.UPDATE);
  },
  delete: async (ids: (string | number)[]) => {
    const res = await remoteFetcher({
      url: "/backend/dict/type/deleteLogic/" + ids,
      method: "GET",
    });
    return handleOperateResponse(res, OperateType.DELETE);
  },
  refresh: async (params: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/dict/type/refresh",
      method: "GET",
      params,
    });
    return handleOperateResponse(res, OperateType.CLEAR);
  },
};
/**
 * 系统字典数据
 */
export const SystemDictDataApi = {
  usePage: (data: Record<string, any> = {}) => {
    const [result, setResult] = useState<any>(undefined);
    const {
      data: fetchData,
      isLoading,
      mutate,
    } = useAdminFetch(true, undefined, {
      url: "/backend/dict/data/page",
      method: "POST",
      data,
    });
    useEffectOnce(() => {
      if (fetchData) {
        handle401Response(fetchData);
        if (fetchData.code == 200) setResult(fetchData.data);
      }
    }, [fetchData]);
    return {
      data: result,
      isLoading,
      mutate,
    };
  },
  getById: async (id: string | number) => {
    const res = await remoteFetcher({
      url: "/backend/dict/data/getById/" + id,
      method: "GET",
    });
    return handleOperateResponse(res);
  },
  add: async (data: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/dict/data/add",
      method: "POST",
      data,
    });
    return handleOperateResponse(res, OperateType.ADD);
  },
  update: async (data: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/dict/data/update",
      method: "POST",
      data,
    });
    return handleOperateResponse(res, OperateType.UPDATE);
  },
  delete: async (ids: (string | number)[]) => {
    const res = await remoteFetcher({
      url: "/backend/dict/data/deleteLogic" + ids,
      method: "GET",
    });
    return handleOperateResponse(res, OperateType.DELETE);
  },
};
/**
 * 系统配置
 */
export const SystemConfigApi = {
  usePage: (data: Record<string, any> = {}) => {
    const [result, setResult] = useState<any>(undefined);
    const {
      data: fetchData,
      isLoading,
      mutate,
    } = useAdminFetch(true, undefined, {
      url: "/backend/config/page",
      method: "POST",
      data,
    });
    useEffectOnce(() => {
      if (fetchData) {
        handle401Response(fetchData);
        if (fetchData.code == 200) setResult(fetchData.data);
      }
    }, [fetchData]);
    return {
      data: result,
      isLoading,
      mutate,
    };
  },
  getById: async (id: string | number) => {
    const res = await remoteFetcher({
      url: "/backend/config/getById/" + id,
      method: "GET",
    });
    return handleOperateResponse(res);
  },
  add: async (data: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/config/add",
      method: "POST",
      data,
    });
    return handleOperateResponse(res, OperateType.ADD);
  },
  update: async (data: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/config/update",
      method: "POST",
      data,
    });
    return handleOperateResponse(res, OperateType.UPDATE);
  },
  delete: async (ids: (string | number)[]) => {
    const res = await remoteFetcher({
      url: "/backend/config/deleteLogic/" + ids,
      method: "GET",
    });
    return handleOperateResponse(res, OperateType.DELETE);
  },
  refresh: async (params: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/config/refresh",
      method: "GET",
      params,
    });
    return handleOperateResponse(res, OperateType.CLEAR);
  },
};
/**
 * 系统角色
 */
export const SysUserRoleApi = {
  usePage: (data: Record<string, any> = {}) => {
    const [result, setResult] = useState<any>(undefined);
    const {
      data: fetchData,
      isLoading,
      mutate,
    } = useAdminFetch(true, undefined, {
      url: "/backend/role/page",
      method: "POST",
      data,
    });
    useEffectOnce(() => {
      if (fetchData) {
        handle401Response(fetchData);
        if (fetchData.code == 200) setResult(fetchData.data);
      }
    }, [fetchData]);
    return {
      data: result,
      isLoading,
      mutate,
    };
  },
  getById: async (id: string | number) => {
    const res = await remoteFetcher({
      url: "/backend/role/getById/" + id,
      method: "GET",
    });
    return handleOperateResponse(res);
  },
  add: async (data: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/role/add",
      method: "POST",
      data,
    });
    return handleOperateResponse(res, OperateType.ADD);
  },
  update: async (data: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/role/update",
      method: "POST",
      data,
    });
    return handleOperateResponse(res, OperateType.UPDATE);
  },
  delete: async (ids: (string | number)[]) => {
    const res = await remoteFetcher({
      url: "/backend/role/deleteLogic/" + ids,
      method: "GET",
    });
    return handleOperateResponse(res, OperateType.DELETE);
  },
  roleSelect: async (data: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/role/select",
      method: "GET",
      params: data,
    });
    return handleOperateResponse(res, OperateType.GET);
  },
  useTemplateSelect: (data: Record<string, any> = {}) => {
    const [result, setResult] = useState<any[]>([]);
    const {
      data: fetchData,
      isLoading,
      mutate,
    } = useAdminFetch(true, undefined, {
      url: "/backend/role/templateSelect",
      method: "GET",
      params: data,
    });
    useEffectOnce(() => {
      if (fetchData) {
        handle401Response(fetchData);
        if (fetchData.code == 200) {
          fetchData.data.forEach((item: any) => {
            item.label = item.roleKey;
            item.value = item.id + "";
          });
          setResult(fetchData.data);
        }
      }
    }, [fetchData]);
    return {
      data: result,
      isLoading,
      mutate,
    };
  },
  templateSelect: async (data: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/role/templateSelect",
      method: "GET",
      params: data,
    });
    return handleOperateResponse(res, OperateType.GET);
  },
};
/**
 * 客户
 */
export const SysCompanyApi = {
  usePage: (data: Record<string, any> = {}) => {
    const [result, setResult] = useState<any>(undefined);
    const {
      data: fetchData,
      isLoading,
      mutate,
    } = useAdminFetch(true, undefined, {
      url: "/backend/company/page",
      method: "POST",
      data,
    });
    useEffectOnce(() => {
      if (fetchData && fetchData.code == 200) {
        handle401Response(fetchData);
        if (fetchData.code == 200) setResult(fetchData.data);
      }
    }, [fetchData]);
    return {
      data: result,
      isLoading,
      mutate,
    };
  },
  getById: async (id: string | number) => {
    const res = await remoteFetcher({
      url: "/backend/company/getById/" + id,
      method: "GET",
    });
    return handleOperateResponse(res);
  },
  add: async (data: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/company/add",
      method: "POST",
      data,
    });
    return handleOperateResponse(res, OperateType.ADD);
  },
  update: async (data: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/company/update",
      method: "POST",
      data,
    });
    return handleOperateResponse(res, OperateType.UPDATE);
  },
  delete: async (ids: (string | number)[]) => {
    const res = await remoteFetcher({
      url: "/backend/company/deleteLogic/" + ids,
      method: "GET",
    });
    return handleOperateResponse(res, OperateType.DELETE);
  },
};
/**
 * 系统用户
 */
export const SystemUserApi = {
  usePage: (data: Record<string, any> = {}) => {
    const [result, setResult] = useState<any>(undefined);
    const {
      data: fetchData,
      isLoading,
      mutate,
    } = useAdminFetch(true, undefined, {
      url: "/backend/user/page",
      method: "POST",
      data,
    });
    useEffectOnce(() => {
      if (fetchData && fetchData.code == 200) {
        handle401Response(fetchData);
        if (fetchData.code == 200) setResult(fetchData.data);
      }
    }, [fetchData]);
    return {
      data: result,
      isLoading,
      mutate,
    };
  },
  getById: async (id: string | number) => {
    const res = await remoteFetcher({
      url: "/backend/user/getById/" + id,
      method: "GET",
    });
    return handleOperateResponse(res);
  },
  add: async (data: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/user/add",
      method: "POST",
      data,
    });
    return handleOperateResponse(res, OperateType.ADD);
  },
  update: async (data: Record<string, any> = {}) => {
    const res = await remoteFetcher({
      url: "/backend/user/update",
      method: "POST",
      data,
    });
    return handleOperateResponse(res, OperateType.UPDATE);
  },
  delete: async (ids: (string | number)[]) => {
    const res = await remoteFetcher({
      url: "/backend/user/deleteLogic/" + ids,
      method: "GET",
    });
    return handleOperateResponse(res, OperateType.DELETE);
  },
};
/**
 * 系统登录日志
 */
export const SysLoginInfoApi = {
  usePage: (data: Record<string, any> = {}) => {
    const [result, setResult] = useState<any>(undefined);
    const {
      data: fetchData,
      isLoading,
      mutate,
    } = useAdminFetch(true, undefined, {
      url: "/backend/record/login/page",
      method: "POST",
      data,
    });
    useEffectOnce(() => {
      if (fetchData && fetchData.code == 200) {
        handle401Response(fetchData);
        if (fetchData.code == 200) setResult(fetchData.data);
      }
    }, [fetchData]);
    return {
      data: result,
      isLoading,
      mutate,
    };
  },
  getById: async (id: string | number) => {
    const res = await remoteFetcher({
      url: "/backend/record/login/getById/" + id,
      method: "GET",
    });
    return handleOperateResponse(res);
  },
  clear: async (ids: (string | number)[] | undefined = undefined) => {
    const res = await remoteFetcher({
      url: "/backend/record/login/clear",
      method: "GET",
      params: {
        ids: ids,
      },
    });
    return handleOperateResponse(res, OperateType.DELETE);
  },
};
/**
 * 系统操作日志
 */
export const SysOperLogApi = {
  usePage: (data: Record<string, any> = {}) => {
    const [result, setResult] = useState<any>(undefined);
    const {
      data: fetchData,
      isLoading,
      mutate,
    } = useAdminFetch(true, undefined, {
      url: "/backend/record/operate/page",
      method: "POST",
      data,
    });
    useEffectOnce(() => {
      if (fetchData && fetchData.code == 200) {
        handle401Response(fetchData);
        if (fetchData.code == 200) setResult(fetchData.data);
      }
    }, [fetchData]);
    return {
      data: result,
      isLoading,
      mutate,
    };
  },
  getById: async (id: string | number) => {
    const res = await remoteFetcher({
      url: "/backend/record/operate/getById/" + id,
      method: "GET",
    });
    return handleOperateResponse(res);
  },
  clear: async (ids: (string | number)[] | undefined = undefined) => {
    const res = await remoteFetcher({
      url: "/backend/record/operate/clear",
      method: "GET",
      params: {
        ids,
      },
    });
    return handleOperateResponse(res, OperateType.DELETE);
  },
};
/**
 * 系统在线用户
 */
export const SysOnlineApi = {
  usePage: (data: Record<string, any> = {}) => {
    const [result, setResult] = useState<any>(undefined);
    const {
      data: fetchData,
      isLoading,
      mutate,
    } = useAdminFetch(true, undefined, {
      url: "/backend/online/page",
      method: "POST",
      data,
    });
    useEffectOnce(() => {
      if (fetchData) {
        handle401Response(fetchData);
        if (fetchData.code == 200) setResult(fetchData.data);
      }
    }, [fetchData]);
    return {
      data: result,
      isLoading,
      mutate,
    };
  },
  forceOut: async (params: Record<string, any>) => {
    const res = await remoteFetcher({
      url: "/backend/online/forceOut",
      method: "GET",
      params,
    });
    return handleOperateResponse(res, OperateType.DELETE);
  },
};
