export function getExpirationSeconds(str: string) {
  if (/^[0-9]+$/.test(str)) return parseInt(str, 10);
  if (str.endsWith('m')) return parseInt(str) * 60;
  if (str.endsWith('h')) return parseInt(str) * 60 * 60;
  if (str.endsWith('d')) return parseInt(str) * 60 * 60 * 24;
  return 900; // default 15m
}
