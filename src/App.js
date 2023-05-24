import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout';
import { BowlPage } from './Pages/Bowls/bowl.jsx';
import { BuisneslunchPage } from './Pages/Buisness-lunch/lunch';
import { SaladPage } from './Pages/Salads/salad';
import { TofuPage } from './Pages/Tofu/tofu';
import { SoupPage } from './Pages/Soup/soup';
import Home from './Pages/Home/home'

export const App = () => {
  return (
    <BrowserRouter>
    <Home />
      <Routes>
        <Route path='/Bowl' element={<BowlPage/>}/>
        <Route path='/Buisness-lunch' element={<BuisneslunchPage />} />
        <Route path='/Salads' element={<SaladPage />} />
        <Route path='/Soup' element={<SoupPage />} />
        <Route path='/Soup/:id' element={<SoupDetail />} />
        <Route path='/Tofu' element={<TofuPage />} />
        <Route />
        <Route />
        <Route />
        <Route />Ё
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

