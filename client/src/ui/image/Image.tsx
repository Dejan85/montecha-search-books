import styled from "styled-components";
import { ImageProps } from "./types";
import dummyImg from "./images/img.png";

const Img = styled.img`
  max-width: 150px;
`;

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <Img src={src || dummyImg} alt={alt} />;
};

export default Image;
