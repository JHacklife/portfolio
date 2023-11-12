/**
 * Ordena un arreglo utilizando el algoritmo de Quicksort.
 * 
 * @param {Array} arr - El arreglo que se va a ordenar.
 * @param {Function} compareFn - Una función para comparar los elementos. Debe devolver un valor negativo si el primer elemento es menor, un valor positivo si el primer elemento es mayor, y 0 si son iguales.
 * @returns {Array} - El arreglo ordenado.
 */

// Ejemplo de uso
/* const dates = [
  { name: "2021-03-05", value: "1140" },
  { name: "2021-01-13", value: "263" },
  { name: "2023-10-19", value: "2164" },
  { name: "2021-07-16", value: "2583" },
  { name: "2023-02-10", value: "7" },
]; */
export default function quickSort(arr, compareFn) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  const less = [];
  const equal = [];
  const greater = [];

  for (const element of arr) {
    const comparison = compareFn(element, pivot);

    if (comparison < 0) {
      less.push(element);
    } else if (comparison > 0) {
      greater.push(element);
    } else {
      equal.push(element);
    }
  }

  return [
    ...quickSort(less, compareFn),
    ...equal,
    ...quickSort(greater, compareFn),
  ];
}