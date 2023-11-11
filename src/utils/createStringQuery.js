export const createQuery = ({ data = {}, included = ''}) => {
  const filterString = Object?.keys(data)
    .filter(key => data[key] !== '')
    .map(key => `&filter[${key}]=${data[key]}`)
    .join('')
  return `${included}${filterString}`
}