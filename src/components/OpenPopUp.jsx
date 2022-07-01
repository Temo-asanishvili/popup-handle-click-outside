import React, { useState } from "react";
import PopUp from "./PopUp";
import "./style.css";

function OpenPopUp() {
  const [open, setOpen] = useState(false);

  const closePopUp = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <h1>PopUp App</h1>
      <button className="btn-open" onClick={() => setOpen(true)}>
        Open
      </button>
      {open && <PopUp closePopUp={closePopUp} />}
    </div>
  );
}

export default OpenPopUp;
