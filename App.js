import React from 'react';
import Carousel from './components/Carousel';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Selects from './components/Selects';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import MiramarBeachComponent from './components/Destinations/MiramarBeachComponent'
import PalolemBeachComponent from './components/Destinations/PalolemBeachComponent';
import AnjunaComponent from './components/Destinations/AnjunaComponent';
import BasilicaChurchComponent from './components/Destinations/BasilicaChurchComponent';
import DudhsagarComponent from './components/Destinations/DudhsagarComponent';
import AgondaComponent from './components/Destinations/AgondaComponent';
import AguadaComponent from './components/Destinations/AguadaComponent';
import ChaporaFortComponent from './components/Destinations/ChaporaFortComponent';
import DonaPaulaComponent from './components/Destinations/DonaPaulaComponent';
// import HotelInGoa from './components/HotelInGoa';
import TravelGuidePage from './components/TravelGuides/TravelGuidePage';
function App() {

  return (

    <Router>
      <div className='w-screen'>
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/corousel' element={<Carousel />}/>
          <Route path='/destinations' element={<Destinations />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/selects' element={<Selects />}/>
          <Route path='/travelGuides' element={<TravelGuidePage/>}/>
          <Route path='/destinations/miramarBeach' element={<MiramarBeachComponent/>}/>
          <Route path='/destinations/palolemBeach' element={<PalolemBeachComponent/>}/>
          <Route path='/destinations/dudhSagar' element={<DudhsagarComponent/>}/>
          <Route path='/destiantions/anjunaMarket' element={<AnjunaComponent/>}/>
          <Route path='/destinations/basilicaChurch' element={<BasilicaChurchComponent/>}/>
          <Route path='/destinations/agondaFort' element={<AgondaComponent/>}/>
          <Route path='/destinations/aguadaFort' element={<AguadaComponent/>}/>
          <Route path='/destinations/donaPaula' element={<DonaPaulaComponent/>}/>
          <Route path='/destinations/chaporaFort' element={<ChaporaFortComponent/>}/>
          {/* <Route path='/hotelsGoa' element={<HotelPage/>}/> */}
        </Routes>
        {/* <HotelInGoa/> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
