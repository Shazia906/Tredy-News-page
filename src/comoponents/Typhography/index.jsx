import React from "react";
import { CN } from "../../utils";

const classNames = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-bold",
  h3: "text-2xl font-bold",
  h4: "text-xl font-bold",
  h5: "text-lg font-bold",
  h6: "text-base font-bold",
  p: "text-base font-normal",
  span: "text-base font-normal",
};

const Typography = ({
  children,
  className,
  variant,
  before,
  after,
  ...otherProps
}) => {
  const Element = variant ?? "span";
  const baseClass = classNames[Element] ?? "";

  return (
    <Element
      {...otherProps}
      className={CN(baseClass, className,)}
    >
      {children}
    </Element>
  );
};

export default Typography;