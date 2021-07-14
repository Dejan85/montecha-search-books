import React from "react";
import styled from "styled-components";
import { InputProps } from "./types";

const InputWrapper = styled.input`
  background-color: white;
  margin-right: 20px;
  max-width: 250px;
  width: 100%;
  padding: 0 0 0 10px;
`;

const Input: React.FC<InputProps> = ({
  type,
  register,
  placeholder,
}): JSX.Element => (
  <InputWrapper type={type} placeholder={placeholder} {...register} />
);

export default Input;
