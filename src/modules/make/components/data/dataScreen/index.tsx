import DataInput from "../dataInput";
import DataPrice from "../dataPrice";
import FinalizeOrder from "../finalizeOrder";

import { DataRow } from "./style";

interface IProps {
  setName: (value: string) => void;
  setAddress: (value: string) => void;
}

const DataScreen = ({ setName, setAddress }: IProps) => {
  return (
    <DataRow>
      <DataInput setInfo={setName} placeholder="Nome Completo" />
      <DataInput setInfo={setAddress} placeholder="Endereço" />
      <DataPrice />
      <FinalizeOrder />
    </DataRow>
  );
};

export default DataScreen;
