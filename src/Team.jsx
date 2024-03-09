import { useState } from "react"

export default function Team (){
    const [team, setTeam]= useState(11)
    function playerAdd (){
        const newPlayer = team + 1;
        setTeam(newPlayer)
    }
    function playerRemove (){
        const removePlayer = team - 1;
        setTeam(removePlayer)
    }

    const addCss = {
        border: '2px solid red',
        borderRadius: '15px',
        padding: '10px',
        margin: '5px'
    }
    return(
        <>
        <div style={addCss}>
            <h3>Team: {team}</h3>
            <button onClick={playerAdd}>PlayerAdd</button>
            <button onClick={playerRemove}>PlayerRemove</button>
        </div>
        </>
    )
}