import { SizeRow, SizeH1 } from "./style";

const SizeOption = (props: any) => {
  return (
    <SizeRow size={props.size}>
      <SizeH1>{props.symbol}</SizeH1>
    </SizeRow>
  );
};

export default SizeOption;
