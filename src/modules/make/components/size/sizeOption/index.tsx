import { SizeRow, SizeH1 } from "./style";

const SizeOption = (props: any) => {
  return (
    <SizeRow
      onClick={() => {
        props.setSize(props.symbol);
      }}
      size={props?.size}
    >
      <SizeH1>{props?.symbol}</SizeH1>
    </SizeRow>
  );
};

export default SizeOption;
