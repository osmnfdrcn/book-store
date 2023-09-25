export const convertStringtoSlug = (str: string): string => {
  const cleanedString = str
    .trim()
    .replace(/[^\w\s]/g, "")
    .toLowerCase();
  const words: string[] = cleanedString.split(/\s+/);
  const convertedStr: string = words.join("-");
  return convertedStr;
};
