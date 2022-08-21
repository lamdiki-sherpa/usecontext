import React from 'react'
import { useGlobalContext } from './Context'
import Sublinks from './Data';
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'


function Sidebar() {
  const {isSidebarOpen,Closesidebar}=useGlobalContext();
  
  return (
    <div className={`${isSidebarOpen?'sidebar':'hide'}`}>
    <FontAwesomeIcon icon={faXmark} 
    style={{height:'20px'}} onClick={Closesidebar} className='icon'></FontAwesomeIcon>
     {Sublinks.map((information,index)=>{
       const {page,links}=information;
    return<section key={index} className='sidebar-center'>
          <h3>{page}</h3>
          {links.map((link)=>{
           return<div style={{display:'flex'}}>
            <div className='linkr'><FontAwesomeIcon icon={faCircle}/></div> 
             <h5 style={{marginRight:'10px',fontSize:'18px',fontFamily:'sans-serif'}}> {link.label}</h5>
           </div>
           
          })}

          </section>
     })}

    </div>
  )
}

export default Sidebar