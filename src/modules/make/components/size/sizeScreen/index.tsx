import { useState, useEffect } from "react";

import SizeOption from "../sizeOption";

import { SizeRow } from "./style";

interface IProps {
  sizesProps: any[];
}

const SizeScreen = ({ sizesProps }: IProps) => {
  let [options, setOptions] = useState<any[]>();

  useEffect(() => {
    if (sizesProps) {
      setOptions(sizesProps);
    }
  }, [sizesProps]);

  return (
    <SizeRow>
      {options && options.length
        ? options.map((item, index) => <SizeOption key={index} {...item} />)
        : null}
    </SizeRow>
  );
};

export default SizeScreen;
