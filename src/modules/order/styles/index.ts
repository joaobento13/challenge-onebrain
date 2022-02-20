import styled from "styled-components";
import { Col } from "reactstrap";

import pizza5 from "../../../assets/pizza5.webp";

export const Body = styled.div`
  margin-top: 250px;
`;

export const BodyCol = styled(Col)`
  margin-top: 100px;
`;

export const BodyTitle = styled.h1`
  border-bottom: 1px solid #393939;
  text-align: right;
  font-weight: lighter;
  font-family: Arial;
  font-size: 40px;
  color: #393939;
  line-height: 70px;
  cursor: pointer;

  &:hover {
    color: #626262;
    border-color: #626262;
  }
`;

export const Option = styled.h1`
  text-align: right;
  font-weight: bold;
  font-family: Arial;
  font-size: 36px;
  color: #393939;
`;

export const RightImage = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${pizza5});
  background-repeat: no-repeat;
  background-size: cover;
`;
