import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import pizzaBackground from './assets/images/pizza.jpg'

import './App.css'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'



function App() {
    return (
      <div className="page">
        <Header title="We love Pizza" version={0+2}/>
        <Main />
        <Footer />
      </div>
  );
}
export default App
