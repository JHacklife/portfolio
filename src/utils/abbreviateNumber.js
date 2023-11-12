export default function abbreviateNumber(value) {
  var newValue = value;
  if (value >= 1000) {
    var suffixes = ["", "k", "m", "b", "t"];
    var suffixNum = Math.floor(("" + value).length / 4);
    var shortValue = '';
    for (var precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(3));
      if (shortValue >= 1000 && suffixNum < suffixes.length - 1) {
        suffixNum++;
        shortValue /= 1000;
      } else {
        break;  // Salir del bucle si shortValue es menor a 1000 o hemos alcanzado el final de los sufijos
      }
    }
    newValue = (shortValue >= 1) ? ((shortValue % 1 !== 0) ? shortValue.toFixed(1) : Math.round(shortValue)) : Math.round(shortValue * 1000) / 1000;
    newValue += suffixes[suffixNum];
  }
  return newValue;
}
