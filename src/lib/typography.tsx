/** Peer dep imports */
import React from "react";

/** Type imports */
import type { DivProps, HeadingProps, ParagraphProps } from "./common";

export function H1({ children, ...rest }: HeadingProps) {
  return <h1 {...rest}>{children}</h1>;
}

export function H2({ children, ...rest }: HeadingProps) {
  return <h2 {...rest}>{children}</h2>;
}

export function H3({ children, ...rest }: HeadingProps) {
  return <h3 {...rest}>{children}</h3>;
}

export function H4({ children, ...rest }: HeadingProps) {
  return <h4 {...rest}>{children}</h4>;
}

export function H5({ children, ...rest }: HeadingProps) {
  return <h5 {...rest}>{children}</h5>;
}

export function H6({ children, ...rest }: HeadingProps) {
  return <h6 {...rest}>{children}</h6>;
}

export function P({ children, ...rest }: ParagraphProps) {
  return <p {...rest}>{children}</p>;
}

export function M({ children, ...rest }: DivProps) {
  return (
    <div {...rest} className="m">
      {children}
    </div>
  );
}

export function MS({ children, ...rest }: DivProps) {
  return (
    <div {...rest} className="ms">
      {children}
    </div>
  );
}

export function MXS({ children, ...rest }: DivProps) {
  return (
    <div {...rest} className="mxs">
      {children}
    </div>
  );
}
