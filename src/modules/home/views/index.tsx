import { useState, useEffect } from "react";

import { Col } from "reactstrap";
import MakeYourPizza from "modules/make/views";
import OrderYourPizza from "modules/order/views";

const Home = () => {
  const [option, setOption] = useState(1);
  const [options, setOptions] = useState({});

  const handleFlavor = (value: number, options: object) => {
    setOption(value);
    setOptions(Object.keys(options).length ? { ...options, screen: 4 } : {});
  };

  return (
    <Col className="p-0">
      {option === 1 ? (
        <OrderYourPizza setOption={handleFlavor} />
      ) : (
        <MakeYourPizza {...options} />
      )}
    </Col>
  );
};

export default Home;
