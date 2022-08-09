/** Peer dep imports */
import React from "react";

/** Local imports */
import { classNames } from "./utils";

/** Type imports */
import type { ClassNameMap } from "./utils";
import type { mainStyles, subStyles, DivProps } from "./common";

/** Icons, uses <div /> with className */
export type IconProps = DivProps & {
  /** See type subStyles */
  subStyle?: subStyles;
  /** See type mainStyles */
  mainStyle?: mainStyles;
};

/**
 * GLobal UI icon style that wraps `react-feather` SVGs.
 */
export function Icon({ subStyle, mainStyle, ...rest }: IconProps) {
  const classes: ClassNameMap = {
    ico: true,
  };

  if (mainStyle) {
    classes[`ico--${mainStyle}`] = true;
  }

  if (subStyle) {
    classes[`ico--${subStyle}`] = true;
  }

  return <div {...rest} className={classNames(classes)} />;
}

/**
 * Container to group multiple UI icons with responsive layout.
 */
export function IconGroup({ children, className = "" }: DivProps) {
  const classes: ClassNameMap = {
    icos: true,
  };

  if (className) {
    className.split(" ").forEach((c) => (classes[c] = true));
  }

  return <div className={classNames(classes)}>{children}</div>;
}
