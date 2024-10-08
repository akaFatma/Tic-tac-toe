import React from "react";
import Tile from "./Tile";
import Strike from "./Strike";



export default function Board({ tiles , onTileClick ,CurrentPlayer ,strikeClass}){
    return(
        <div className="board">
        <Tile  CurrentPlayer={CurrentPlayer} onClick ={()=>onTileClick(0)} value={tiles[0]} className= "right-border bottom-border "/>
        <Tile  CurrentPlayer={CurrentPlayer} onClick ={()=>onTileClick(1)}  value={tiles[1]} className= "right-border bottom-border"/>
        <Tile  CurrentPlayer={CurrentPlayer} onClick ={()=>onTileClick(2)} value={tiles[2]} className= " bottom-border"/>
        <Tile  CurrentPlayer={CurrentPlayer} onClick ={()=>onTileClick(3)} value={tiles[3]}  className= "right-border bottom-border"/>
        <Tile  CurrentPlayer={CurrentPlayer} onClick ={()=>onTileClick(4)} value={tiles[4]} className= "right-border bottom-border"/>
        <Tile  CurrentPlayer={CurrentPlayer} onClick ={()=>onTileClick(5)} value={tiles[5]} className= " bottom-border"/>
        <Tile  CurrentPlayer={CurrentPlayer} onClick ={()=>onTileClick(6)} value={tiles[6]} className= "right-border bottom-border"/>
        <Tile  CurrentPlayer={CurrentPlayer} onClick ={()=>onTileClick(7)} value={tiles[7]} className= "right-border bottom-border"/>
        <Tile  CurrentPlayer={CurrentPlayer} onClick ={()=>onTileClick(8)} value={tiles[8]} className= " bottom-border"/>
        <Strike  strikeClass={strikeClass} /> 
        </div>
    );
}