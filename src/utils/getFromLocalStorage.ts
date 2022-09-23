export const getFromLocalStorage = (key: string) => {
  try {
    return localStorage.getItem(key) ? JSON.parse(`${localStorage.getItem(key)}` || '') : undefined;
  } catch (e) {
    return localStorage.getItem(key) || undefined;
  }
};
