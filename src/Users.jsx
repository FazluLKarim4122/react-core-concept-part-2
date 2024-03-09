import { useEffect, useState } from "react"
import User from "./User";

export default function Users(){

    const [users, setUsers]= useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return(
        <>
        <div style={{border: '2px solid tomato',
    margin: '10px',
    padding:'10px',
    borderRadius: '20px'}}>
        <h3>Users: {users.length}</h3>
        {
         users.map(user =><User user={user}></User>)  
        }
        </div>
        </>
    )
}

// step-1:Declare a State to hold the data. onek dhoroner sideeffect ase 1ta sideeffect hote pare- api/external resource theke data load korbo. korte gele data paite pari nao paite pari. pai kingba na pai shekhetre etaka 1ta state e rakhte hobe
// userState() e default man mane hosse kono user ke paoa jay,mane empty 1ta kisu array o dite pari. normally number hole default man 0/1 hote pare boolean hole true/false hote pare.temni vabe man take jodi array er vitore paite chai tahole default man hobe [empty array]. const [users, setUsers]= useState([])
/**
 * step-2: use useEffect(call back function,[dependency array])
 * step-3: use fetch to load data
 * step-4: set loaded data to state
 * step-5: display data on the component
 */