/** Peer dep imports */
import React from "react";

/** Local imports */
import { classNames } from "./utils";

/** Type imports */
import type { ClassNameMap } from "./utils";
import type { mainStyles, subStyles, DivProps } from "./common";

/** Buttons -- optionally polymorphic */
/** General use case is to render HTML <button> */
/** The as: Link use case is to render HTML <a> via `next/link` | `react-router-dom` */
/** Strats: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/ */

/** Overloaded so mixing and matching props causes TS error */
/** <Button type="submit" disabled> -- works */
/** <Button href="/foo" as={Link}>  -- works */
/** <Button to="/bar" as={Link}>    -- works */
/** <Button disabled to="/baz">     -- error, mixing button and router link */
/** <Button disabled href="/baz">   -- error, mixing button and next link */
/** <Button href="/baz">            -- error, missing `as` prop */

/** Note: storybook can't parse the button props so `disabled` etc don't work with args... */

/** Common props for all versions */
interface CommonProps {
  /** For obvious reasons */
  small?: boolean;
  /** See type subStyles */
  subStyle?: subStyles;
  /** See type mainStyles */
  mainStyle?: mainStyles;
}

/** Polymorphic -- pass `next/link` | `react-router-dom` Link */
interface CommonLinkProps {
  /** Provide the <Link> component */
  as: React.ElementType;
}

/** Button props, e.g. type="submit" | disabled etc... */
export type ButtonProps = CommonProps & JSX.IntrinsicElements["button"];

/** For <Link> from `next/link` */
export type NextLinkProps = CommonProps &
  CommonLinkProps &
  JSX.IntrinsicElements["a"] & {
    href: string | Record<string, unknown>;
  };

/** For <Link> from `react-router-dom` */
export type RouterLinkProps = CommonProps &
  CommonLinkProps &
  Omit<JSX.IntrinsicElements["a"], "href"> & {
    to: string;
  };

/**
 * Global UI button style. Button can be polymorphic and
 * render a `next/link` or `react-router-dom` Link.
 */
export function Button(props: ButtonProps): JSX.Element;
export function Button(props: NextLinkProps): JSX.Element;
export function Button(props: RouterLinkProps): JSX.Element;
export function Button(props: ButtonProps | NextLinkProps | RouterLinkProps) {
  const { small = false, subStyle, mainStyle, ...restProps } = props;
  const classes: ClassNameMap = {
    btn: true,
  };

  if (mainStyle) {
    classes[`btn--${mainStyle}`] = true;
  }

  if (subStyle) {
    classes[`btn--${subStyle}`] = true;
  }

  if (small) {
    classes["btn--small"] = true;
  }

  /** For <Link> from `react-router-dom` */
  if ("to" in restProps) {
    const { as: Link, to, ...rest } = restProps as RouterLinkProps;

    return <Link {...rest} to={to} className={classNames(classes)} />;
  }

  /** For <Link> from `next/link` */
  if ("href" in restProps) {
    const { as: Link, href, children, ...rest } = restProps as NextLinkProps;

    return (
      <Link href={href}>
        <a {...rest} className={classNames(classes)}>
          {children}
        </a>
      </Link>
    );
  }

  /** Just a <button> ... */
  return (
    <button {...(restProps as ButtonProps)} className={classNames(classes)} />
  );
}

/** Button Groupings, uses <div /> with className */
export type ButtonGroupProps = DivProps & {
  /** Applies flex position */
  left?: boolean;
  /** Applies flex position */
  right?: boolean;
};

/**
 * Container to group multiple UI buttons with alignment and responsive layout.
 */
export function ButtonGroup({
  left = false,
  right = false,
  children,
  className = "",
}: ButtonGroupProps) {
  const classes: ClassNameMap = {
    btns: true,
  };

  if (left) {
    classes["btns--left"] = true;
  } else if (right) {
    classes["btns--right"] = true;
  }

  if (className) {
    className.split(" ").forEach((c) => (classes[c] = true));
  }

  return <div className={classNames(classes)}>{children}</div>;
}
