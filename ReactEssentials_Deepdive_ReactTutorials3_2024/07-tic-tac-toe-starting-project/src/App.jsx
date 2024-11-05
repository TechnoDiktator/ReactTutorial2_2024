import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useCallback, useState } from "react"

import Log from './components/Log.jsx';

function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X'
      
  if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O'
  }
  return currentPlayer
}


const WINNING_COMBINATIONS = []



function App() {
  const [gameTurns , setGameTurns] =  useState([])
  //const [activePlayer , setActivePlayer] = useState('X')
  const activePlayer = derivedActivePlayer(gameTurns)

  function handleSelectSquare(rowIndex , colIndex) {
    
    //setActivePlayer((curActivePlayer) => curActivePlayer === 'X'?'O':'X')
    
    
    setGameTurns(prevTurns => {

      const currentPlayer = derivedActivePlayer(prevTurns)

      //so this basically stores the course of the game
      const updatdTurns = [
        //we are storing the active player on the position 0
        {square:{row : rowIndex , col : colIndex },player :activePlayer } , 
        ...prevTurns
      ]
      
      return updatdTurns

    });
  
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={"Player 1 "} symbol={"X"} isActive={activePlayer==='X'}></Player>
          <Player initialName={"Player 2" } symbol={"O"} isActive={activePlayer==='O'}></Player>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} turns = {gameTurns}></GameBoard>
      </div>

      <Log turns={gameTurns}></Log>
    </main>

  
  )


}

export default App
