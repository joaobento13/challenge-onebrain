import { Spinner } from "reactstrap";

import {
  AlertContainer,
  AlertHeader,
  AlertBody,
  TextForm,
  MsgAlert,
} from "./style";

interface IProps {
  colorTitle: string;
  message: string;
  title: string;
  onClose: (value: string) => void;
}

const Alert = ({ colorTitle, message, title, onClose }: IProps) => {
  return (
    <AlertContainer backdrop={true} isOpen={!!message} toggle={onClose}>
      <AlertHeader
        toggle={onClose}
        charCode={message !== "loading" ? iconClose() : null}
      >
        <TextForm mt={18} color={colorTitle} size={20}>
          {title}
        </TextForm>
      </AlertHeader>
      <AlertBody>
        {message === "loading" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "25px",
            }}
          >
            <Spinner color="primary" />
          </div>
        ) : (
          <MsgAlert>{message}</MsgAlert>
        )}
      </AlertBody>
    </AlertContainer>
  );
};

const iconClose = () => (
  <svg
    width="53"
    height="53"
    viewBox="0 0 53 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="17.0126"
      y="15.4174"
      width="29.2092"
      height="2.30435"
      rx="0.5"
      transform="rotate(44.3799 17.0126 15.4174)"
      fill="#A6A6A6"
    />
    <rect
      x="37.9678"
      y="17.1599"
      width="29.2092"
      height="2.30435"
      rx="0.5"
      transform="rotate(136.106 37.9678 17.1599)"
      fill="#A6A6A6"
    />
  </svg>
);

export default Alert;
