import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const CN = (...classes) => {
  return twMerge(clsx(classes));
};