export const getFromLocalStorage = (key: string) =>
  localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) || '') : undefined;
