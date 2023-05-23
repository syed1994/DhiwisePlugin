import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder8: "rounded-lg",
  CircleBorder20: "rounded-[20px]",
  RoundedBorder4: "rounded",
};
const variants = {
  FillLightgreen900: "bg-light_green_900 text-white_A700",
  OutlineGray400:
    "bg-white_A700 border border-gray_400 border-solid text-black_900",
};
const sizes = { sm: "p-2.5", md: "p-3.5", lg: "p-[35px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "CircleBorder20",
    "RoundedBorder4",
  ]),
  variant: PropTypes.oneOf(["FillLightgreen900", "OutlineGray400"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
