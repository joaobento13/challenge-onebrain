import styled from "styled-components";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export const AlertContainer = styled(Modal)`
  max-width: 632px;
  max-height: 196px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  border: none;
  top: 40%;

  @media (max-width: 768px) {
    top: 20%;
  }
`;

export const AlertHeader = styled(ModalHeader)`
  border: none;
  padding: 0;
  margin: 0px 16px 0 21px;
`;

export const AlertBody = styled(ModalBody)`
  border: none;
  padding: 0;
  margin: 18px 30px 16px 21px;
`;

export const TextForm = styled.h1<{
  mt: number;
  color: string;
  size?: number;
}>`
  font-size: ${(props) => `${props.size}px` || "18px"};
  color: ${(props) => props.color || "#6e6e6e"};
  font-weight: "normal";
  line-height: "auto";
  margin-right: "0";
  margin-top: ${(props) => `${props.mt}px` || "0"};
  @media (max-width: 768px) {
    font-size: ${(props) => `${props.size ? props.size - 4 : 0}px`};
  }
`;

export const MsgAlert = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #6e6e6e;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
