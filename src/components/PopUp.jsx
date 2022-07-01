import React, { useEffect, useRef } from "react";
import "./style.css";

function PopUp(props) {
  const popupRef = useRef();

  const handleClick = (event) => {
    if (!popupRef.current?.contains(event.target)) {
      props.closePopUp();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return function cleanUp() {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className="after-click">
      <div className="container-2" ref={popupRef}>
        <button className="btn-2" onClick={() => props.closePopUp()}>
          ❌
        </button>
        <h2>I am Here</h2>
        <p>
          Hello people, I'm Temo 26 years old, but everyone thinks I'm 21 years
          old :D. Bye ^^
        </p>
      </div>
    </div>
  );
}

export default PopUp;
