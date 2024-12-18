"use client";
import PanelCodeHighlight from "@/components/compose/PanelCodeHighlight";
import IconSearch from "@/components/icon/icon-search";

import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";

const ElementsSearchOverlay = () => {
  const [focus, setFocus] = useState(false);
  const ref = useRef(null);
  const overlaySearchClick = () => {
    setFocus(true);
  };
  useClickAway(ref, () => {
    console.log("OUTSIDE CLICKED");
    setFocus(false);
  });
  return (
    <PanelCodeHighlight
      title="Overlay"
      codeHighlight={`import { useState, useRef } from 'react';
        import { useClickAway } from "react-use";

        const [focus, setFocus] = useState(false);
        const ref = useRef(null);
        const overlaySearchClick = () => {
            setFocus(true);
        };
        useClickAway(ref, () => {
            setFocus(false);
        });

        <form>
          <div
          ref={ref}
          className="search-form-overlay relative border border-white-dark/20 rounded-md h-12 w-full"
          onClick={overlaySearchClick}>
              <input
                  type="text"
                  placeholder="Search..."
                  className={\`form-input bg-white h-full placeholder:tracking-wider hidden ltr:pl-12 rtl:pr-12 peer \${focus ? '!block' : ''}\`}
              />
              <button
                  type="button"
                  className={\`text-dark/70 absolute ltr:right-1 rtl:left-1 inset-y-0 my-auto w-9 h-9 p-0 flex items-center justify-center peer-focus:text-primary \${
                      focus ? '!ltr:!right-auto ltr:left-1 rtl:right-1' : ''
                  }\`}
              >
                  <svg>...</svg>
              </button>
          </div>
        </form>`}
    >
      <div className="mb-5 space-y-5">
        <form>
          <div
            ref={ref}
            className="search-form-overlay relative h-12 w-full rounded-md border border-white-dark/20"
            onClick={overlaySearchClick}
          >
            <input
              type="text"
              placeholder="Search..."
              className={`peer form-input hidden h-full bg-white placeholder:tracking-wider ltr:pl-12 rtl:pr-12 ${
                focus ? "!block" : ""
              }`}
            />
            <button
              type="button"
              className={`absolute inset-y-0 my-auto flex h-9 w-9 items-center justify-center p-0 text-dark/70 peer-focus:text-primary ltr:right-1 rtl:left-1 ${
                focus ? "!ltr:!right-auto ltr:left-1 rtl:right-1" : ""
              }`}
            >
              <IconSearch className="mx-auto h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </PanelCodeHighlight>
  );
};

export default ElementsSearchOverlay;
