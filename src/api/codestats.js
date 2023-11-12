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
    const response = await axios.get(`https://codestats.net/api/users/${filtro}`)
    // Retornar los datos de la respuesta
    console.log("Obteniendo data (API)", response?.data)
    response.data.dates = quickSort(converToArray(response?.data?.dates), compareDates)
    response.data.languages = replaceLang(converToArray(response?.data?.languages), {
      "JavaScript (JSX)": "ReactJS"
    })?.sort((a, b) => b.value.xps - a.value.xps)
    response.data.machines = converToArray(response?.data?.machines)
    return response?.data
  } catch (error) {
    // En caso de error, manejarlo adecuadamente
    console.error('Error al obtener la data:', error)
    throw error
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
