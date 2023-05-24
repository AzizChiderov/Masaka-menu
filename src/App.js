import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BowlPage } from './Pages/Bowls/bowl.jsx';
import { BuisneslunchPage } from './Pages/Buisness-lunch/lunch';
import { SaladPage } from './Pages/Salads/salad';
import { TofuPage } from './Pages/Tofu/tofu';
import { SoupPage } from './Pages/Soup/soup';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Bowl' element={<BowlPage/>}/>
        <Route path='/Buisness-lunch' element={<BuisneslunchPage />} />
        <Route path='/Salads' element={<SaladPage />} />
        <Route path='/Soup' element={<SoupPage />} />
        <Route path='/Tofu' element={<TofuPage />} />
        <Route />
        <Route />
        <Route />
        <Route />
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

