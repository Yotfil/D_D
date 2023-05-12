import { useState } from 'react'
import style from './card.module.css'
import { getDataService } from '../../api/getData'
import { Link } from 'react-router-dom'
import { useItems } from '../../context/DataContext'

const Card = ({ item }) => {
  const [expanded, setExpanded] = useState(false)
  const [itemCard, setItemCard] = useState(null)
  const { currentItem, setCurrentItem } = useItems()

  const getDataItem = async () => {
    setExpanded(prev => !prev)
    if (itemCard) return
    const url = item.url.replace('/api', '')
    const getItem = await getDataService(url)
    setItemCard(getItem)
    setCurrentItem(getItem)
  }
  return (
    <div className={style.card}>
      <p>{item.name}</p>
      <div
        type='button'
        className={`${style.btnMore} ${expanded ? style.expanded : ''}`}
        onClick={getDataItem}>
        <span className='title'>{expanded ? 'less' : 'more'}</span>
        {expanded && !itemCard && <p>loading...</p>}
        {expanded && itemCard && (
          <div className={style.cardBody}>
            <div className={style.cardImg}>
              <img
                className={style.img}
                src={`https://www.dnd5eapi.co${itemCard.image}`}
                alt={itemCard.name}
              />
            </div>
            <Link
              to={`/monsters/detail/${itemCard.index}`}
              className={style.btnDetails}>
              See Details
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
