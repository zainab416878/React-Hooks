import React, {useState, useEffect} from "react";
const App = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])
  console.log(products)
  return (
    <div>
    <h1 className="font-medium text-2xl text-center mb-4 md:text-3xl lg:text-4xl">My Clothing Store</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
      {products.map(item => (
      <div key={item.id} className="bg-white rounded-xl  border border-gray-400 shadow-md p-3 hover:shadow-lg transition">
        <img src={item.image} className="w-30"/>
        <h3 className="text-1xl font-medium mt-2 mb-4">{item.title}</h3>
        <h5 className="text-sm">{item.description}</h5>
        <p className="mt-2 font-bold">${item.price}</p>
        
      </div>
    ))}
    </div>
    </div>
  )
}

export default App