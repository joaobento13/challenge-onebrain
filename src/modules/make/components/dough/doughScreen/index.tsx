import { useState, useEffect } from "react";

import DoughOption from "../doughOption";

import { DoughRow } from "./style";

interface IProps {
  setDough: (value: string) => void;
  doughsProps: any[];
}

const DoughScreen = ({ setDough, doughsProps }: IProps) => {
  let [options, setOptions] = useState<any[]>();

  useEffect(() => {
    if (doughsProps) {
      setOptions(doughsProps);
    }
  }, [doughsProps]);

  return (
    <DoughRow>
      {options && options.length
        ? options.map((item, index) => (
            <DoughOption setDough={setDough} key={index} {...item} />
          ))
        : null}
    </DoughRow>
  );
};

export default DoughScreen;
