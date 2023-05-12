import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Desktop from './pages/desktop/desktop'
import Favorites from './pages/favorites/favorites'
import DataProvider from './context/DataContext'
import CardsListContainer from './pages/cardsListContainer/cardsListContainer'
import AllCards from './pages/allCards/allCards'
import Detail from './pages/detailed/detailed'

function App() {
  return (
    <DataProvider>
      <Sidebar></Sidebar>
      <Routes>
        <Route
          path='/'
          element={<Desktop />}
        />
        <Route
          path='monsters'
          element={<CardsListContainer />}>
          <Route
            path='favorites'
            element={<Favorites />}
          />
          <Route
            path='list'
            element={<AllCards />}
          />
          <Route
            path='detail/:name'
            element={<Detail />}
          />
        </Route>
        <Route
          path='classes'
          element={<CardsListContainer />}>
          <Route
            path='favorites'
            element={<Favorites />}
          />
          <Route
            path='list'
            element={<AllCards />}
          />
          <Route
            path='detail/:name'
            element={<Detail />}
          />
        </Route>
      </Routes>
    </DataProvider>
  )
}

export default App
