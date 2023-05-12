import style from './button.module.css'

const Button = ({ text, onclick }) => {
  return (
    <button
      type='button'
      className={style.btn}
      onClick={onclick}>
      {text}
    </button>
  )
}

export default Button
