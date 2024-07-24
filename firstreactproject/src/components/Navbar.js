import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const [openMenu, setOpenMenu] = useState(false)
  const handleMenu = () => {
    setOpenMenu(!openMenu)
    console.log(openMenu)
  }



  return (
    <>
      <div className={`flex ${props.mode==='light'? 'bg-white':'bg-black'} text-${props.mode==='light'?'bg-black':'bg-white'} justify-between text-3xl p-2 lg:justify-between gap-4 pt-2`}>

        <div id="logo">
          {/* <h1>{props.name}</h1>   */}
          {/* to access props here we can write this ->taken from app.js */}
          <h1>Text Counter</h1>
        </div>
        <ul className='hidden lg:flex gap-4 text-2xl mt-[2px]'>
          <li><Link to="/">home</Link></li>
          <li><Link to="/About">about</Link></li>
        </ul>

        <div className='form-check form-switch hidden lg:flex gap-0'>
        <input className="form-check-input" type="checkbox" id="flexswitchcheckdefault" onClick={props.togglemode}/>
         <label className='form-check-label text-xl'  htmlFor= "flexswitchcheckdefault">Enable dark mode</label>
        </div>
        

        <div id="menu" className='lg:hidden' onClick={handleMenu}>
          {/* lg hidden matlab icon ko large screen pr hide kardein */}
          <h1 className='mt-1'><CiMenuBurger /></h1>

        </div>

      </div>
{openMenu && <div className='bg-black text-2xl text-white text-center m=[0 auto]' id='smallmenu'>
  {/* openMenu && ->means that ye true hoga toh dikhega warna nahi basically this is conditional statement */}
        <ul type="none">
          <li className='pt-3'><Link to="/">Home</Link></li>
          <li className='pt-3'><Link to="/About">About</Link></li>
          <li className='pt-3'>        
            <div className='form-check form-switch hidden lg:flex gap-0'>
        <input className="form-check-input" type="checkbox" id="flexswitchcheckdefault" onClick={props.togglemode}/>
         <label className='form-check-label text-xl'  htmlFor= "flexswitchcheckdefault">Enable dark mode</label>
        </div></li>
          
        
        </ul>
      </div>
      }

    </>
  )
}

export default Navbar;
