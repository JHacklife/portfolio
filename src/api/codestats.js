import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import converToArray from '../utils/convertToArray';
import quickSort from '../utils/quicksort';

export const replaceLang = (array, objMap) => {
  // Itera sobre la lista
  array.forEach((lang) => {
    // Verifica si el nombre del lenguaje está en el mapeo
    if (objMap[lang.name]) {
      // Reemplaza el nombre del lenguaje
      lang.name = objMap[lang.name];
    }
  });

  // Devuelve la lista modificada
  return array;
}

export const sortLanguages = (languages) => {
  const sortedLanguages = Object.fromEntries(
    Object.entries(languages).sort((a, b) => b[1]?.value?.xps - a[1]?.value?.xps)
  )
  return sortedLanguages
}

export const getLevel = (xp) => {
  return Math.floor(0.025 * Math.sqrt(xp))
}

function compareDates(date1, date2) {
  const value1 = new Date(date1.name);
  const value2 = new Date(date2.name);

  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}

export const getData = async (filtro = "") => {
  try {
    const response = await axios.get(`https://codestats.net/api/users/${filtro}`);

    const replacedLanguages = {
      "JavaScript (JSX)": "ReactJS"
    }

    const sortedDates = quickSort(converToArray(response?.data?.dates), compareDates);
    const sortedLanguages = replaceLang(converToArray(response?.data?.languages), replacedLanguages).sort((a, b) => b.value.xps - a.value.xps);
    const machines = converToArray(response?.data?.machines);

    response.data.dates = sortedDates;
    response.data.languages = sortedLanguages;
    response.data.machines = machines;

    console.log("Obteniendo data (API)", response?.data);

    return response?.data;
  } catch (error) {
    console.error('Error al obtener la data:', error);
    throw error;
  }
}

export const useData = (filtro) => {
  const dataQuery = useQuery(
    ['data', filtro], // Agrega el parámetro "id" al array de claves de consulta
    () => getData(filtro), // Pasa el parámetro "id" a la función de obtención de datos
    {
      refetchOnWindowFocus: false,
      initialData: {}
    }
  )

  useEffect(() => {
    dataQuery.refetch()
  }, [filtro])

  return dataQuery
}
