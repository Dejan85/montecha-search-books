import styled from "styled-components";

const P = styled.p<{
  size?: string;
  weight?: string;
  color?: string;
}>`
  color: #666;
  font-size: 20px;
  font-size: ${({ size }) => size || "20px"};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  line-height: 35px;
  padding: 0 0 0 20px;
`;

export default P;
