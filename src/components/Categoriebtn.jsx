import React from "react";

export const Categoriebtn = ({ getBtn }) => {
  return (
    <div className="categoriebtn">
      {getBtn().map((btn) => {
        return <div className="btn">{btn}</div>;
      })}
    </div>
  );
};
