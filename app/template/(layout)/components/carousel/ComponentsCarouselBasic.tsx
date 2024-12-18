"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

import { RootState, useAppSelector } from "@/store";

import PanelCodeHighlight from '@/components/compose/PanelCodeHighlight';
import IconCaretDown from "@/components/icon/icon-caret-down";
import Image from '@/components/core/Image';

const ComponentsCarouselBasic = () => {
  const items = ["carousel1.jpeg", "carousel2.jpeg", "carousel3.jpeg"];

  const adminSetting = useAppSelector((state: RootState) => state.adminSetting);
  return (
    <PanelCodeHighlight
      title="Basic"
      codeHighlight={`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

import Image from "@/components/core/Image";

const items = ['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg'];
const adminSetting = useAppSelector((state: RootState) => state.adminSetting);
<Swiper
    modules={[Navigation, Pagination]}
    navigation={{ nextEl: '.swiper-button-next-ex1', prevEl: '.swiper-button-prev-ex1' }}
    pagination={{ clickable: true }}
    className="swiper max-w-3xl mx-auto mb-5"
    id="slider1"
    dir={adminSetting.rtlClass}
    key={adminSetting.rtlClass === 'rtl' ? 'true' : 'false'}
>
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <Image src={\`/assets/images/template/\${item}\`} className="w-full max-h-80 object-cover" alt="itemImage" />
                </SwiperSlide>
            );
        })}
    </div>
    <button className="swiper-button-prev-ex1 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex1 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
</Swiper>`}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next-ex1",
          prevEl: ".swiper-button-prev-ex1",
        }}
        pagination={{ clickable: true }}
        className="swiper mx-auto mb-5 max-w-3xl"
        id="slider1"
        dir={adminSetting.rtlClass}
        key={adminSetting.rtlClass === "rtl" ? "true" : "false"}
      >
        <div className="swiper-wrapper">
          {items.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  src={`/assets/images/template/${item}`}
                  className="max-h-80 w-full object-cover"
                  alt="itemImage"
                />
              </SwiperSlide>
            );
          })}
        </div>
        <button className="swiper-button-prev-ex1 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:left-2 rtl:right-2">
          <IconCaretDown className="h-5 w-5 rotate-90 rtl:-rotate-90" />
        </button>
        <button className="swiper-button-next-ex1 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:right-2 rtl:left-2">
          <IconCaretDown className="h-5 w-5 -rotate-90 rtl:rotate-90" />
        </button>
      </Swiper>
    </PanelCodeHighlight>
  );
};

export default ComponentsCarouselBasic;
