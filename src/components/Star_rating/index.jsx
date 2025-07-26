import { useState } from "react"
import { FaStar } from "react-icons/fa"
import './index.css'
export default function Star_rating({noOfStars=5})
{
    const[rating,setRating] = useState(0)
    const[hover,setHover]=useState(0)
    function handleRating(index){
     if (index==rating)
        setRating(0)
    else setRating(index)
    }
    function handleMouse(index)
    {
      
        setHover(index);
    
    }
    return(
        <div className="star-rating">
            {[...Array(noOfStars)].map((_,index)=>
            
            {index+=1
                return <FaStar
            key={index}
            className={index <= (hover||rating)  ? 'active' : 'inactive'}
            onClick={()=>handleRating(index)}
            onMouseEnter={()=>handleMouse(index)}
            onMouseLeave={()=>handleMouse(0)}
            size={40}
            />}
            )
            }
        </div>
    )
}
