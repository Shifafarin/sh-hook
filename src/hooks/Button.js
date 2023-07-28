import React from 'react';

const Button = (props) => {
  return (
    <button className="btn btn-primary">
     {props.value}
    </button>
  );
};

export default Button;