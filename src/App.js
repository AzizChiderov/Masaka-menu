import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout';
import { BowlPage } from './Pages/Bowls/bowl.jsx';
import { BuisneslunchPage } from './Pages/Buisness-lunch/lunch';
import { SaladPage } from './Pages/Salads/salad';
import { TofuPage } from './Pages/Tofu/tofu';
import { PizzaPage } from './Pages/Pizza/pizza';
import { SoupPage } from './Pages/Soup/soup';
import { WokPage } from './Pages/Wok/wok';
import { FishPage } from './Pages/Fish/fish';
import { BeefPage } from './Pages/Beef/beef';
import { SnacksPage } from './Pages/Snacks/snacks';
import { ChickenPage } from './Pages/Chicken/chicken';
import { NoodlesPage } from './Pages/Noodles/noodle';
import { GunkanPage } from './Pages/Gunkan/gunkan';
import { RollsPage } from './Pages/Rolls/roll';
import { BackedRollsPage } from './Pages/Baked_rolls/baked_rolls';
import { TempuraRollsPage } from './Pages/Tempura_rolls/tempura_rolls';
// import { SetsPage } from './Pages/Sets/set';
import { KidsMenuPage } from './Pages/Kid_menu/kid_menu';
import { DesertPage } from './Pages/Deserts/desert';
import { DrinksPage } from './Pages/Drinks/drink'
import { RamenPage } from './Pages/Ramen/ramen';


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<BuisneslunchPage />} />
          <Route path='/buisness-lunch' element={<BuisneslunchPage />} />
          <Route path='/bowls' element={<BowlPage />} />
          <Route path='/tofu' element={<TofuPage />} />
          <Route path='/pizza' element={<PizzaPage />} />
          <Route path='/ramen' element={<RamenPage />} />
          <Route path='/soup' element={<SoupPage />} />
          <Route path='/salads' element={<SaladPage />} />
          <Route path='/snacks' element={<SnacksPage />} />
          <Route path='/chicken' element={<ChickenPage />} />
          <Route path='/beef' element={<BeefPage />} />
          <Route path='/fish' element={ <FishPage/> }/>
          <Route path='/noodles' element={< NoodlesPage />}/>
          <Route path='/wok' element={<WokPage />} />
          <Route path='/gunkan' element={<GunkanPage />} />
          <Route path='/rolls' element={<RollsPage />} />
          <Route path='/baked-rolls' element={<BackedRollsPage />} />
          <Route path='/tempura-rolls' element={<TempuraRollsPage />} />
          {/* <Route path='/sets' element={<SetsPage />} /> */}
          <Route path='/kids-menu' element={<KidsMenuPage />} />
          <Route path='/deserts' element={<DesertPage />} />
          <Route path='/drinks' element={<DrinksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

