import React from "react";

interface props {
  title: string;
  content: string;
}

export default function Note(props: props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
