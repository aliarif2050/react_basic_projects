import { useState } from 'react'
import './styles.css'
export default function Random_color(){
    const [typeOfColor, setTypeOfColor] =useState('HEX')
    const [color, setColor] = useState('#999999') 
    function randomGen(length)
    {
        return Math.floor(Math.random()*length)
    }
    function generateHex(){
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let hexColor = '#'
        for(let i = 0 ; i<6 ; i++)
        {
            hexColor += hex[randomGen(hex.length)]
        }
        setColor(hexColor)
    }
    function generateRGB(){
        let r = randomGen(255)
        let g = randomGen(255)
        let b = randomGen(255)
        let rgb = `rgb(${r},${g},${b})`
        setColor(rgb)

    }
    console.log(color)
    return(
        <div className='container'>
        <div style={{
            width:'100vw',
            height:"100vh",
            background: color,
            gap:'10px',
        }}>
            <div style={{justifyContent:'center',display:'flex',gap:'10px'}}>
                <button onClick={()=>setTypeOfColor('HEX')}>Generate Hex color</button>
                <button onClick = {()=>setTypeOfColor('RGB')} >Generate RGB color</button>
                <button onClick={typeOfColor==='HEX' ? generateHex : generateRGB}>Randomize color</button>
            </div>
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignContent:'center',
            color:'white',
            fontSize:'30px',
            marginTop:'100px'
        }}>
            <h3>{typeOfColor}</h3>
            <h1>{color}</h1>
            
            </div>
        </div>
        </div>

    )
}