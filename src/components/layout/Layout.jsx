import style from './layout.module.css'

const Layout = ({ children }) => {
  return <main className={style.container}>{children}</main>
}

export default Layout
