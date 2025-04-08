import React from 'react'
import HeaderInfo from './components/header/HeaderInfo';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Ticker from './components/partials/Ticker';
import Services from './components/services/Services';
import Benefits from './components/benefits/Benefits';
import Stories from './components/stories/Stories';

const App = () => {

  const englishTicker = ['General Dentisry', 'General Cleaning', 'Dental Implant', 'Dental Care', 'Dental Whitening', 'Dental Implant', 'Dental Sealant'];
  const tagalogTicker = ['General Linis', 'Tanim Ngipin', 'Ngipin Paputi', 'Bunot Ngipin', 'Pasta', 'Mumug Bibig']


  return (
    <>
      <HeaderInfo /> <Header/> <Banner/> <About/> <Ticker phase={englishTicker}/>
      <Services/> <Ticker phase={englishTicker}/>
      <Benefits/>

    </>
  );
}

export default App