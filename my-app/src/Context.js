import React, { useContext,useState } from "react";
import Sublinks from './Data'
const AppContext= React.createContext()
export const AppProvider=({children})=>{
    const [isSidebarOpen,setIsSidebarOpen]=useState(false)
    const [isSubmenuOpen,setIsSubmenuOpen]=useState(false)
    const[location,setLocation]=useState({})
    const[page,setPage]=useState({page:'',links:[]})
    const Opensidebar=()=>{
setIsSidebarOpen(true)
    }
    const Closesidebar=()=>{
setIsSidebarOpen(false)
    }
    const Opensubmenu=(text,coordinates)=>{
    const pageN = Sublinks.find((link)=>link.page===text)
    setPage(pageN)
    setLocation(coordinates)
    setIsSubmenuOpen(true)
    }
    const Closesubmenu=()=>{
setIsSubmenuOpen(false)
    }
    
    
    return <AppContext.Provider
    value={{isSidebarOpen,isSubmenuOpen,Opensubmenu,Opensidebar,Closesidebar,Closesubmenu,location,page}}>{children}</AppContext.Provider>

}
export const useGlobalContext=()=>{
    return useContext(AppContext);
}