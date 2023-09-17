// book dizininde verilen alandan ilgili filter alaninda gosterileck unique elemanlari olan bir dizi donuyor.
export const uniqueSet = <T extends unknown>(arr: T[] = []) =>
  Array.from(new Set(arr?.map((item: T) => JSON.stringify(item)))).map((item) =>
    JSON.parse(item)
  );

//verilen diziyi name alanina gore siraliyor.
export const sortArray = <T extends { name: string }>(arr: T[]): T[] => {
  const array = arr.sort((a: T, b: T) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  );
  return array;
};
