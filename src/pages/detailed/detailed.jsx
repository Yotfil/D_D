import { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/layout'
import { useItems } from '../../context/DataContext'
import style from './detailed..module.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { getDataService } from '../../api/getData'

const Detail = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { currentItem, setCurrentItem } = useItems()

  useEffect(() => {
    getCurrentItem()
  }, [])

  const handleReturn = () => {
    navigate(-1)
  }

  const getCurrentItem = async () => {
    const path = location.pathname.replace('/detail', '')
    console.log(path)
    const getItem = await getDataService(path)
    setCurrentItem(getItem)
    console.log(getItem)
  }

  return (
    <Layout>
      {currentItem ? (
        <>
          <button
            onClick={handleReturn}
            className={style.btn}>
            return
          </button>
          <h2 className={style.title}>{currentItem.name}</h2>
          <div className={style.container}>
            <img
              className={style.image}
              src={`https://www.dnd5eapi.co${currentItem.image}`}
              alt={currentItem.name}
            />
            <div className={style.containerData}>
              <h3>Attacks</h3>
              {currentItem.actions.map(action => {
                return (
                  <div
                    key={action.name}
                    className={style.data}>
                    <h4 className={style.titleAttack}>{action.name}</h4>
                    <p className={style.descriptionAttack}>
                      <b>Description:</b>
                      {action.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </>
      ) : (
        <p>loading</p>
      )}
    </Layout>
  )
}

export default Detail
