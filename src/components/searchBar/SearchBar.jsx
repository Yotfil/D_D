import style from './searchBar.module.css'

const SearchBar = () => {
  return (
    <div className={style.container}>
      <input
        className={style.input}
        type='text'
        placeholder='Search...'
      />
    </div>
  )
}

export default SearchBar
