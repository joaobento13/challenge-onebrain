import { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";

import {
  FlavorsService,
  DoughsService,
  SizesService,
} from "modules/make/services";

import { Body, Option, OptionCol } from "modules/make/styles";

import HeaderTitle from "components/headerTitle";
import FlavorScreen from "../components/flavors/flavorScreen";
import DoughScreen from "../components/dough/doughScreen";
import SizeScreen from "../components/size/sizeScreen";
import DataScreen from "../components/data/dataScreen";

const MakeYourPizza = () => {
  let [flavors, setflavors] = useState([]);
  let [doughs, setDoughs] = useState([]);
  let [sizes, setSizes] = useState([]);
  let [option, setOptions] = useState(1);

  useEffect(() => {
    handleFlavors();
    handleDoughs();
    handleSizes();
  }, []);

  const handleFlavors = async () => {
    let response = await FlavorsService();
    setflavors(response);
  };

  const handleDoughs = async () => {
    let response = await DoughsService();
    setDoughs(response);
  };

  const handleSizes = async () => {
    let response = await SizesService();
    setSizes(response);
  };

  const handleOption = (selected: any) => {
    setOptions(selected);
  };

  return (
    <Col xs={12} sm={12} md={12} lg={12} xl={12} className="p-0">
      <HeaderTitle title="Monte sua pizza" />
      <Body>
        <Row>
          <OptionCol xs={6} sm={6} md={6} lg={6} xl={6}>
            <Option onClick={() => handleOption(1)} isActive={option === 1}>
              Sabor
            </Option>
            <Option onClick={() => handleOption(2)} isActive={option === 2}>
              Massa
            </Option>
            <Option onClick={() => handleOption(3)} isActive={option === 3}>
              Tamanho
            </Option>
            <Option onClick={() => handleOption(4)} isActive={option === 4}>
              Dados
            </Option>
          </OptionCol>
          <Col xs={5} sm={5} md={5} lg={5} xl={5}>
            {option === 1 ? (
              <FlavorScreen flavorsProps={flavors} />
            ) : option === 2 ? (
              <DoughScreen doughsProps={doughs} />
            ) : option === 3 ? (
              <SizeScreen sizesProps={sizes} />
            ) : (
              <DataScreen />
            )}
          </Col>
        </Row>
      </Body>
    </Col>
  );
};

export default MakeYourPizza;
