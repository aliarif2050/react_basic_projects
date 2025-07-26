import sampleData from "./data";
import { useState } from "react";
import './styles.css';
export default function Accordian(){
    const [selected, setSelected] = useState(null)
    const [enableMulti, setenableMutli] = useState(false)
    const [Multiple, setMutli] = useState([])
    function handleClick(currentid){
        setSelected(currentid === selected ? null : currentid)
    }
    function handleMultiClick(currentid){
        let copyMutli = [...Multiple]
        const indexOfcurrent = copyMutli.indexOf(currentid)
        
        if(indexOfcurrent === -1) copyMutli.push(currentid)
            else copyMutli.splice(indexOfcurrent, 1)
        setMutli(copyMutli)

    }
    console.log(selected, Multiple)

    return(<div className="Container " >
        <button className={enableMulti===true ? "button" : "button s_button "} onClick={()=>setenableMutli(!enableMulti)}>Select Multiple</button>
        <div className="Accordian" >
            {sampleData && sampleData.length>0 ? 
            sampleData.map(data => <div className="item" >
                <div className="title" onClick={enableMulti ? ()=>handleMultiClick(data.id) :()=>handleClick(data.id)}>
                <h3>{data.question}</h3>
                <span>{selected === data.id ? '-' : "+"}</span>
                </div>
                {enableMulti ? Multiple.indexOf(data.id) !== -1 && data.answer :
                selected === data.id ? data.answer : null}
                
            </div>)
            : <div>NO DATA</div> }
        </div>
    </div>)
}