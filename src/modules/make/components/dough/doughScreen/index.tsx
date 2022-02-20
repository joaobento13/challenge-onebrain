import { useState, useEffect } from "react";

import DoughOption from "../doughOption";

import { DoughRow } from "./style";

interface IProps {
  doughsProps: any[];
}

const DoughScreen = ({ doughsProps }: IProps) => {
  let [options, setOptions] = useState<any[]>();

  useEffect(() => {
    if (doughsProps) {
      setOptions(doughsProps);
    }
  }, [doughsProps]);

  return (
    <DoughRow>
      {options && doughsProps.length
        ? options.map((item, index) => <DoughOption key={index} {...item} />)
        : null}
    </DoughRow>
  );
};

export default DoughScreen;
