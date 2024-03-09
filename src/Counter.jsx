import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    // console.log(count, setCount)
    const handleCount = ()=>{
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <>
            <h1>Counter Function</h1>
            <div style={{border: '2px solid tomato',
        borderRadius: '15px'}}>
                <button onClick={handleCount}>Count </button>
                <h3>Counting: {count} </h3>
                <button onClick={handleReduce}>Reduce</button>
            </div>
        </>
    )
}

//<> </> is the simplest and shorthand syntax for <React. Fragment> component.<> </> is the simplest and shorthand syntax for <React. Fragment> component

// State- a built-in React object that is used to contain data or information about the component. The state object is where you store property values that belong to the component.When the state object changes, the component re-renders.
// component er moddhe kono kisur man jemon like,comment product er dam etc change hote pare-etake bole state.
// useState-react er hook.use korte hoy const []=useState.useState e normally 1ta params dei & initial man dibo dhori(0), bame 2ta name dibo kasakasi jabe const [count, setCount]= useState(0).. (const abc = useState(0) console.log kore dekhte pari)
// ekhon con.log korle dekha jabe [0,f]