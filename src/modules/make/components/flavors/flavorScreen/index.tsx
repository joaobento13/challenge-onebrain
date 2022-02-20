import { useState, useEffect } from "react";
import { Row } from "reactstrap";
import FlavorOption from "../flavorOption";

interface IProps {
  flavorsProps: any[];
}

const FlavorScreen = ({ flavorsProps }: IProps) => {
  let [options, setOptions] = useState<any[]>();

  useEffect(() => {
    if (flavorsProps) {
      setOptions(flavorsProps);
    }
  }, [flavorsProps]);

  return (
    <Row>
      {options && options.length
        ? options.map((item, index) => <FlavorOption key={index} {...item} />)
        : null}
    </Row>
  );
};

export default FlavorScreen;
