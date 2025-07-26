/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill,BsArrowRightCircleFill } from "react-icons/bs"
import "./styles.css"

export default function image_slider({url,limit=10})
{
    const [currentSlide, setCurrentSlide] = useState(0)
    const [images,setImages]= useState([])

    useEffect(() => {
    if (url !== '') {
      fetch(`${url}?page=1&limit=${limit}`)
        .then(res => res.json())
        .then(data => setImages(data))
    }
  }, [url, limit])
  function prevSlide() {
  setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
}
function nextSlide() {
  setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
}

    return(
        <div className="Container">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
            { 
                images&&images.length ? images.map((imageItem,index) =>(
                    <img
                    key={imageItem.id}
                    alt={imageItem.download_url}
                    src={imageItem.download_url}
                    className={currentSlide===index ? "current_image" : "current_image hideCurrentImg"} 
                    />
                ))
                :null}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
            <span className="circle-indicator">
                {images&&images.length ? 
                images.map((_,index)=>(
                    <button key={index}
                    onClick={()=>setCurrentSlide(index)}
                    className={currentSlide===index ?"current-indicator": "current-indicator inactive"}></button>
                ))
                :null}
                </span>    
        </div>
    )
}