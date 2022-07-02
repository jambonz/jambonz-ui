export interface ClassNameMap {
  [key: string]: boolean;
}

export const classNames = (o: ClassNameMap) => {
  return Object.keys(o)
    .filter(k => (o[k] === true))
    .join(' ');
};
