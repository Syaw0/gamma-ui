import React from "react";

export interface ButtonProps {
  name:string
}


const Button = ({name}:ButtonProps) => {
  return (<p>hello {name}</p>)
}

export  {Button}