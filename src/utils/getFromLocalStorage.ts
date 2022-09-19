export const getFromLocalStorage = (key: string, res: any): typeof res =>
  localStorage.getItem(key) ? (JSON.parse(localStorage.getItem(key) || '') as typeof res) : undefined;
