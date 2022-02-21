import { EndButton } from "./style";

const FinalizeOrder = (props: any) => {
  return (
    <EndButton onClick={() => props.completedOrder()}>
      Finalizar pedido
    </EndButton>
  );
};

export default FinalizeOrder;
