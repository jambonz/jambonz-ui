import React from 'react';

import { classNames, ClassNameMap } from './utils';

/** Main and Sub styles used for Buttons and Icons */

/** Valid styles for core class, as in `btn--fill` */
type mainStyles = 'pill' | 'fill';

/** Valid styles for sub classing, as in `btn--fill--dark` */
type subStyles = 'white' | 'dark' | 'teal' | 'blue' | 'purple';

/** HTML headings, as in <h[1-6] /> */
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

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

/** HTML paragraphs, as in <p /> */
type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

export function P({ children, ...rest }: ParagraphProps) {
  return <p {...rest}>{children}</p>;
}

/** HTML divs, as in <div />  */
type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function M({ children, ...rest }: DivProps) {
  return <div {...rest} className="m">{children}</div>;
}

export function MS({ children, ...rest }: DivProps) {
  return <div {...rest} className="ms">{children}</div>;
}

export function MXS({ children, ...rest }: DivProps) {
  return <div {...rest} className="mxs">{children}</div>;
}

/** Icons, uses <div /> with className */
type IconProps = DivProps & {
  /** See type subStyles */
  subStyle?: subStyles;
  /** See type mainStyles */
  mainStyle?: mainStyles;
};

export function Icon({
  children,
  subStyle,
  mainStyle = 'fill',
  ...rest
}: IconProps) {
  const classes: ClassNameMap = {
    'icon': true,
    [`icon--${mainStyle}`]: true,
  };

  if (subStyle) {
    classes[`icon--${mainStyle}--${subStyle}`] = true;
  }

  return (
    <div {...rest} className={classNames(classes)}>
      {children}
    </div>
  );
}

/** Icon Groupings, uses <div /> with className */
type IconGroupProps = DivProps & {
  /** Applies core className for styling, as in `icons--set` */
  set?: boolean;
  /** Accepts className to map */
  className?: string;
};

export function IconGroup({
  set = false,
  children,
  className = ''
}: IconGroupProps) {
  const classes: ClassNameMap = {
    'icons': true,
    'icons--set': set,
  };

  className.split(' ').forEach(c => classes[c] = true);

  return (
    <div className={classNames(classes)}>
      {children}
    </div>
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Provide the <Link> component */
  as?: React.ElementType;
  /** For <Link> from `react-router-dom` */
  to?: string;
  /** For <Link> from `next/link` */
  href?: string | {};
  /** See type subStyles */
  subStyle?: subStyles | 'light' | 'jambonz';
  /** See type mainStyles */
  mainStyle?: mainStyles | 'login';
};

export function Button({
  as: Link,
  to,
  href,
  children,
  subStyle,
  mainStyle = 'fill',
  ...rest
}: ButtonProps) {
  const classes: ClassNameMap = {
    'btn': true,
    [`btn--${mainStyle}`]: true,
  };

  if (subStyle) {
    classes[`btn--${mainStyle}--${subStyle}`] = true;
  }

  /** For <Link> from `react-router-dom` */
  if (to && Link) {
    return (
      <Link {...rest} to={to} className={classNames(classes)}>
        {children}
      </Link>
    );
  }
  
  /** For <Link> from `next/link` */
  if (href && Link) {
    return (
      <Link href={href}>
        <a {...rest} className={classNames(classes)}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button {...rest} className={classNames(classes)}>
      {children}
    </button>
  );
}

/** Button Groupings, uses <div /> with className */
type ButtonGroupProps = DivProps & {
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
