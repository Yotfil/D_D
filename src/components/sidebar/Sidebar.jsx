import { Link } from 'react-router-dom'
import style from './sidebar.module.css'

const Sidebar = () => {
  const dynamicRoute = route => {
    return `${route}/favorites`
  }

  const routes = [
    {
      label: 'Desktop',
      path: '/',
    },
    {
      label: 'Monsters',
      children: [
        {
          label: 'All Monsters',
          path: 'monsters/list',
        },
        {
          label: 'Favorite Monsters',
          path: 'monsters/favorites',
        },
      ],
    },
    {
      label: 'Classes',
      children: [
        {
          label: 'All Classes',
          path: 'classes/list',
        },
        {
          label: 'Favorite Classes',
          path: 'classes/favorites',
        },
      ],
    },
  ]

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <ul className={style.container}>
          {routes.map(route =>
            route.children ? (
              <li
                key={route.label}
                className={style.item}>
                <Link className={style.link}>{route.label}</Link>
                <ul className={style.nestedContainer}>
                  {route.children.map(child => (
                    <li
                      key={child.label}
                      className={style.nestedItem}>
                      <Link
                        className={style.nestedLink}
                        to={child.path}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li
                key={route.label}
                className={style.item}>
                <Link
                  className={style.link}
                  to={route.path}>
                  {route.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Sidebar
{
  /* <li>
            <Link to={'/'}>Desktop</Link>
          </li>
          <li>
            <Link>Monsters</Link>
            <ul>
              <li>
                <Link to={'monsters/list'}>List</Link>
              </li>
              <li>
                <Link to={dynamicRoute('monsters')}>Favorites</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>Classes</Link>
            <ul>
              <li>
                <Link to={'classes/list'}>List</Link>
              </li>
              <li>
                <Link to={dynamicRoute('classes')}>Favorites</Link>
              </li>
            </ul>
          </li> */
}
