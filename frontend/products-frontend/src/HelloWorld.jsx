import React from "react";

export const HelloWorld = () => {
  return <div><h1>Hello World</h1></div>;
};

export const HelloWithoutJSX = () => {
  return React.createElement("div", {id: "container"}, "Hello World");
};