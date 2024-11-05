

export default function GameBoard({onSelectSquare , board}) {

    // const [gameBoard , setGameBoard] = useState(initialGameBoard)

    // function handleSelectSquare(rowIndex , colIndex) {
    //     setGameBoard((previousGameBoard) => {
            
    //         //basically we are copying the whole previous gameboard into a neww 
    //         //object 
    //         const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])]
            
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol
            
    //         //=====================================
    //         //this is not the proper way
    //         //previousGameBoard[rowIndex][colIndex] = 'X'
    //         //return previousGameBoar
    //         //=====================================

    //         return updatedBoard
    //     });


    //     onSelectSquare()

    // }




    return (

        <ol id="game-board">
            {board.map((row , rowIndex)=>{
                return (<li key = {rowIndex}>
                    <ol>
                        {row.map((playerSymbol , colIndex) =>(
                            <li key={colIndex} >
                                <button 
                                onClick={() => onSelectSquare(rowIndex , colIndex) } 
                                disabled={playerSymbol !== null} >
                                    {playerSymbol}
                                </button>
                            </li>
                        
                        ))}
                    </ol>
                </li>
                )
                
            })}
        </ol>

    )


}

