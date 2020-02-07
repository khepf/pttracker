export const countObjectProperties = (obj: object) => {
  if (typeof obj === "object") {
    return Object.keys(obj).length;
  }
  return 0;
};
