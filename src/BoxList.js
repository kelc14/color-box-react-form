import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  /** Add the new box to state. */
  const addBox = (box) => {
    let newBox = { ...box, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  };

  /** Remove the selected box from state. */
  const removeBox = (boxId) => {
    let noBox = boxes.filter((el) => el.id !== boxId);
    setBoxes(() => [...noBox]);
  };

  /** Render:
   *
   */
  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {boxes.map((box) => (
        <Box
          key={box.id}
          id={box.id}
          backgroundColor={box.backgroundColor}
          width={box.width}
          height={box.height}
          removeBox={removeBox}
        />
      ))}
    </div>
  );
};

export default BoxList;
