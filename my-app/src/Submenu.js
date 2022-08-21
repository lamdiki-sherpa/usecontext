import React,{useRef} from 'react'
import { useGlobalContext } from './Context'
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { useState } from 'react'
const Submenu = () => {
  const {isSubmenuOpen,location,page:{page,links}}=useGlobalContext();
  
 const container=useRef(null)
 const[columns,setColumns]=useState('col-2')
  useEffect(()=>{
    setColumns('col-2')
   const submenu= container.current;
   const {center,bottom}=location;
   submenu.style.left=`${center}px`
   submenu.style.top=`${bottom}px`
   if(links.length===3){
    setColumns('col-3')
   }
   if(links.length===4){
    setColumns('col-4')
   }
  },[location,links])
  return (
    <aside className={`${isSubmenuOpen?'submenu':'submenu-hide'}`} ref=
    {container}>
      <h5 style={{fontFamily:'sans-serif'}}>{page}</h5>
      <div className={`submenu-center ${columns}` } style={{display:'flex'}}>
      {links.map((link,index)=>{
           return<div>
            
             <div key={index}  style={{display:'flex'}}>
             <div className='linkr'><FontAwesomeIcon icon={faCircle}/></div> 
             <h5 style={{marginRight:'10px',fontSize:'18px',fontFamily:'sans-serif'}}> {link.label}</h5>
            
             </div>
           </div>
           
          })}
      </div>
      
    </aside>
  )
}

export default Submenu