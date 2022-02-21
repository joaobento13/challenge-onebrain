import styled from "styled-components";
import { Row } from "reactstrap";

export const SizeRow = styled(Row)<{ size?: string }>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border: 8px solid black;
  border-radius: ${(props) => props.size}px;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
  position: absolute;
  top: ${(props) =>
    props.size === "200" ? `190px` : props.size === "150" ? `15px` : `100px`};
  left: ${(props) =>
    props.size === "200" ? `60px` : props.size === "150" ? `120px` : ``};
`;

export const SizeH1 = styled.h1`
  font-size: 46px;
  text-align: center;
  font-weight: bold;
`;
