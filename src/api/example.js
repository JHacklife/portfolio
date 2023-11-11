/* import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export const url = "https://cors-anywhere.herokuapp.com/http://escuderokevin.com.ar:7070/api/"

export const getDolarStatus = async (dolar) => {
  try {
    const response = await axios.get(`${url}${dolar}`)
    const respuesta = response.data
    // Retornar los datos de la respuesta
    if (import.meta.env.VITE_LOGGING_ENABLED) console.log("Resultados de la cotización", respuesta)
    return respuesta
  } catch (error) {
    // En caso de error, manejarlo adecuadamente
    console.error('Error al obtener la cotización:', error)
    throw error
  }
}

export const useDolarStatus = (filtro) => {
  const dolarStatusQuery = useQuery(
    ['dolarStatus', filtro],
    () => getDolarStatus(filtro),
    {
      refetchOnWindowFocus: false,
      //staleTime: 1000 * 60 * 60,
    }
  )
  return dolarStatusQuery
}
 */