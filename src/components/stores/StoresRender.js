import React from 'react';
import StoreCard from './StoreCard';

const StoresRender = (props) => {
  const dummyList =[
    'Walmart',
    'Smiths',
    'macys',
  ];
  
  const mappedStores = dummyList.map(store => {
    return(
      
      store
    )
  })
  return (
    <div className='store-render-container'>
      {mappedStores}
    </div>
  );
}

export default StoresRender;