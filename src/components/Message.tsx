import React from "react";

interface MessageProps {
  msg: string;
  type: "danger" | "success";
}

export const Message = ({ msg, type }: MessageProps) => {
  let typeClass = "";

  if (type === "danger") {
    typeClass = "is-danger";
  }

  if (type === "success") {
    typeClass = "is-success";
  }

  return (
    <article className={`message ${typeClass}`}>
      <div className="message-body">{msg}</div>
    </article>
  );
};
