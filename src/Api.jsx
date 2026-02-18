import React, { useState } from "react";

function ProductManager() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [responseData, setResponseData] = useState(null);


  const handleAdd = async () => {
    const newProduct = {
      title,
      price: Number(price),
      description,
      image: "https://i.pravatar.cc",
      category: "electronics"
    };

    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct)
    });

    const data = await response.json();
    setResponseData(data);
    setTitle("");
    setPrice("");
    setDescription("");
  };


  const handleReplace = async () => {
    const updatedProduct = {
      title,
      price: Number(price),
      description,
      image: "https://i.pravatar.cc",
      category: "electronics"
    };

    const response = await fetch("https://fakestoreapi.com/products/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct)
    });

    const data = await response.json();
    setResponseData(data);
  };


  const handleUpdate = async () => {
    const partialUpdate = { price: Number(price) };

    const response = await fetch("https://fakestoreapi.com/products/1", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(partialUpdate)
    });

    const data = await response.json();
    setResponseData(data);
  };


  const handleDelete = async () => {
    const response = await fetch("https://fakestoreapi.com/products/1", {
      method: "DELETE"
    });

    const data = await response.json();
    setResponseData(data);
  };

  return (
    <div>
      <h2>Product Manager</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="mt-5 flex gap-4">
        <button onClick={handleAdd} className="px-5 py-3 bg-green-300">POST</button>
        <button onClick={handleReplace} className="px-5 py-3 bg-green-400">PUT</button>
        <button onClick={handleUpdate} className="px-5 py-3 bg-green-500">PATCH</button>
        <button onClick={handleDelete} className="px-5 py-3 bg-green-600">DELETE</button>
      </div>

      {responseData && (
        <div style={{ marginTop: "20px" }}>
          <p>ID: {responseData.id}</p>
          <p>Title: {responseData.title}</p>
          <p>Price: {responseData.price}</p>
          <p>Description: {responseData.description}</p>
        </div>
      )}
    </div>
  );
}

export default ProductManager;
