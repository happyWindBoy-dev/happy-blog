/**
 * 去除html tag
 * @param str html 字符串
 * @returns string
 */
export function filterHTMLTag(str: string) {
  str = str.replace(/<[^<>]+>/g, ''); //去除HTML tag
  str = str.replace(/&nbsp;/gi, '');
  return str;
}
