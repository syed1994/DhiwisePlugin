import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-5xl md:text-5xl text-8xl",
  h2: "font-bold sm:text-5xl md:text-5xl text-7xl",
  h3: "font-normal sm:text-5xl md:text-5xl text-[64px]",
  h4: "font-normal text-5xl sm:text-[38px] md:text-[44px]",
  h5: "font-medium md:text-3xl sm:text-[28px] text-[32px]",
  h6: "text-xl",
  body1: "text-base",
  body2: "text-sm",
  body3: "font-bold sm:text-5xl md:text-5xl text-[132px]",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
