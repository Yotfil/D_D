export const getDataService = async endpoint => {
  try {
    const api = 'https://www.dnd5eapi.co/api'
    const res = await fetch(`${api}${endpoint}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
