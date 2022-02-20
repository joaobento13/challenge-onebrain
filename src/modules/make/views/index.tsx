import { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";

import { DoughsService, FlavorsService } from "modules/make/services";

import { Body, Option, OptionCol } from "modules/make/styles";

import HeaderTitle from "components/headerTitle";
import FlavorScreen from "../components/flavors/flavorScreen";
import DoughScreen from "../components/dough/doughScreen";

const MakeYourPizza = () => {
  let [flavors, setflavors] = useState([]);
  let [doughs, setDoughs] = useState([]);

  useEffect(() => {
    handleFlavors();
    handleDough();
  }, []);

  const handleFlavors = async () => {
    let response = await FlavorsService();
    setflavors(response);
  };

  const handleDough = async () => {
    let response = await DoughsService();
    setDoughs(response);
  };

  console.log("flavors 1", flavors);

  return (
    <>
      <Col xs={12} sm={12} md={12} lg={12} xl={12} className="p-0">
        <HeaderTitle title="Monte sua pizza" />
        <Body>
          <Row>
            <OptionCol xs={6} sm={6} md={6} lg={6} xl={6}>
              <Option isActive>Sabor</Option>
              <Option>Massa</Option>
              <Option>Tamanho</Option>
              <Option>Dados</Option>
            </OptionCol>
            <Col xs={5} sm={5} md={5} lg={5} xl={5}>
              {/* <FlavorScreen flavorsProps={flavors} /> */}
              <DoughScreen doughsProps={doughs} />
            </Col>
          </Row>
        </Body>
      </Col>
    </>
  );
};

export default MakeYourPizza;
