import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout';
import { BowlPage } from './Pages/Bowls/bowl.jsx';
import { BuisneslunchPage } from './Pages/Buisness-lunch/lunch';
import { SaladPage } from './Pages/Salads/salad';
import { TofuPage } from './Pages/Tofu/tofu';
import { SoupPage } from './Pages/Soup/soup';
import { WokPage } from './Pages/Wok/wok';
import { FishPage } from './Pages/Fish/fish';
import { BeefPage } from './Pages/Beef/beef';
import { SnacksPage } from './Pages/Snacks/snacks';
import { ChickenPage } from './Pages/Chicken/chicken';
import { NoodlesPage } from './Pages/Noodles/noodle';
import { SusiPage } from './Pages/Susi/susi';
import { RollsPage } from './Pages/Rolls/roll';
import { BackedRollsPage } from './Pages/Baked_rolls/baked_rolls';
import { TempuraRollsPage } from './Pages/Tempura_rolls/tempura_rolls';
import { SetsPage } from './Pages/Sets/set';
import { KidsMenuPage } from './Pages/Kid_menu/kid_menu';
import { DesertPage } from './Pages/Deserts/desert';
import { DrinksPage } from './Pages/Drinks/drink'
import { SoupDetail } from './Pages/SoupDetails/SoupDetails';
import Home from './Pages/Home/home'

export const App = () => {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/buisness-lunch' element={<BuisneslunchPage />} />
          <Route path='/bowls' element={<BowlPage />} />
          <Route path='/tofu' element={<TofuPage />} />
          <Route path='/soup' element={<SoupPage />} />
          <Route path='/salads' element={<SaladPage />} />
          <Route path='/snacks' element={<SnacksPage />} />
          <Route path='/chicken' element={<ChickenPage />} />
          <Route path='/beef' element={<BeefPage />} />
          <Route path='/fish' element={FishPage} />
          <Route path='/noodles' element={< NoodlesPage />} />
          <Route path='/wok' element={<WokPage />} />
          <Route path='/susi' element={<SusiPage />} />
          <Route path='/rolls' element={<RollsPage />} />
          <Route path='/baked-rolls' element={<BackedRollsPage />} />
          <Route path='/tempura-rolls' element={<TempuraRollsPage />} />
          <Route path='/sets' element={<SetsPage />} />
          <Route path='/kids-menu' element={<KidsMenuPage />} />
          <Route path='/deserts' element={<DesertPage />} />
          <Route path='/drinks' element={<DrinksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

