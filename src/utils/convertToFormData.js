/**
 * Convierte un objeto a FormData.
 *
 * @param {object} objeto - El objeto que se convertirá a FormData.
 * @return {FormData} El FormData convertido.
*/
export default function convertirAFormData(objeto) {
  const formData = new FormData()

  for (let clave in objeto) {
    if (clave == "files") {
      for (let i = 0; i < objeto.files.length; i++)
        formData.append(`files[${i}]`, objeto.files[i])
    } else if (objeto.hasOwnProperty(clave) && objeto[clave] !== null) {
      formData.append(clave, objeto[clave])
    }
  }

  return formData
}