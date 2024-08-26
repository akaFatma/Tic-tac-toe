 import React from "react";
 export default function Tile({className , value , onClick , CurrentPlayer}) {

    let hoverClass = null;
    
    if(value ==null && CurrentPlayer !=null){
        hoverClass=`${CurrentPlayer.toLowerCase()}-hover`;
    }
    return (  
        <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>
           {value}
        </div>
    );
}

