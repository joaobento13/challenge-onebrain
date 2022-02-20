import { useState, useEffect } from "react";
import { Row } from "reactstrap";
import FlavorOption from "../flavorOption";

interface IProps {
  setFlavor: (value: string) => void;
  flavorsProps: any[];
}

const FlavorScreen = ({ setFlavor, flavorsProps }: IProps) => {
  let [options, setOptions] = useState<any[]>();

  useEffect(() => {
    if (flavorsProps) {
      setOptions(flavorsProps);
    }
  }, [flavorsProps]);

  return (
    <Row>
      {options && options.length
        ? options.map((item, index) => (
            <FlavorOption setFlavor={setFlavor} key={index} {...item} />
          ))
        : null}
    </Row>
  );
};

export default FlavorScreen;
