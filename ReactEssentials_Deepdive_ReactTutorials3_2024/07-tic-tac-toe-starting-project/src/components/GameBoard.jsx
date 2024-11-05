const initialGameBoard= [
    [null , null  , null],
    [null , null  , null],
    [null , null  , null],
]

export default function GameBoard({onSelectSquare , turns}) {

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



    let gameBoard = initialGameBoard

    //so our turn array contains
    //all the previous moves that have been made
    for(const turn of turns){

        //object destructuring
        const {square , player} = turn;
        const {row  , col} = square;

        gameBoard[row][col] = player;
    }

    return (

        <ol id="game-board">
            {gameBoard.map((row , rowIndex)=>{
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

