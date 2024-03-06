import { useState } from "react"

export default function Team(){

    const [ team, setTeam] = useState(11);

    const addTeam = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const reduceTeam = () => {
        const newTeam = team - 1 ;
        setTeam(newTeam);
    }

    return(
       <div style={{border: '1px solid gray'}}>
         <h3>Team: {team} </h3>
         <button onClick={addTeam}>Add</button>
         <button onClick={reduceTeam}>Add</button>
       </div>
    )
}