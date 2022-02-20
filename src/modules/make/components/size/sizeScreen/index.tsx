import { useState, useEffect } from "react";

import SizeOption from "../sizeOption";

import { SizeRow } from "./style";

interface IProps {
  setSize: (value: string) => void;
  sizesProps: any[];
}

const SizeScreen = ({ setSize, sizesProps }: IProps) => {
  let [options, setOptions] = useState<any[]>();

  useEffect(() => {
    if (sizesProps) {
      setOptions(sizesProps);
    }
  }, [sizesProps]);

  return (
    <SizeRow>
      {options && options.length
        ? options.map((item, index) => (
            <SizeOption setSize={setSize} key={index} {...item} />
          ))
        : null}
    </SizeRow>
  );
};

export default SizeScreen;
