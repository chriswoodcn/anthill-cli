import LanguageDropdown from "@/components/compose/LanguageDropdown";
import IconFacebookCircle from "@/components/icon/icon-facebook-circle";
import IconGoogle from "@/components/icon/icon-google";
import IconInstagram from "@/components/icon/icon-instagram";
import IconTwitter from "@/components/icon/icon-twitter";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import ComponentsAuthLoginForm from "../_client/ComponentsAuthLoginForm";
import Image from "@/components/core/Image";

export const metadata: Metadata = {
  title: "Login Boxed",
};

const BoxedSignIn = () => {
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
        <Image
          autosize="true"
          src="/assets/images/template/auth/coming-soon-object1.png"
          alt="image"
          className="absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2"
        />
        <Image
          autosize="true"
          src="/assets/images/template/auth/coming-soon-object2.png"
          alt="image"
          className="absolute left-24 top-0 h-40 md:left-[30%]"
        />
        <Image
          autosize="true"
          src="/assets/images/template/auth/coming-soon-object3.png"
          alt="image"
          className="absolute right-0 top-0 h-[300px]"
        />
        <Image
          autosize="true"
          src="/assets/images/template/auth/polygon-object.svg"
          alt="image"
          className="absolute bottom-0 end-[28%]"
        />
        <div className="relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-3 dark:bg-[linear-gradient(52.22deg,#363636_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#363636_100%)]">
          <div className="relative flex flex-col justify-center rounded-md bg-white/50 px-4 py-20 backdrop-blur-lg dark:bg-black-5/20 lg:min-h-[758px]">
            <div className="absolute end-6 top-6">
              <LanguageDropdown />
            </div>
            <div className="mx-auto w-full max-w-[440px]">
              <div className="mb-10">
                <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">
                  Sign in
                </h1>
                <p className="text-base font-bold leading-normal text-white-dark">
                  Enter your email and password to login
                </p>
              </div>
              <ComponentsAuthLoginForm />
              <div className="relative my-7 text-center md:mb-9">
                <span className="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-white-light dark:bg-white-dark"></span>
                <span className="relative bg-white px-2 font-bold uppercase text-white-dark dark:bg-dark dark:text-white-7">
                  or
                </span>
              </div>
              <div className="mb-10 md:mb-[60px]">
                <ul className="flex justify-center gap-3.5 text-white">
                  <li>
                    <Link
                      href="#"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)",
                      }}
                    >
                      <IconInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)",
                      }}
                    >
                      <IconFacebookCircle />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)",
                      }}
                    >
                      <IconTwitter fill={true} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)",
                      }}
                    >
                      <IconGoogle />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center dark:text-white">
                Don&apos;t have an account ?&nbsp;
                <Link
                  href="/auth/boxed-signup"
                  className="uppercase text-primary underline transition hover:text-black dark:hover:text-white"
                >
                  SIGN UP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxedSignIn;
