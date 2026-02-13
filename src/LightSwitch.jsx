import React, {useEffect, useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert("count just changed")
  })

  return(
    <>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)} className="px-10 py-5 bg-green-700">Add</button>
    </>
  )
}

export default Counter