import { InputInfo } from "./style";

const DataInput = (props: any) => {
  return (
    <InputInfo
      onChange={(e: any) => props.setInfo(e.target.value)}
      placeholder={props.placeholder}
    />
  );
};

export default DataInput;
