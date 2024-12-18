"use client";

import IconCaretDown from "@/components/icon/icon-caret-down";
import PanelCodeHighlight from "@/components/compose/PanelCodeHighlight";
import Dropdown from "@/components/core/Dropdown";
import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

const ElementsDropdownsLargeBtn = () => {
  const isRtl =
    useSelector((state: RootState) => state.adminSetting.rtlClass) === "rtl";
  return (
    <PanelCodeHighlight
      title="Large Button"
      codeHighlight={`import Dropdown from '@/components/dropdown';

const isRtl = useSelector((state: RootState) => state.adminSetting.rtlClass) === 'rtl';

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
        btnClassName="btn btn-success btn-lg dropdown-toggle"
        button={
            <>
                Large Button
                <span>
                    <svg>...</svg>
                </span>
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">
                    Action
                </button>
            </li>
            <li>
                <button type="button">
                    Another action
                </button>
            </li>
            <li>
                <button type="button">
                    Something else here
                </button>
            </li>
            <li>
                <button type="button">
                    Separated link
                </button>
            </li>
        </ul>
    </Dropdown>
</div>

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
        btnClassName="btn btn-outline-success btn-lg dropdown-toggle"
        button={
            <>
                Large Button
                <span>
                    <svg>...</svg>
                </span>
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">
                    Action
                </button>
            </li>
            <li>
                <button type="button">
                    Another action
                </button>
            </li>
            <li>
                <button type="button">
                    Something else here
                </button>
            </li>
            <li>
                <button type="button">
                    Separated link
                </button>
            </li>
        </ul>
    </Dropdown>
</div>`}
    >
      <div className="mb-5">
        <div className="flex w-full flex-wrap justify-around gap-7">
          <div className="flex items-center justify-center">
            <div className="dropdown">
              <Dropdown
                placement={`${isRtl ? "bottom-start" : "bottom-end"}`}
                btnClassName="btn btn-success btn-lg dropdown-toggle"
                button={
                  <>
                    Large Button
                    <span>
                      <IconCaretDown className="inline-block ltr:ml-1 rtl:mr-1" />
                    </span>
                  </>
                }
              >
                <ul className="!min-w-[170px]">
                  <li>
                    <button type="button">Action</button>
                  </li>
                  <li>
                    <button type="button">Another action</button>
                  </li>
                  <li>
                    <button type="button">Something else here</button>
                  </li>
                  <li>
                    <button type="button">Separated link</button>
                  </li>
                </ul>
              </Dropdown>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="dropdown">
              <Dropdown
                placement={`${isRtl ? "bottom-start" : "bottom-end"}`}
                btnClassName="btn btn-outline-success btn-lg dropdown-toggle"
                button={
                  <>
                    Large Button
                    <span>
                      <IconCaretDown className="inline-block ltr:ml-1 rtl:mr-1" />
                    </span>
                  </>
                }
              >
                <ul className="!min-w-[170px]">
                  <li>
                    <button type="button">Action</button>
                  </li>
                  <li>
                    <button type="button">Another action</button>
                  </li>
                  <li>
                    <button type="button">Something else here</button>
                  </li>
                  <li>
                    <button type="button">Separated link</button>
                  </li>
                </ul>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </PanelCodeHighlight>
  );
};

export default ElementsDropdownsLargeBtn;