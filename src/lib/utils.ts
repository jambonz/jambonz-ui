export interface ClassNameMap {
  [key: string]: boolean;
}

export const classNames = (obj: ClassNameMap) => {
  return Object.keys(obj)
    .filter((k) => obj[k] === true)
    .join(" ");
};

export const getCssVar = (prop: string) => {
  const style = window.getComputedStyle(document.documentElement);
  return style.getPropertyValue(prop);
};
