import React from "react";
import Footer from "../_component/Footer";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen text-black-7 dark:text-white-7">
      {children}
    </div>
  );
};

export default AuthLayout;
