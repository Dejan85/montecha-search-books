import React from "react";
import styled from "styled-components";

const InputWrapper = styled.input`
  background-color: red;
`;

const Input: React.FC = (): JSX.Element => {
  return <InputWrapper />;
};

export default Input;
