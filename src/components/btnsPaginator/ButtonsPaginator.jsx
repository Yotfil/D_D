import style from './buttonsPaginator.module.css'
const ButtonsPaginator = ({ pageNumber, infoComponent, handlePaginator }) => {
  return (
    <div className={style.containerBtns}>
      <button
        type='button'
        className={style.btn}
        onClick={() => {
          handlePaginator(-1)
        }}>
        prev
      </button>
      <span className={style.num}>
        {pageNumber}/{infoComponent.pages}
      </span>
      <button
        type='button'
        className={style.btn}
        onClick={() => {
          handlePaginator(+1)
        }}>
        next
      </button>
    </div>
  )
}

export default ButtonsPaginator
