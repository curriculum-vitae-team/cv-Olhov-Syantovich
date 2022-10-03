type ArrType = {
  name: string;
  id: string;
};

export const getIdByName = (arr: ArrType[] | undefined, name: string): string =>
  arr ? (arr.find((item) => item.name === name)?.id as string) : '';
