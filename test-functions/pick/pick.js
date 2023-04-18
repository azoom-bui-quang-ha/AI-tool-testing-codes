export const pick = (source, options) => {
  if (typeof source !== "object") return source;

  const { props = [], converter } = options;
  const hasConverter = typeof converter === "function";
  let clonedSource = {};

  if (!props.length) return deepClone(source);

  for (let prop of props) {
    clonedSource[prop] = source[prop];
  }

  if (hasConverter) clonedSource = converter(clonedSource);

  return clonedSource;
};
