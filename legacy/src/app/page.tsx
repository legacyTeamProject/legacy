'use client'
import React, { useState, useEffect } from 'react';

import MonthProduct from './home/comp/MonthProduct';
import Categories from './home/comp/Categories';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/category/getAll');
        const data = await response.json();
        setCategories(data);
        console.log(data, 'this');
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);

  console.log(categories);

  return (
    <div className="flex mt-20">
      <div className="flex flex-col w-1/5 max-w-[200px] mx-5">
        <ul className="mt-0">
          {categories.map((cat) => (
            <li key={cat.id}>
              <details className="group">
                <summary className="flex items-center justify-between gap-5 font-medium marker:content-none hover:cursor-pointer">
                  <a href="">{cat.content}</a>
                  <svg
                    className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                </summary>
              </details>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex w-4/5">
        {/* Your existing content */}
        {/* You can place your existing content here or modify it accordingly */}
      </div>
    </div>
  )
};

export default Home;
