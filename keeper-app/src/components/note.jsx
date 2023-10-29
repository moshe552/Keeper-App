import React from "react";

export default function Note({noteText}) {
  return (
    <div className="note">
      <h1>Note</h1>
      <p>{noteText}</p>
    </div>
  );
}
