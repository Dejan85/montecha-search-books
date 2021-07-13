import styled from "styled-components";
import { FormProps } from "./types";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Form: React.FC<FormProps> = ({ onSubmit, children }): JSX.Element => (
  <FormWrapper onSubmit={onSubmit}>{children}</FormWrapper>
);

export default Form;
