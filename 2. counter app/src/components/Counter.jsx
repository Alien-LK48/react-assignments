import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)
  const plus = () => {
    setCount((count) => {
      return count + 1
    })
  }
  const minus = () => {
    setCount((count) => {
      return count - 1
    })
  }
  const zero = () => {
    setCount((count) => {
      return count = 0
    })
  }
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen bg-gray-700">
      <h1 className="text-orange-500 text-3xl mb-12">Counter App</h1>
      <div className="bg-gray-600 w-full max-w-xs text-yellow-400 p-4 rounded-lg">
        <h2 className="text-lg text-center">Count : {count}</h2>
        <div className="flex gap-2 mt-4 ml-[80px]">
          <button className="px-4 py-1 text-lg border-none rounded-md bg-transparent hover:bg-orange-500 hover:text-black transition duration-300" onClick={plus} disabled={count >= 5 ? true : false}>+</button>
          <button className="px-4 py-1 text-lg border-none rounded-md bg-transparent hover:bg-orange-500 hover:text-black transition duration-300" onClick={minus} disabled={count <= -5 ? true : false}>-</button>
          <button className="px-4 py-1 text-lg border-none rounded-md bg-transparent hover:bg-orange-500 hover:text-black transition duration-300" onClick={zero}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
