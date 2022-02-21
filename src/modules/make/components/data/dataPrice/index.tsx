import { useState, useEffect } from "react";

import { PriceRow, Price, PayOnDelivery } from "./style";

import { PriceService } from "modules/make/services";

const DataPrice = (props: any) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    handlePrice();
  });

  const handlePrice = async () => {
    let response = await PriceService(props);
    setPrice(response);
  };

  return (
    <PriceRow>
      <Price>
        Preço:{" "}
        {price.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          style: "currency",
          currency: "BRL",
        })}
      </Price>
      <PayOnDelivery>(pagar na entrega)</PayOnDelivery>
    </PriceRow>
  );
};

export default DataPrice;
