import LanguageDropdown from "@/components/compose/LanguageDropdown";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import ComponentsAuthUnlockForm from "../_client/ComponentsAuthUnlockForm";
import Image from "@/components/core/Image";
import Logo from "@/components/compose/Logo";
import Footer from "../../../_component/Footer";

export const metadata: Metadata = {
  title: "Unlock Cover",
};

const CoverLockScreen = () => {
  return (
    <div>
      <div className="absolute inset-0">
        <Image
          src="/assets/images/template/auth/bg-gradient.png"
          alt="image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative flex min-h-screen items-center justify-center bg-bg_map bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-black-8 sm:px-16">
        <div className="relative flex w-full max-w-[1502px] flex-col justify-between overflow-hidden rounded-md bg-white/60 backdrop-blur-lg dark:bg-black-7 lg:min-h-[758px] lg:flex-row lg:gap-10 xl:gap-0">
          <div className="relative hidden w-full items-center justify-center bg-[linear-gradient(225deg,rgba(239,18,98,1)_0%,rgba(67,97,238,1)_100%)] p-5 lg:inline-flex lg:max-w-[835px] xl:-ms-28 ltr:xl:skew-x-[14deg] rtl:xl:skew-x-[-14deg]">
            {/* <div className="absolute inset-y-0 w-8 from-primary/10 via-transparent to-transparent ltr:-right-10 ltr:bg-gradient-to-r rtl:-left-10 rtl:bg-gradient-to-l xl:w-16 ltr:xl:-right-20 rtl:xl:-left-20"></div> */}
            <div className="ltr:xl:-skew-x-[14deg] rtl:xl:skew-x-[14deg]">
              <Link href="/" className="ms-10 block w-48 lg:w-72">
                <Logo className="w-48 h-48  text-white" />
              </Link>
              <div className="mt-24 hidden w-full max-w-[430px] lg:block">
                <Image
                  src="/assets/images/template/auth/unlock.svg"
                  alt="Cover Image"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6 lg:max-w-[667px]">
            <div className="flex w-full max-w-[440px] items-center gap-2 lg:absolute lg:end-6 lg:top-6 lg:max-w-full">
              <Link href="/" className="block w-8 lg:hidden">
                <Logo className="w-16 h-16  text-primary m-auto" />
              </Link>
              <LanguageDropdown className="ms-auto w-max" />
            </div>
            <div className="w-full max-w-[440px] lg:mt-16">
              <div className="mb-10 flex items-center">
                <div className="flex h-16 w-16 items-end justify-center overflow-hidden rounded-full bg-[#00AB55] ltr:mr-4 rtl:ml-4">
                  <Image
                    src="/assets/images/template/auth/user.png"
                    className="w-full object-cover"
                    alt="images"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl dark:text-white">Shaun Park</h4>
                  <p className="text-white-dark">
                    Enter your password to unlock your ID
                  </p>
                </div>
              </div>
              <ComponentsAuthUnlockForm />
            </div>
            <Footer type="blank"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLockScreen;
