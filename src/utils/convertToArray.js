export default function converToArray(objeto) {
  if (objeto == undefined) return [];
  return Object.entries(objeto).map(([key, value]) => ({ name: key, value: value }));
}