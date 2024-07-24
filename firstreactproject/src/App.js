import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
function App() {
  const [mode, setMode] = useState('light')
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      console.log('toggle mode enabled')
      // document.body.style.backgroundColor="grey"
    }


    else {
      setMode('light')
      console.log('toggle mode disabled')
      // document.body.style.backgroundColor="white"
    }
  }
  return (
    <BrowserRouter>
      <Navbar name="abc" togglemode={togglemode} mode={mode}/>
      <Home name="abcd" togglemode={togglemode} mode={mode}/>
      <Routes>
        <Route path='/' element={<Home togglemode={togglemode} mode={mode}/>} />
        <Route path='/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
