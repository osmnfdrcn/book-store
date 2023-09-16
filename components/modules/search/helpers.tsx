export const convertStringtoSlug = (str: string): string => {
  const cleanedString = str.replace(/[^\w\s]/g, "").toLowerCase();
  const words: string[] = cleanedString.split(" ");
  const convertedStr: string = words.join("-");

  return convertedStr;
};
