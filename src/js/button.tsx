/** Peer dep imports */
import React from 'react';

/** Local imports */
import { classNames } from './utils';

/** Type imports */
import type { ClassNameMap } from './utils';
import type { mainStyles, subStyles } from './common';

/** Buttons -- optionally polymorphic */
/** General use case is to render HTML <button> */
/** The as: Link use case is to render HTML <a> via `next/link` | `react-router-dom` */
/** Strats: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/ */

/** Common props for all versions */
interface CommonProps {
  children: React.ReactNode;
  /** See type subStyles */
  subStyle?: subStyles | 'jambonz';
  /** See type mainStyles */
  mainStyle?: mainStyles | 'login';
}

/** Button props, e.g. type="submit" | disabled etc... */
type ButtonProps = CommonProps & JSX.IntrinsicElements['button'];

/** Polymorphic -- pass `next/link` | `react-router-dom` Link */
interface CommonLinkProps {
  /** Provide the <Link> component */
  as: React.ElementType;
}

/** For <Link> from `next/link` */
type NextLinkProps = CommonProps & CommonLinkProps & JSX.IntrinsicElements['a'] & {
  href: string | {};
};

/** For <Link> from `react-router-dom` */
type RouterLinkProps = CommonProps & CommonLinkProps & Omit<JSX.IntrinsicElements['a'], 'href'> & {
  to: string;
};

/** Overload so mixing and matching props causes TS error */
/** <Button type="submit" disabled> -- works */
/** <Button href="/foo" as={Link}>  -- works */
/** <Button to="/bar" as={Link}>    -- works */
/** <Button disabled to="/baz">     -- error, mixing button and router link */
/** <Button disabled href="/baz">   -- error, mixing button and next link */
/** <Button href="/baz">            -- error, missing `as` prop */
export function Button(props: ButtonProps): JSX.Element;
export function Button(props: NextLinkProps): JSX.Element;
export function Button(props: RouterLinkProps): JSX.Element;
export function Button(props: ButtonProps | NextLinkProps | RouterLinkProps) {
  const { subStyle, mainStyle = 'fill', ...restProps } = props;
  const classes: ClassNameMap = {
    'btn': true,
    [`btn--${mainStyle}`]: true,
  };

  if (subStyle) {
    classes[`btn--${mainStyle}--${subStyle}`] = true;
  }

  /** For <Link> from `react-router-dom` */
  if ('to' in restProps) {
    const { as: Link, to, children, ...rest } = (restProps as RouterLinkProps);

    return (
      <Link {...rest} to={to} className={classNames(classes)}>
        {children}
      </Link>
    );
  }

  /** For <Link> from `next/link` */
  if ('href' in restProps) {
    const { as: Link, href, children, ...rest } = (restProps as NextLinkProps);

    return (
      <Link href={href}>
        <a {...rest} className={classNames(classes)}>
          {children}
        </a>
      </Link>
    );
  }

  /** Just a <button> ... */
  const { children, ...rest } = (restProps as ButtonProps);

  return (
    <button {...rest} className={classNames(classes)}>
      {children}
    </button>
  );
}

/** Button Groupings, uses <div /> with className */
type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Accepts className to map */
  className?: string;
}

export function ButtonGroup({ children, className = '' }: ButtonGroupProps) {
  const classes: ClassNameMap = {
    'btns': true,
  };

  className.split(' ').forEach(c => classes[c] = true);

  return (
    <div className={classNames(classes)}>
      {children}
    </div>
  );
}
