import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/index.jsx';
import Вynamicpage from './page/Вynamicpage/Вynamicpage.jsx'
import Drinkspage from './page/Drinkspage/Drinkspage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index path='/:route' element={<Вynamicpage />} />
          <Route path='/drinks' element={<Drinkspage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;