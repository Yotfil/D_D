import { createContext, useContext, useEffect, useState } from 'react'
import { getDataService } from '../api/getData'
import { useLocation } from 'react-router-dom'

export const dataContext = createContext()

export const useItems = () => {
  const context = useContext(dataContext)
  return context
}

const DataProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('')
  const [data, setData] = useState([])
  const [currentItem, setCurrentItem] = useState(null)
  const location = useLocation()

  useEffect(() => {
    console.log(location, 'LOCATION from context')
  }, [])

  useEffect(() => {
    if (!currentPage) return
    const getData = async () => {
      const items = await getDataService(`/${currentPage}`)
      setData(items.results)
    }
    getData()
  }, [currentPage])
  return (
    <dataContext.Provider value={{ currentPage, setCurrentPage, data, currentItem, setCurrentItem }}>
      {children}
    </dataContext.Provider>
  )
}

export default DataProvider

// import { createContext, useContext, useEffect, useState } from 'react'
// import { getDataService } from '../api/getData'
// import { useFetchGet } from '../hooks/useFetchGet'

// export const dataContext = createContext()

// export const useItems = () => {
//   const context = useContext(dataContext)
//   return context
// }

// const DataProvider = ({ children }) => {
//   const { dataMia, loading, error } = useFetchGet('https://www.dnd5eapi.co/api')
//   const [dataAllItems, setDataAllItems] = useState(null)
//   const [dataItem, setDataItem] = useState(null)

//   useEffect(() => {
//     console.log(dataMia)
//   }, [loading])

//   return (
//     <dataContext.Provider value={{ dataAllItems, setDataAllItems, dataItem, setDataItem, dataMia }}>
//       {children}
//     </dataContext.Provider>
//   )
// }

// export default DataProvider
