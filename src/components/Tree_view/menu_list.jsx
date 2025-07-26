import Menu_item from "./menu_item";
import './styles.css'

export default function Menu_list({list =[]}){
    return(
        <ul className="menu_listcontainer">
            {list && list.length ? 
            list.map(listItem => <Menu_item item={listItem}/>)
            :null}
        </ul>
    )
}