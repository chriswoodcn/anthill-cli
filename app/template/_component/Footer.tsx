const Footer = (
  props: { type?: "blank" | "default" } = { type: "default" }
) => {
  return props.type === "default" ? (
    <div className="p-6 pt-0 mt-auto text-center ltr:sm:text-left rtl:sm:text-right dark:text-white-5">
      Copyright &copy; 2022 - {new Date().getFullYear()}. Anthill All rights reserved.
    </div>
  ) : (
    <div className="absolute bottom-6 w-full text-center dark:text-white">
      Copyright &copy; 2022 - {new Date().getFullYear()}. Anthill All rights reserved.
    </div>
  );
};

export default Footer;
