import { Col } from "reactstrap";
// import OrderYourPizza from "modules/order/views";
import MakeYourPizza from "modules/make/views";

const Home = () => {
  return (
    <Col className="p-0">
      <MakeYourPizza />
    </Col>
  );
};

export default Home;
