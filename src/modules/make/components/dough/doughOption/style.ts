import styled from "styled-components";
import { Row } from "reactstrap";

export const DoughRow = styled(Row)`
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const DoughH1 = styled.h1<{ weight?: string }>`
  width: 300px;
  font-size: 36px;
  font-weight: ${(props) => props.weight};
  font-family: Arial;
  color: ${(props) => (props.weight !== "300" ? "#393939" : "#828282")};
  text-align: center;
`;

export const DoughIcon = styled.div<{ size?: string }>`
  height: ${(props) => props.size}px;
  width: 180px;
  background-color: black;
`;
