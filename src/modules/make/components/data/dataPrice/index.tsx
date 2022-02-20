import { PriceRow, Price, PayOnDelivery } from "./style";

const DataPrice = () => {
  return (
    <PriceRow>
      <Price>Preço: R$ XX,XX</Price>
      <PayOnDelivery>(pagar na entrega)</PayOnDelivery>
    </PriceRow>
  );
};

export default DataPrice;
