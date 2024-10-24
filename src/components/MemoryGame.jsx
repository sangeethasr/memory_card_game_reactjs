import React, {useState} from 'react';
import Card from "./Card";
import Design from "../styles/MemoryGame.module.css";

const cardData = [
  { id: 1, value: "🐶" },
  { id: 2, value: "🐱" },
  { id: 3, value: "🐭" },
  { id: 4, value: "🐹" },
  { id: 5, value: "🐰" },
  { id: 6, value: "🦊" },
  { id: 7, value: "🐻" },
  { id: 8, value: "🐼" },
];

export default function MemoryGame() {

  const [clickedCard, setclickedCard] = useState();
  const [moves, setMoves] = useState(0);
  const [matchedCards, setMatchedCards] = useState([]);
  const [scores, setScores] = useState(0);
  

  const onCompareClickedItems = (id) =>{

    
    if(clickedCard){
      setMoves((preValue)=> preValue + 1)
      if(clickedCard === id){
        console.log("Matched", clickedCard, id)
        setMatchedCards([...matchedCards, id])
        setScores((preValue)=> preValue + 1)
      }
      setclickedCard();
    }else{
      setclickedCard(id)
    }
  }

  return (
    <div className={Design.MemoryGameContainer}>
      <div className={Design.MemoryGame}>
        <div className={Design.cardContainer}>
          {cardData.map((item) => (
            <div key={item.id} className={Design.card}>
              <Card value={item.value} id={item.id} onclickFunction ={(value)=>onCompareClickedItems(value)} matchedCards={matchedCards} />
            </div>
          ))}
        </div>
        <div className={Design.cardContainer}>
          {cardData.map((item) => (
            <div key={item.id} className={Design.card}>
              <Card value={item.value} id={item.id} onclickFunction ={(value)=>onCompareClickedItems(value)} matchedCards={matchedCards} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <p>Moves : {moves} </p>
        <p>Scores : {scores} </p>
      </div>
    </div>
  );
}
