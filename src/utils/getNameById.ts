type Item = {
  id: string;
  name: string;
};

export const getNameById = <T extends Item>(id: string, arr: T[] = []): string =>
  arr.find((el) => el.id === id)?.name || '';
