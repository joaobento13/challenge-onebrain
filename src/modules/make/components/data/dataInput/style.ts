import styled from "styled-components";
import { Input } from "reactstrap";

export const InputInfo = styled(Input)`
  padding: 0;
  margin-bottom: 20px;
  border: none;
  border-radius: 0px;
  border-bottom: 1px solid black;
  font-size: 30px;
  font-weight: 400;

  ::placeholder {
    color: #9c9c9c;
  }

  :focus {
    border-bottom: 1px solid black;
    outline: none;
    box-shadow: none;
  }
`;
