import React, { useState, useEffect } from "react";

const Register = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const handleAdd = async () => {
    const newProduct = {
      title,
      price: Number(price),
      description,
      image: "https://i.pravatar.cc",
      category: "electronics"
    };

    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct)
      });
      const data = await response.json();

      setProducts(prev => [...prev, data]);

      setTitle("");
      setPrice("");
      setDescription("");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };


  const handleUpdate = async (id) => {
    const newPrice = Number(prompt("Enter new price:"));
    if (!newPrice) return;

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: newPrice })
      });
      const data = await response.json();

      setProducts(prev =>
        prev.map(prod => (prod.id === id ? { ...prod, price: data.price } : prod))
      );
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };


  const handleDelete = async (id) => {
    try {
      await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE"
      });

      setProducts(prev => prev.filter(prod => prod.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <h1 className="font-medium text-2xl text-center mb-10">My Clothing Store</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(item => (
          <div key={item.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <img src={item.image} alt={item.title} className="w-full h-48 object-contain mb-2"/>
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-sm">{item.description.slice(0, 100)}...</p>
            <p className="font-bold mt-2">${item.price}</p>

            <div className="mt-2 flex gap-2">
              <button
                onClick={() => handleUpdate(item.id)}
                className="bg-yellow-400 px-2 py-1 rounded"
              >
                Update Price
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Register;
