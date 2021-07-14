import styled from "styled-components";
import { ButtonProps } from "./types";

const ButtonWrapper = styled.button<{ width?: string }>`
  border: none;
  padding: 10px;
  background-color: #0376b8;
  color: white;
  transition: 1s all;
  cursor: pointer;
  font-size: 20px;
  width: 150px;

  :hover {
    background-color: #0b5f8f;
  }
`;

const Button = ({
  children,
  type,
  width,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonWrapper width={width} type={type} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
