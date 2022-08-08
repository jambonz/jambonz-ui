/** Peer dep imports */
import React from "react";

/** Common Main and Sub styles used for Buttons and Icons */

/** Valid styles for core class, as in `btn--fill` */
export type mainStyles = "hollow";

/** Valid styles for sub classing, as in `btn--fill--dark` */
export type subStyles = "dark" | "blue" | "teal" | "purple" | "white" | "grey";

/** HTML divs, as in <div />  */
export type DivProps = React.HTMLAttributes<HTMLDivElement>;

/** HTML headings, as in <h[1-6] /> */
export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

/** HTML paragraphs, as in <p /> */
export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;
