/**
 * Abbreviate a large number with a suffix (k, m, b, t).
 * @param {number} value  - The raw number to abbreviate.
 * @param {number} decimals - Decimal places to show (default 1). Pass 2 for "2.00k".
 * @param {boolean} uppercase - Whether to uppercase the suffix (default false).
 */
export default function abbreviateNumber(value, decimals = 1, uppercase = false) {
  if (value == null || isNaN(value)) return value;

  if (value < 1000) return value;

  const suffixes = ['', 'k', 'm', 'b', 't'];
  let suffixNum = Math.floor((`${value}`).length / 4);

  let shortValue = value / Math.pow(1000, suffixNum);

  // Avoid jumping past the next suffix bucket
  if (shortValue >= 1000 && suffixNum < suffixes.length - 1) {
    suffixNum++;
    shortValue /= 1000;
  }

  const formatted = shortValue.toFixed(decimals);
  const suffix = uppercase ? suffixes[suffixNum].toUpperCase() : suffixes[suffixNum];

  return `${formatted}${suffix}`;
}
