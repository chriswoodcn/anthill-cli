/**
 * 项目配置
 */
const configuraton = {
  // 应用名称
  AppName: "Anthill-Admin",
  // 版本
  Version: "1.0.0",
  // 版本代码
  VersionCode: "Dolphin",
  // 项目路径，以/开头
  BasePath: "",
  // 需要认证的路径
  PathAuth: {
    // Pattern: /^\/admin\//,
    // Root: "/admin/index",
    // Login: "/admin/login",
  },
  // 主题设置
  Settings: {
    locale: "en", // en, da, de, el, es, fr, hu, it, ja, pl, pt, ru, sv, tr, zh
    theme: "light", // light, dark, auto
    menu: "vertical", // vertical, collapsible-vertical, horizontal
    layout: "full", // full, boxed-layout
    rtlClass: "ltr", // rtl, ltr
    animation: "", // animate__fadeIn, animate__fadeInDown, animate__fadeInUp, animate__fadeInLeft, animate__fadeInRight, animate__slideInDown, animate__slideInLeft, animate__slideInRight, animate__zoomIn
    navbar: "navbar-sticky", // navbar-sticky, navbar-floating, navbar-static
  },
  //配置重定向到首页
  Redirects: [
    // 项目根路径
    {
      source: "/",
      destination: "/template/index", // Change this to your desired destination
      permanent: false, // Set to true for permanent redirect (301)
    },
    // template
    {
      source: "/template",
      destination: "/template/index", // Change this to your desired destination
      permanent: false, // Set to true for permanent redirect (301)
    },
  ],
  // 认证字段
  AuthField: "token",
  // 内置颜色设置
  Colors: {
    DefaultLevel: 7,
    Primary: "#1badaa",
    Secondary: "#018ACB",
    Success: "#3ab078",
    Danger: "#FF7878",
    Warning: "#FFD966",
    Info: "#DBA979",
    White: "#ffffff",
  },
};
export default configuraton;

/**
 * 颜色混合
 */
import Color from "color";
export const mixColor = (color, mix, ratio) => {
  return Color(color).mix(Color(mix), ratio).hex();
};
export const mixWhite = (color, ratio) => {
  return mixColor(color, "#ffffff", ratio);
};
export const mixBlack = (color, ratio) => {
  return mixColor(color, "#000000", ratio);
};

export const genPrimaryColors = (color) => {
  const ins = Color(color);
  return [
    ins.lighten(0.6).hex(),
    ins.lighten(0.5).hex(),
    ins.lighten(0.4).hex(),
    ins.lighten(0.3).hex(),
    ins.lighten(0.2).hex(),
    ins.lighten(0.1).hex(),
    ins.hex(),
    ins.darken(0.1).hex(),
    ins.darken(0.2).hex(),
    ins.darken(0.3).hex(),
  ];
};
// 主题色
export const PrimaryColors = genPrimaryColors(configuraton.Colors.Primary);
class ForeachNumber {
  constructor(num) {
    this.num = num;
  }
  map(callback) {
    const result = [];
    for (let i = this.num; i >= 0; i--) {
      result.push(callback(i));
    }
    return result;
  }
  genColors(color, mix) {
    return this.map((i) => {
      if (i != 0) {
        return mix(color, i * 0.1);
      }
      return color;
    });
  }
}
// 白色
export const WhiteColors = new ForeachNumber(9).genColors("#ffffff", mixBlack);
// 黑色
export const BlackColors = new ForeachNumber(9).genColors("#000000", mixWhite);
