import React from "react";
import styled from "styled-components";
import { InputProps } from "./types";

const InputWrapper = styled.input`
  background-color: red;
`;

const Input: React.FC<InputProps> = ({ type, register }): JSX.Element => (
  <InputWrapper type={type} {...register} />
);

export default Input;
