import React from 'react';

const SubNav = (props) => {
  return (
    <div className='sub-nav'>
      {props.backButton ?
        <i onClick={props.goBack} style={{ fontSize: '26px' }} className="fas fa-angle-left"></i> :
        <div className='spacer'></div>
      }
      <h1>{props.title}</h1>
      {props.add ?
        <i onClick={props.addFunction} style={{ fontSize: '26px' }} className={props.addType === "list" ? "fas fa-plus" : "fas fa-user-plus"}></i> :
        <div className='spacer'></div>
      }
    </div>
  );
}

export default SubNav;