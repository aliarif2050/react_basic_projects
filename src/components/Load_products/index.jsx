import { useEffect, useState } from "react"
import './styles.css'

export default function Load_products(){
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [ disableButton, setDisableButton] = useState(false)

    useEffect(()=>{
        fetch(`https://dummyjson.com/products?limit=20&skip=${count===0 ? 0 : count*20}`)
        .then(res=>res.json()).then(data=>{ console.log(data); setProducts((prev)=> [...prev,...data.products])})
         
    },[count])

    function handleClick(){
        setCount(prev=> prev+1)
    }
    useEffect(()=>{
        if(products && products.length >= 100) setDisableButton(true) 
    },[products])
    
    return(
        <div className="container">
            <div className="product_container">{
                products && products.length ? 
                products.map(item => <div className="product" key={item.id}>
                    <img src={item.thumbnail}
                    alt={item.title}/>
                    <p>{item.title}</p>
                    <p>$ {item.price}</p>

                </div>)
                :null
                }
             </div>
             <div className="button_container">
                <button disabled={disableButton} onClick={handleClick}>Load More Products!</button>
             </div>
             {disableButton===true? 
             <p> Can't load more max limit 100 </p> : null
             }
             
        </div>
        // commented outt
    )
}