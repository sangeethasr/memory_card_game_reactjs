import React from 'react';
import Card from "./Card"
import Design from "../styles/MemoryGame.module.css";

export default function MemoryGame() {

  const cardData = [
    { id: 1, value: '🐶' },
    { id: 2, value: '🐱' },
    { id: 3, value: '🐭' },
    { id: 4, value: '🐹' },
    { id: 5, value: '🐰' },
    { id: 6, value: '🦊' },
    { id: 7, value: '🐻' },
    { id: 8, value: '🐼' }
  ];

  return (
    <div className={Design.MemoryGameContainer}>
    <div className={Design.MemoryGame}>
      <div className={Design.cardContainer}>
      {
        cardData.map((item)=>(
          <div key={item.id} className={Design.card}>
            <Card value={item.value} />
            </div>
        ))
      }
      </div>
      <div className={Design.cardContainer}>
      {
        cardData.map((item)=>(
          <div key={item.id} className={Design.card} >
             <Card value={item.value} />
            </div>
        ))
      }
      </div>
    </div>
    </div>
  )
}
