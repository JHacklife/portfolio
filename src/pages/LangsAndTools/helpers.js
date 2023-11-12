export const calcularPromedioMinMax = (numeros) => numeros?.length ? (numeros?.reduce((a, b) => a < b ? a : b) + numeros?.reduce((a, b) => a > b ? a : b)) / 2 : null;

export function filterDatesByRange(dates, startDate, endDate) {
  const filteredDates = dates?.filter(date => {
    const currentDate = new Date(date?.name);
    return currentDate >= startDate && currentDate <= endDate;
  });

  return filteredDates;
}