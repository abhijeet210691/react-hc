import {useState} from 'react'

function Counter() {

    const [counter, setCounter] = useState(0)

    const addValue = ()=>{
        setCounter(counter + 1)
    }

    const removeValue = ()=>{
        if(counter !== 0){
            setCounter(counter - 1)
        }
    }

    return(
        <>
        <h1>Result of counter: {counter}</h1>
        <h2>{counter}</h2>
        <button onClick={addValue}>Add</button>
        <button onClick={removeValue}>Remove</button>
        <p>Footer: {counter}</p>
        </>
    )
}

export default Counter