import React, { useState  ,useEffect} from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import Gamestate from "./GameState";
import Reset from "./Reset";

export default function TicTacToe(){

    const PLAYER_X="X";
    const PLAYER_O = "O";

    const winningCombinations = [
        //Rows
        { combo: [0, 1, 2], strikeClass: "strike-row-1" },
        { combo: [3, 4, 5], strikeClass: "strike-row-2" },
        { combo: [6, 7, 8], strikeClass: "strike-row-3" },
      
        //Columns
        { combo: [0, 3, 6], strikeClass: "strike-column-1" },
        { combo: [1, 4, 7], strikeClass: "strike-column-2" },
        { combo: [2, 5, 8], strikeClass: "strike-column-3" },
      
        //Diagonals
        { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
        { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
      ];

    const [tiles,setTiles]=useState(Array(9).fill(null));
    const [CurrentPlayer,setPlayer] = useState(PLAYER_X);
    const [strikeClass ,setStrikeClass]=useState();
    const [gameState,setGameState]=useState(Gamestate.inProgress);
    
    function checkWinner(tiles,setStrikeClass,setGameState){
            for(const {combo,strikeClass} of winningCombinations){
                
                const tileValue1 = tiles[combo[0]];
                const tileValue2 = tiles[combo[1]];
                const tileValue3 = tiles[combo[2]];

                 if(tileValue1 != null && tileValue1 ==tileValue2 && tileValue1==tileValue3){
                    setStrikeClass(strikeClass);
                    if (tileValue1 === PLAYER_X) {
                        setGameState(Gamestate.playerXwins);
                      } else {
                        setGameState(Gamestate.playerOwins);
                      }
                      return ;
                 }
                
            
        }
        
         const setAllTilesFilled = tiles.every((tile)=> tile != null) ;
         if (setAllTilesFilled ){
            setGameState(Gamestate.draw);
         }

        }
        
    
    
     
    useEffect(()=>{checkWinner(tiles,setStrikeClass,setGameState)},[tiles]);
   
    const handleTileClick=(index)=>{

        if (gameState !== Gamestate.inProgress) {
            return;
          }

        if(tiles[index]!==null){
            return;
        }
      const newTiles = [...tiles];
      newTiles[index]=CurrentPlayer;
      setTiles(newTiles);
      if (CurrentPlayer===PLAYER_X){
        setPlayer(PLAYER_O);
      }else{
        setPlayer(PLAYER_X);
      }
    }
    const handleReset = () => {
        setGameState(gameState.inProgress);
        setTiles(Array(9).fill(null));
        setPlayer(PLAYER_X);
        setStrikeClass(null);
      };
   return(
    <div>
        <h1>Tic Tac Toe </h1>
        <Board tiles={tiles} onTileClick={handleTileClick} strikeClass={strikeClass} />
        <GameOver gameState={gameState} />
        <Reset gameState={gameState} onReset={handleReset} />
    
    </div>
   )
}