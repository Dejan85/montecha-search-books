import styled from "styled-components";

const SubContainer = styled.div<{
  minHeigth?: string;
  backgroundColor?: string;
  flexDirection?: string;
  width?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
}>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems};
  background-color: ${({ backgroundColor }) => backgroundColor || "white"};
  min-height: ${({ minHeigth }) => minHeigth};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
`;

export default SubContainer;
