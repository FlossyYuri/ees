export const Translate = (item: any) => ({});

export function substringWithCompleteWord(str: string): string {
  if (str.length <= 255) {
    return str;
  }
  let subStr = str.substring(0, 255);
  let lastSpaceIndex = subStr.lastIndexOf(' ');
  if (lastSpaceIndex !== -1) {
    subStr = subStr.substring(0, lastSpaceIndex);
  }
  return subStr + ' ...';
}
