import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useCallback, useState } from "react"

import { WINNING_COMBINATIONS } from "./winning-combinations.js";

import Log from './components/Log.jsx';

function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X'
      
  if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O'
  }
  return currentPlayer
}

const initialGameBoard= [
  [null , null  , null],
  [null , null  , null],
  [null , null  , null],
]



function App() {
  const [gameTurns , setGameTurns] =  useState([])
  //const [activePlayer , setActivePlayer] = useState('X')
    
  const activePlayer = derivedActivePlayer(gameTurns)



  let gameBoard = initialGameBoard

  //so our turn array contains
  //all the previous moves that have been made
  for(const turn of gameTurns){

      //object destructuring
      const {square , player} = turn;
      const {row  , col} = square;

      gameBoard[row][col] = player;
  }






  for (const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol
    const secondSquareSymbo;
  }


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

        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} board = {gameBoard}></GameBoard>
      </div>

      <Log turns={gameTurns}></Log>
    </main>

  
  )


}

export default App
