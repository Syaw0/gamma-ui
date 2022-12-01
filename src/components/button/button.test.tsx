import React from "react";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import {Button} from "./button"

it('Button', () => {
  render(<Button name="siavash" />)
  screen.getByText('hello siavash')
});
