export const calcularPromedioMinMax = (numeros) => numeros?.length ? (numeros?.reduce((a, b) => a < b ? a : b) + numeros?.reduce((a, b) => a > b ? a : b)) / 2 : null;

export const calcularMedia = (numeros) => {
  const suma = numeros?.reduce((total, numero) => total + numero, 0) // Suma todos los números del array
  const media = suma / numeros?.length // Divide la suma por la cantidad de elementos en el array
  return media
}

export function filterDatesByRange(dates, startDate, endDate) {
  const filteredDates = dates?.filter(date => {
    const currentDate = new Date(date?.name);
    return currentDate >= startDate && currentDate <= endDate;
  });

  return filteredDates;
}