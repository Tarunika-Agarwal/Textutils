import React from 'react'
import Textform from '../components/Textform'
const Home = (props) => {
  return (
    <div className={`flex ${props.mode==='light'? 'bg-white':'bg-black'} text-${props.mode==='light'?'bg-black':'bg-white'}`}>
      <Textform Togglemode={props.togglemode} mode={props.mode}/>
    </div>
  )
}

export default Home

