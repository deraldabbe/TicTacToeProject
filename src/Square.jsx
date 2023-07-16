import React from "react";


const Square = (props) => {
  const handleClick = () => {
    if (!props.squareValue) {
      if (props.player) {
        props.squares.splice(props.index, 1, "X");
        props.setSquares(props.squares);
        props.setPlayer(!props.player);
      } else {
        props.squares.splice(props.index, 1, "O");
        props.setSquares(props.squares);
        props.setPlayer(!props.player);
      }
    }
  };
  return (
    <div className="square" onClick={handleClick}>
      {props.squareValue === "O" ? <img src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/devmountain/original.png?1568083750" /> : props.squareValue}
    </div>
  );
};

export default Square;