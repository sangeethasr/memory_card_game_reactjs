import React, {useState} from 'react';
import Design from "../styles/MemoryGame.module.css";

export default function Card({value, id, onclickFunction, matchedCards}) {
    const [clicked, setClicked] = useState(false);
   
    const onHandleClick = () =>{
        setClicked(true)
        onclickFunction(id)
        
        setTimeout(() => {
          setClicked(false)
        }, 2000);
    }
  return (
    <div className={Design.CardItem} onClick={onHandleClick}>
        {clicked ? <div>{value}</div> : <div>X</div>}
    </div>
  )
}
