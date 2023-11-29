import React from 'react';

import Header from './components/Header/Header.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';

import beasts from './assets/beasts.json';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Header title="Horned Beasts" />
      <Gallery list={beasts} />
      <Footer content="Copyright &copy; Ekow Yawson" />
    </>
  )

}

export default App;