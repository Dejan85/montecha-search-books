import logo from "./images/logo.png";
import styled from "styled-components";

const ImgWrapper = styled.img`
  width: 200px;
`;

const Logo: React.FC = () => {
  return <ImgWrapper src={logo} alt="logo" />;
};

export default Logo;
