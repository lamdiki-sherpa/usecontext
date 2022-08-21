import React from 'react'
import logo from './logo.svg'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useGlobalContext } from './Context'



function Navbar() {
  const {Opensidebar,Opensubmenu,Closesubmenu}=useGlobalContext();
  const displaySubmenu=(e)=>{
    const pageI=e.target.textContent;
    const tempBtn=e.target.getBoundingClientRect()
    const center=(tempBtn.left+tempBtn.right)/2-80
    const bottom=tempBtn.bottom+2
    console.log(pageI);
    console.log(bottom);
    Opensubmenu(pageI,{center,bottom});

  }
  const handleMouse=(e)=>{
    if(!e.target.classList.contains('link-btn')){
      Closesubmenu()
    }
 
  }
  return (
    <nav className='nav' onMouseOver={handleMouse}>
    <div className='nav-header'>
    <h3>Rewolfnus</h3>
    </div>
    <ul className='nav-links'>
    <li><button className='link-btn' onMouseOver={displaySubmenu}>products</button></li>
    <li><button className='link-btn' onMouseOver={displaySubmenu}>marketing</button></li>
    <li><button className='link-btn' onMouseOver={displaySubmenu}>customers</button></li>
    </ul>
    
    <div>
    <button className='signup' style={{marginTop:'1px'}}>Signup</button>
    <button className='btn'  onClick={Opensidebar}><FontAwesomeIcon icon={faBars} className='bar'
    ></FontAwesomeIcon></button>
    </div>
    </nav>
  )
}

export default Navbar