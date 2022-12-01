import React from "react";
import {Meta} from "@storybook/react/types-6-0"
import {Button , ButtonProps} from "./button"
import { Story } from "@storybook/react";

export default {
  title:"Component/Button",
  component:Button,
} as Meta

const template:Story<ButtonProps> = (arg) => <Button {...arg} />


export const Primary  = template.bind({})
Primary.args = {name:"primary"}


export const Secondary  = template.bind({})
Secondary.args = {name:"Secondary"}




// export const PrimaryButton = () => <Button name="hello" />

// export const SecondaryButton = () => <Button name="hello 2" />