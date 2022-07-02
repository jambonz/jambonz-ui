/** Peer dep imports */
import React from 'react';

/** Local imports */
import { classNames } from './utils';

/** Type imports */
import type { ClassNameMap } from './utils';
import type { mainStyles, subStyles, DivProps } from './common';

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
