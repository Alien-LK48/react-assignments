import React from 'react';

import Products from './components/Products';

const App = () => {
  return (
    <div className='bg-[gray]'>
      <h1 className="text-4xl text-center m-[10px] bg-[gray]">BD Store</h1>
      <Products />
    </div>
  );
};

export default App;
