export const findNestedObj = <T extends object>(entireObj: T, keyToFind: string) => {
  if (keyToFind === undefined) {
    return entireObj;
  }
  if (entireObj.hasOwnProperty(keyToFind)) return entireObj;

  for (const value of Object.values(entireObj)) {
    if (typeof value === 'object' && value != null) {
      const o: T = findNestedObj(value, keyToFind);
      if (o != null) return o;
    }
  }
  return entireObj;
};
