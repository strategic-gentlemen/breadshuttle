import React from 'react';

const SubNav = (props) => {
  return (
    <div>
      {props.backButton &&
        <i onClick={props.goBack} className="fas fa-angle-left"></i>
      }
      <h1>{props.title}</h1>
      {props.add &&
        <i onClick={props.addFunction} className="fas fa-plus"></i>
      }
    </div>
  );
}

export default SubNav;