import { Col } from "reactstrap";

import { HeaderH1 } from "./style";

const HeaderTitle = (props: any) => {
  return (
    <Col className="header">
      <HeaderH1>{props.title}</HeaderH1>
    </Col>
  );
};

export default HeaderTitle;
