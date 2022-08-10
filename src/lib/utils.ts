let rootStyle: CSSStyleDeclaration;

export interface ClassNameMap {
  [key: string]: boolean;
}

export const classNames = (obj: ClassNameMap) => {
  return Object.keys(obj)
    .filter((k) => obj[k] === true)
    .join(" ");
};

export const getCssVar = (prop: string) => {
  if (!rootStyle) {
    rootStyle = window.getComputedStyle(document.documentElement);
  }

  return rootStyle.getPropertyValue(prop);
};
