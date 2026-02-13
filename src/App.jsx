import React, {useState, useEffect} from "react";

const App = () => {
  const [productTitle,setProductTitle] = useState("")
  const [productDescription,setProductDescription] = useState("")
  const [productPrice,setProductPrice] = useState("")
  const [productImage,setProductImage] = useState(null)

  const handleSubmit = async(e) => {
     e.preventDefault()

     const formData = new FormData()

     formData.append("title",productTitle)
     formData.append("description",productDescription)
     formData.append("price",productPrice)
     formData.append("image",productImage)

     try {
       const response = await fetch("https://fakestoreapi.com/products",{
        method:"POST",
        body:formData
        
       })
       const errorData = await response.json()
       console.log("upload failed");

       alert("error" + errorData.message)
       
       const result = await response.json()
       console.log("product created", result);

       alert("product created succesfully")
       

     } catch (error) {
      console.log("error");
      alert("failed to connect to the server")
      
     }
  }

  return(
    <div className="">
<div className="flex justify-center mt-20">
       <form onSubmit={handleSubmit} className="p-10 w-[400px] h-[90vh] border-2 border-gray-300">
      <h2 className="text-center text-3xl mb-10">upload product</h2>
      <input type="text"
      placeholder="enter product tile"
      onChange={(e)=>setProductTitle(e.target.value)}
      className="w-[300px] h-[45px] p-2 border-2 border-slate-400 rounded-lg mb-5 outline-none"
      
      />
      <input type="text"
      placeholder="enter product Description"
      onChange={(e)=>setProductDescription(e.target.value)}
      className="w-[300px] h-[45px] p-2 border-2 border-slate-400 rounded-lg mb-5 outline-none"
      
      />
      <input type="text"
      placeholder="enter product price"
      onChange={(e)=>setProductPrice(e.target.value)}
      className="w-[300px] h-[45px] p-2 border-2 border-slate-400 rounded-lg ouline-none mb-5"
      
      />
      <input type="file"
      placeholder="enter product image"
      onChange={(e)=>setProductImage(e.target.files[0])}
      className="w-[300px] h-[45px] p-2 border-2 border-slate-400 rounded-full ouline-none mb-5"
      
      />
      
      <button  type = "submit" className="w-[300px] h-[45px] bg-slate-800 border-none rounded-lg text-white cursor-pointer">upload product</button>
     </form>
</div>
    </div>
  )
}

export default App