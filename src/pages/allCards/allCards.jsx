import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useItems } from '../../context/DataContext'

import Layout from '../../components/layout/layout'
import style from './allCards.module.css'
import Card from '../../components/card/Card'
import ButtonsPaginator from '../../components/btnsPaginator/ButtonsPaginator'

const AllCards = () => {
  const { currentPage, setCurrentPage, data } = useItems()
  const location = useLocation()
  const [pageNumber, setPageNumber] = useState(1)
  const [infoComponent, setInfoComponent] = useState({
    showButtons: false,
    pagedData: [],
    pages: 0,
  })
  const [paginator, setPaginator] = useState({
    fromItem: 0,
    untilItem: 12,
  })

  const handleCurrentPage = () => {
    const page = location.pathname.split('/')[1]
    setCurrentPage(page)
  }

  const handleComponentData = () => {
    if (data.length > 12) {
      const pagedData = [...data].slice(paginator.fromItem, paginator.untilItem)
      const pages = Math.ceil(data.length / 12)
      setInfoComponent({ pagedData, showButtons: true, pages })
      return
    }
    setInfoComponent({ pagedData: data, showButtons: false, pages: 0 })
  }

  useEffect(() => {
    handleComponentData()
  }, [data])

  useEffect(() => {
    handleCurrentPage()
  }, [location.pathname])

  const handlePaginator = value => {
    const { fromItem, untilItem } = paginator
    if (value === +1) {
      setPageNumber(prev => prev + value)
      setPaginator({ fromItem: fromItem + 12, untilItem: untilItem + 12 })
      const pagedData = [...data].slice(fromItem + 12, untilItem + 12)
      setInfoComponent({ ...infoComponent, pagedData })
      return
    }
    if (paginator.fromItem !== 0) {
      setPageNumber(prev => prev + value)
      setPaginator({ fromItem: fromItem - 12, untilItem: untilItem - 12 })
      const pagedData = [...data].slice(fromItem - 12, untilItem - 12)
      setInfoComponent({ ...infoComponent, pagedData })
      return
    }
  }

  return (
    <Layout>
      <h1>Hello world from All cards {currentPage}</h1>
      <div className={style.container}>
        {infoComponent.pagedData.map(item => (
          <Card
            key={item.index}
            item={item}
          />
        ))}
      </div>

      {infoComponent.showButtons && (
        <ButtonsPaginator
          pageNumber={pageNumber}
          infoComponent={infoComponent}
          handlePaginator={handlePaginator}
        />
        // <div className={style.containerBtns}>
        //   <button
        //     type='button'
        //     className={style.btn}
        //     onClick={() => {
        //       handlePaginator(-1)
        //     }}>
        //     prev
        //   </button>
        //   <span className={style.num}>
        //     {pageNumber}/{infoComponent.pages}
        //   </span>
        //   <button
        //     type='button'
        //     className={style.btn}
        //     onClick={() => {
        //       handlePaginator(+1)
        //     }}>
        //     next
        //   </button>
        // </div>
      )}
    </Layout>
  )
}

export default AllCards

// import { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import { useItems } from '../../context/DataContext'

// import Layout from '../../components/layout/layout'
// import style from './allCards.module.css'
// import Card from '../../components/card/Card'
// import { useFetchGet } from '../../hooks/useFetchGet'

// const AllCards = () => {
//   const { currentPage, setCurrentPage, dataMia } = useItems()
//   const location = useLocation()
//   const [pageNumber, setPageNumber] = useState(1)
//   const [infoComponent, setInfoComponent] = useState({
//     showButtons: false,
//     pagedData: [],
//     pages: 0,
//   })
//   const [paginator, setPaginator] = useState({
//     fromItem: 0,
//     untilItem: 12,
//   })
//   const { data, loading, error } = useFetchGet(`https://www.dnd5eapi.co/api`)

//   const handleCurrentPage = () => {
//     const page = location.pathname.split('/')[1]
//     setCurrentPage(page)
//   }

//   const handleComponentData = () => {
//     if (!data) return

//     const results = data.results
//     if (results.length > 12) {
//       const pagedData = [...results].slice(paginator.fromItem, paginator.untilItem)
//       const pages = Math.ceil(results.length / 12)
//       setInfoComponent({ pagedData, showButtons: true, pages })
//       return
//     }
//     setInfoComponent({ pagedData: results, showButtons: false, pages: 0 })
//   }

//   // useEffect(() => {
//   //   handleComponentData()
//   // }, [data])

//   // useEffect(() => {
//   //   handleCurrentPage()
//   // }, [location.pathname])

//   useEffect(() => {
//     handleComponentData()
//   }, [loading])

//   const handlePaginator = value => {
//     const { fromItem, untilItem } = paginator
//     if (value === +1) {
//       setPageNumber(prev => prev + value)
//       setPaginator({ fromItem: fromItem + 12, untilItem: untilItem + 12 })
//       const pagedData = [...data.results].slice(fromItem + 12, untilItem + 12)
//       setInfoComponent({ ...infoComponent, pagedData })
//       return
//     }
//     if (paginator.fromItem !== 0) {
//       setPageNumber(prev => prev + value)
//       setPaginator({ fromItem: fromItem - 12, untilItem: untilItem - 12 })
//       const pagedData = [...data.results].slice(fromItem - 12, untilItem - 12)
//       setInfoComponent({ ...infoComponent, pagedData })
//       return
//     }
//   }

//   return (
//     <Layout>
//       <h1>Hello world from All cards {currentPage}</h1>
//       <div className={style.container}>
//         {infoComponent.pagedData.map(item => (
//           <Card
//             key={item.index}
//             item={item}
//           />
//         ))}
//       </div>

//       {infoComponent.showButtons && (
//         <div>
//           <span
//             onClick={() => {
//               handlePaginator(-1)
//             }}>
//             prev
//           </span>
//           <span>
//             {pageNumber}/{infoComponent.pages}
//           </span>
//           <span
//             onClick={() => {
//               handlePaginator(+1)
//             }}>
//             next
//           </span>
//         </div>
//       )}
//     </Layout>
//   )
// }

// export default AllCards
