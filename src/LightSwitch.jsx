import React, {useState} from "react";
const Counter = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  const increment = () => {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const handleName = () => {
    setName((e) => (e.target.value))
  }

  return(
    <>
    <p>{count}</p>
    <button onClick={increment} className="p-4 bg-green-500">Add</button>
    <button onClick={decrement} className="p-4 bg-red-500">Subract</button>
    <input type="text" value={name} onChange={handleName}/>
    </>
  )
}

export default Counter




