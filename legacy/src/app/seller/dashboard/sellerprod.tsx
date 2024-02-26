"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  name: string;
  prodId:any
  description: string;
  price: number;
  file: string;
}

interface NewProductData {
  name: string;
  description: string;
  price: number;
  file: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [showInputsIndex, setShowInputsIndex] = useState<number | null>(null);
  const [newProductData, setNewProductData] = useState<NewProductData>({
    name: "",
    description: "",
    price: 0,
    file: ""
  });

  useEffect(() => {
    axios.get<Product[]>("http://localhost:3000/apii/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refresh]);

  const deleting = (prodId: any) => {
    axios.delete(`http://localhost:3000/apii/delete/${prodId}`)
      .then((res) => {
        console.log("Product has been deleted");
        setRefresh(!refresh);
      })
      .catch(error => {
        console.error("Error deleting product:", error);
      });
  };

  const updating = (prodId: any) => {
    axios.put(`http://localhost:3000/aoii/product/${prodId}`, newProductData)
      .then(res => {
        console.log("Product updated successfully");
        setRefresh(!refresh); 
      })
      .catch(error => {
        console.error("Error updating product:", error);
      });
  };

  const handleUpdateClick = (index: number) => {
    setShowInputsIndex(index === showInputsIndex ? null : index);
  };

  const handleRemoveClick = (prodId: any) => {
    deleting(prodId);
  };

  const handleDoneClick = (prodId: any) => {
    updating(prodId);
  };

  return (
    <main>
      <div style={{ display: "flex",height:'100%',  alignItems: "center", marginTop: "4rem" ,marginLeft:1}}>
        <section className='p-2 shadow-md' style={{ width: '80%' }}>
          <form className="max-w-md">
            <p className="text-red-500">Products List</p>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product: Product, index) => (
                  <tr key={index}>
                    <td className="px-6 py-3 whitespace-nowrap">{product.name}</td>
                    <td className="px-6 py-3 whitespace-nowrap">{product.description}</td>
                    <td className="px-6 py-3 whitespace-nowrap">${product.price}</td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      <img src={product.file} alt={product.name} style={{ maxWidth: "100px", maxHeight: "100px" }} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => handleUpdateClick(index)}
                          className="bg-red-500 text-white px-2 py-1 rounded-md text-xs mr-2"
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          onClick={() => handleRemoveClick(product.prodId)}
                          className="bg-red-500 text-white px-2 py-1 rounded-md text-xs"
                        >
                          Remove
                        </button>
                      </div>
                      {showInputsIndex === index && (
  <div className="p-4 border border-gray-300 mb-5 shadow-sm rounded-md bg-gray-100">
    <div className="mb-2">
      <input
        type="text"
        placeholder="New name"
        className="p-3 max-w-md border rounded-md focus:outline-none focus:border-blue-500 text-lg"
        value={newProductData.name}
        onChange={(e) => setNewProductData({ ...newProductData, name: e.target.value })}
      />
    </div>
    <div className="mb-2">
      <textarea
        placeholder="New description"
        className="p-3 max-w-md h-32 border rounded-md focus:outline-none focus:border-blue-500 text-lg"
        value={newProductData.description}
        onChange={(e) => setNewProductData({ ...newProductData, description: e.target.value })}
      ></textarea>
    </div>
    <div className="mb-2">
      <input
        type="number"
        placeholder="New price"
        className="p-3 max-w-md border rounded-md focus:outline-none focus:border-blue-500 text-lg"
        value={newProductData.price}
        onChange={(e) => setNewProductData({ ...newProductData, price: parseFloat(e.target.value) })}
      />
    </div>
    <div className="mb-2">
      <input
        type="text"
        placeholder="New image URL"
        className="p-3 max-w-md border rounded-md focus:outline-none focus:border-blue-500 text-lg"
        value={newProductData.file}
        onChange={(e) => setNewProductData({ ...newProductData, file: e.target.value })}
      />
    </div>
    <button
      type="button"
      className="bg-red-500 text-white px-4 py-2 rounded-md text-lg hover:bg-red-600 focus:outline-none focus:bg-red-600"
      onClick={() => handleDoneClick(product.prodId)}
    >
      Done
    </button>
  </div>
)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </section>
      </div>
    </main>
  );
}
