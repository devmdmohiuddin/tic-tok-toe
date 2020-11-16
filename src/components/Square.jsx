import React from "react";

const Square = ({ onClick, value }) => {
  return (
    <button
      style={{ margin: "1px", width: "50px", height: "50px" }}
      className='btn btn-secondary'
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
