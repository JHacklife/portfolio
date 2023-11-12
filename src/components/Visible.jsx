﻿/**
 * Muentra un componente si la condicion es verdadera
 * @param {boolean} condition - La condicion a evaluar.
 * @param {JSX.Element} children - El componente a mostrar si la condicion es verdadera.
 * @param {JSX.Element} alternative - El componente a mostrar en caso de que la condicion sea falsa.
 * @return {JSX.Element} El componente renderizado
 */

export default function Visible({ condition, alternative, children }) {
  if (condition !== null && condition !== undefined && condition !== "" && condition !== false) {
    return children
  } else {
    // Comprueba si la alternativa está disponible, en caso contrario devuelve null
    return alternative ?? null
  }
}
