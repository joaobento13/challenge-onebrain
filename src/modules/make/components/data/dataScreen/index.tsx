import DataInput from "../dataInput";
import DataPrice from "../dataPrice";
import FinalizeOrder from "../finalizeOrder";

import { DataRow } from "./style";

const DataScreen = () => {
  return (
    <DataRow>
      <DataInput placeholder="Nome Completo" />
      <DataInput placeholder="Endereço" />
      <DataPrice />
      <FinalizeOrder />
    </DataRow>
  );
};

export default DataScreen;
