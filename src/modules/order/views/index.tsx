import { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";

import { OrderServices } from "modules/order/services";

import {
  Body,
  BodyCol,
  BodyTitle,
  Option,
  RightImage,
} from "modules/order/styles";

import HeaderTitle from "components/headerTitle";

interface IOptions {
  [key: string]: IApiResponse;
}

interface IApiResponse {
  id: number;
  name: string;
  size: string;
  type: string;
}

const OrderYourPizza = () => {
  let [options, setOptions] = useState<IOptions>({});

  useEffect(() => {
    handleOptions();
  }, []);

  const handleOptions = async () => {
    let response = await OrderServices();
    setOptions(response);
  };

  function handleProfile() {}

  return (
    <>
      <Row className="p-0">
        <Col xs={8} sm={8} md={8} lg={8} xl={8} className="p-0">
          <HeaderTitle title="Peça sua pizza" />
          <Body>
            <Row className="flex-column">
              <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <BodyTitle onClick={() => handleProfile()}>
                  montar pedido
                </BodyTitle>
              </Col>
              <BodyCol xs={6} sm={6} md={6} lg={6} xl={6}>
                <BodyTitle onClick={() => handleProfile()}>
                  pedir pizza do dia
                </BodyTitle>
                {options &&
                  Object.keys(options).map((item, index) =>
                    item !== "id" ? (
                      <Option key={index}>{options[item]}</Option>
                    ) : null
                  )}
              </BodyCol>
            </Row>
          </Body>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4} className="p-0">
          <RightImage />
        </Col>
      </Row>
    </>
  );
};

export default OrderYourPizza;
