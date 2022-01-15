import React, { useState, useEffect} from 'react';
import SequareComponents from './SequareComponents'

const initialState = ["", "", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, updateGameState] = useState(initialState);
  const [isXChance, updateIsXChance] = useState(false);

  const onSequareClicked= (index) => {
  let strings = Array.from(gameState);
  strings[index]=isXChance ? "X" : "0" ;
  updateGameState(strings);
  updateIsXChance(!isXChance);
  }

  useEffect(()=>{
    const winner = checkWinner();
    if(winner){
      alert(`Ta da ! ${winner} has won the Game!`)
      updateGameState(initialState)
    }

  
  }, [gameState])

  const checkWinner = () => {
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return gameState[a];
    }
  }
  return null;
}

return (
      <div className="app-header">
      <p classname="heading-text">React tic tac toe</p>
      <div className=" row jc-center">
        <SequareComponents className="b-bottom-right" state={gameState[0]} onClick={()=>onSequareClicked(0)}/>
        <SequareComponents className="b-bottom-right" state={gameState[1]} onClick={()=>onSequareClicked(1)}/>
        <SequareComponents className="b-bottom" state={gameState[2]} onClick={()=>onSequareClicked(2)}/>

      </div>
      <div className=" row jc-center">
      <SequareComponents className="b-bottom-right" state={gameState[3]} onClick={()=>onSequareClicked(3)}/>
      <SequareComponents className="b-bottom-right" state={gameState[4]} onClick={()=>onSequareClicked(4)}/>
      <SequareComponents className="b-bottom" state={gameState[5]} onClick={()=>onSequareClicked(5)}/>

      </div>
      <div className=" row jc-center">
      <SequareComponents className="b-right" state={gameState[6]} onClick={()=>onSequareClicked(6)}/>
      <SequareComponents className="b-right" state={gameState[7]} onClick={()=>onSequareClicked(7)}/>
      <SequareComponents state={gameState[8]} onClick={()=>onSequareClicked(8)}/>
      </div>
      <button className="clear-button" onClick={()=> updateGameState(initialState)}>Clear Game</button>
      <p>lovepreet singh</p>
       
    </div>
  );
}

export default App;
