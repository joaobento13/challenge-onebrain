import styled from "styled-components";
import { Button } from "reactstrap";

export const EndButton = styled(Button)`
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
  height: 50px;
  background-color: black;
  font-weight: bold;
  font-size: 20px;

  :hover {
    background-color: gray !important;
  }

  :focus {
    box-shadow: none !important;
    outline: none !important;
    background-color: black;
  }
`;
