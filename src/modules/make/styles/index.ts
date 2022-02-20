import styled from "styled-components";
import { Col } from "reactstrap";

export const Body = styled.div`
  margin-top: 220px;
`;

export const BodyCol = styled(Col)`
  margin-top: 100px;
`;

export const Option = styled.h1<{ isActive?: boolean }>`
  text-align: left;
  font-family: Arial;
  font-size: 56px;
  color: ${(props) => (props.isActive ? "#393939" : "#a4a4a4")};
  margin-left: 20%;
  cursor: pointer;
`;

export const OptionCol = styled(Col)`
  margin-top: 35px;
`;
