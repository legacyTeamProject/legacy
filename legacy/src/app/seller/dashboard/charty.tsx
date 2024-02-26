"use client"
import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

interface Product {
  name: string;
  price: number;
}

const ProductChart: React.FC = () => {
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    axios.get<Product[]>("http://localhost:3000/apii/product")
      .then((res) => {
        const products = res.data;
        setProductData(products);
        renderChart(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderChart = (products: Product[]) => {
    const ctx = document.getElementById('productChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: products.map(product => product.name),
        datasets: [{
          label: 'Price',
          data: products.map(product => product.price),
          backgroundColor: products.map(() => 'rgba(100, 0, 20, 0.2)'), 
          borderColor: 'rgba(207, 0, 15, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)' 
            }
          },
          x: {
            grid: {
              display: false 
            }
          }
        },
        plugins: {
          legend: {
            display: false 
          }
        }
      }
    });
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-red-500 font-bold text-lg mb-4">Product Chart</h2>
      <div className="relative" style={{ height: '400px' }}> 
        <canvas id="productChart" className="w-full h-full" /> 
        <div className="absolute bottom-0 left-0 p-4 bg-white border-t border-gray-200 w-full"> 
          <p className="text-gray-600 text-sm">Prices of different products</p>
        </div>
      </div>
    </div>
  );
};

export default ProductChart;
