import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useCallback, useState } from "react"

import { WINNING_COMBINATIONS } from "./winning-combinations.js";

import Log from './components/Log.jsx';
import GameOver from './components/GameOver';

function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X'
      
  if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O'
  }
  return currentPlayer
}

const INITIAL_GAME_BOARD= [
  [null , null  , null],
  [null , null  , null],
  [null , null  , null],
]

const PLAYERS = {
  X:'Player 1',
  O:'Players 2'
};


function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map(arrray => [...arrray])]

  //so our turn array contains
  //all the previous moves that have been made
  for(const turn of gameTurns){

      //object destructuring
      const {square , player} = turn;
      const {row  , col} = square;

      gameBoard[row][col] = player;
  }
  return gameBoard
}


function deriveWinner(gameBoard , players) {
  let winner 

  for (const combination of WINNING_COMBINATIONS){
  
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbo = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]
    
    if(firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbo 
      && firstSquareSymbol === thirdSquareSymbol){
        
        winner = players[firstSquareSymbol];
      }

  }
  return winner

}

function App() {

  const [players , setPlayers] = useState(PLAYERS)

  const [gameTurns , setGameTurns] =  useState([])
  //const [activePlayer , setActivePlayer] = useState('X')
    
  const activePlayer = derivedActivePlayer(gameTurns)

  const gameBoard = deriveGameBoard(gameTurns)

  const winner = deriveWinner(gameBoard , players)
  
  const hasDraw = gameTurns.length === 9 && !winner;


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

  function handleRestart(){
    setGameTurns([]);

  }

  function handlePlayerNameChange(symbol , newName){
    setPlayers(prevPlayers => {
      return{
        ...prevPlayers,
        [symbol]:newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol={"X"} isActive={activePlayer==='X'} onChangeName ={handlePlayerNameChange}></Player>
          <Player initialName={PLAYERS.O} symbol={"O"} isActive={activePlayer==='O'} onChangeName ={handlePlayerNameChange}></Player>
        </ol>
        {(winner || hasDraw) && <GameOver winner = {winner} onRestart={handleRestart}></GameOver>}
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} board = {gameBoard}></GameBoard>
      </div>

      <Log turns={gameTurns}></Log>
    </main>

  
  )


}

export default App
