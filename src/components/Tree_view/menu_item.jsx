import { useState } from "react";
import Menu_list from "./menu_list";

export default function Menu_item({item}){
    const [currentChildren, setCurrentChildren] = useState({})
    function handleToggle(id){
        setCurrentChildren({...currentChildren,[id] : !currentChildren[id]})

    }
    return(
      <li >
        <div className="menu_itemcontainer">
        <p>{item.name} </p> 
        {item && item.children && item.children.length ?<span onClick={()=>handleToggle(item.id)}>{currentChildren[item.id] ? '-' : '+'}</span> : null}
        </div>
        
        {
        item && item.children && item.children.length >0 && currentChildren[item.id]
        ? 
        <Menu_list list={item.children}/>
        :null
        }</li>
       
    )
}