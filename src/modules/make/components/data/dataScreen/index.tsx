import DataInput from "../dataInput";
import DataPrice from "../dataPrice";
import FinalizeOrder from "../finalizeOrder";

import { DataRow } from "./style";

interface IProps {
  flavor: string;
  dough: string;
  size: string;
  setName: (value: string) => void;
  setAddress: (value: string) => void;
  completedOrder: () => void;
}

const DataScreen = ({
  flavor,
  dough,
  size,
  setName,
  setAddress,
  completedOrder,
}: IProps) => {
  return (
    <DataRow>
      <DataInput setInfo={setName} placeholder="Nome Completo" />
      <DataInput setInfo={setAddress} placeholder="Endereço" />
      <DataPrice flavor={flavor} dough={dough} size={size} />
      <FinalizeOrder completedOrder={completedOrder} />
    </DataRow>
  );
};

export default DataScreen;
