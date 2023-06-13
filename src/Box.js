import React, { useState } from "react";
import "./Box.css";

const Box = ({ backgroundColor, width, height, removeBox, id }) => {
  const handleRemove = (e) => {
    let boxId = e.target.dataset.box;
    removeBox(boxId);
  };
  /** Render
   * - box item with:
   * backgroundColor,
   * width
   * and height
   *
   * and a button to remove the box
   * */
  return (
    <>
      <div
        className="Box"
        id={id}
        style={{
          backgroundColor,
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <button onClick={handleRemove} data-box={id} className="Box-btn">
          X
        </button>
      </div>
    </>
  );
};

export default Box;
