import { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";

import {
  FlavorsService,
  DoughsService,
  SizesService,
} from "modules/make/services";

import { Body, Option, Selected, OptionCol } from "modules/make/styles";

import HeaderTitle from "components/headerTitle";
import FlavorScreen from "../components/flavors/flavorScreen";
import DoughScreen from "../components/dough/doughScreen";
import SizeScreen from "../components/size/sizeScreen";
import DataScreen from "../components/data/dataScreen";
import Alert from "components/alert";

const MakeYourPizza = (props: any) => {
  const [flavors, setFlavors] = useState([]);
  const [doughs, setDoughs] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [option, setOption] = useState(
    props && props.screen ? props.screen : 1
  );
  const [flavor, setFlavor] = useState(props && props.name ? props.name : "");
  const [dough, setDough] = useState(
    props && props.type ? props.type.split(" ")[1] : ""
  );
  const [size, setSize] = useState(props && props.symbol ? props.symbol : "");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [colorTitle, setColorTitle] = useState("");

  useEffect(() => {
    handleFlavors();
    handleDoughs();
    handleSizes();
  }, []);

  const handleFlavors = async () => {
    let response = await FlavorsService();
    setFlavors(response);
  };

  const handleDoughs = async () => {
    let response = await DoughsService();
    setDoughs(response);
  };

  const handleSizes = async () => {
    let response = await SizesService();
    setSizes(response);
  };

  const handleFlavor = (value: string) => {
    setFlavor(value);
    setOption(2);
  };

  const handleDough = (value: string) => {
    setDough(value);
    setOption(3);
  };

  const handleSize = (value: string) => {
    setSize(value);
    setOption(4);
  };

  const handleName = (value: string) => {
    setName(value);
  };

  const handleAddress = (value: string) => {
    setAddress(value);
  };

  const handleOption = (selected: any) => {
    setOption(selected);
  };

  const completedOrder = () => {
    if (flavor && dough && size && name && address) {
      setColorTitle("#005e00");
      setModalTitle("Pedido realizado");
      setModalMessage(
        "Seu pedido foi realizado com sucesso. Você será informado no momento da entrega."
      );
    } else {
      setColorTitle("#980000");
      setModalTitle("Tente novamente");
      setModalMessage(
        "Preencha todas as informações antes de realizar o pedido."
      );
    }
  };

  const onClose = () => {
    setModalMessage("");
  };

  return (
    <>
      <Alert
        message={modalMessage}
        title={modalTitle}
        colorTitle={colorTitle}
        onClose={onClose}
      />
      <Col xs={12} sm={12} md={12} lg={12} xl={12} className="p-0">
        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
          <HeaderTitle title="Monte sua pizza" />
        </Col>
        <Body>
          <Row>
            <OptionCol xs={6} sm={6} md={6} lg={6} xl={6}>
              <Row>
                <Option onClick={() => handleOption(1)} isActive={option === 1}>
                  Sabor
                </Option>
                <Selected>{flavor}</Selected>
              </Row>
              <Row>
                <Option onClick={() => handleOption(2)} isActive={option === 2}>
                  Massa
                </Option>
                <Selected>{dough}</Selected>
              </Row>
              <Row>
                <Option onClick={() => handleOption(3)} isActive={option === 3}>
                  Tamanho
                </Option>
                <Selected>{size}</Selected>
              </Row>
              <Row>
                <Option onClick={() => handleOption(4)} isActive={option === 4}>
                  Dados
                </Option>
              </Row>
            </OptionCol>
            <Col xs={5} sm={5} md={5} lg={5} xl={5}>
              {option === 1 ? (
                <FlavorScreen setFlavor={handleFlavor} flavorsProps={flavors} />
              ) : option === 2 ? (
                <DoughScreen setDough={handleDough} doughsProps={doughs} />
              ) : option === 3 ? (
                <SizeScreen setSize={handleSize} sizesProps={sizes} />
              ) : (
                <DataScreen
                  flavor={flavor}
                  dough={dough}
                  size={size}
                  setName={handleName}
                  setAddress={handleAddress}
                  completedOrder={completedOrder}
                />
              )}
            </Col>
          </Row>
        </Body>
      </Col>
    </>
  );
};

export default MakeYourPizza;
