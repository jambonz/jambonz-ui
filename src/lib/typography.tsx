/** Peer dep imports */
import React from "react";

/** Type imports */
import type { DivProps, HeadingProps, ParagraphProps } from "./common";

/**
 * Global `<h1>` typographic style
 */
export function H1({ children, ...rest }: HeadingProps) {
  return <h1 {...rest}>{children}</h1>;
}

/**
 * Global `<h2>` typographic style
 */
export function H2({ children, ...rest }: HeadingProps) {
  return <h2 {...rest}>{children}</h2>;
}

/**
 * Global `<h3>` typographic style
 */
export function H3({ children, ...rest }: HeadingProps) {
  return <h3 {...rest}>{children}</h3>;
}

/**
 * Global `<h4>` typographic style
 */
export function H4({ children, ...rest }: HeadingProps) {
  return <h4 {...rest}>{children}</h4>;
}

/**
 * Global `<h5>` typographic style
 */
export function H5({ children, ...rest }: HeadingProps) {
  return <h5 {...rest}>{children}</h5>;
}

/**
 * Global `<h6>` typographic style
 */
export function H6({ children, ...rest }: HeadingProps) {
  return <h6 {...rest}>{children}</h6>;
}

/**
 * Global `<p>` typographic style
 */
export function P({ children, ...rest }: ParagraphProps) {
  return <p {...rest}>{children}</p>;
}

/**
 * Global meta text typographic style
 */
export function M({ children, className = "m", ...rest }: DivProps) {
  return (
    <div {...rest} className={className}>
      {children}
    </div>
  );
}

/**
 * Global `small` meta text typographic style
 */
export function MS(props: DivProps) {
  return <M {...props} className="ms" />;
}

/**
 * Global `xsmall` meta text typographic style
 */
export function MXS(props: DivProps) {
  return <M {...props} className="mxs" />;
}
