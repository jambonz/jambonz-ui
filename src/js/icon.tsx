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
  subStyle,
  mainStyle,
  ...rest
}: IconProps) {
  const classes: ClassNameMap = {
    'ico': true,
  };

  if (mainStyle) {
    classes[`ico--${mainStyle}`] = true;
  }

  if (subStyle) {
    classes[`ico--${subStyle}`] = true;
  }

  return (
    <div {...rest} className={classNames(classes)} />
  );
}

/** Icon Groupings, uses <div /> with className */
type IconGroupProps = DivProps & {
  /** Applies sub class for styling, as in `icons--set` */
  set?: boolean;
};

export function IconGroup({
  set = false,
  children,
  className = ''
}: IconGroupProps) {
  const classes: ClassNameMap = {
    'icos': true,
    'icos--set': set,
  };

  if (className) {
    className.split(' ').forEach(c => classes[c] = true);
  }

  return (
    <div className={classNames(classes)}>
      {children}
    </div>
  );
}
