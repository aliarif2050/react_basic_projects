import Menu_list from "./menu_list";

export default function Tree_view({menus=[]}){
    return(
        <div className="tree_view">
            <Menu_list list={menus}/>
        </div>
    )
}