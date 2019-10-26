import React, {useState} from 'react';
import StoreRender from '../stores/StoresRender';
import { Swipeable } from 'react-touch';

const MapView = (props) => {

    const [isMenuExpanded, handleMenuSwipe] = useState(false);
  return (
    <div 
      className='map-container'
      
      >
      <div onClick={() => {
        handleMenuSwipe(false);
      }} className='top-container'>

      </div>
      <Swipeable onSwipeUp={() => handleMenuSwipe(true)}>
        <div 
        //   onClick={() => {
        //     handleMenuSwipe(true);
        // }} 
          className={ isMenuExpanded ? 'expanded' : 'not-expanded'}>
          <StoreRender/>
        </div>
      </Swipeable>
    </div>
  );
}

export default MapView;