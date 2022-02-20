import { DoughRow, DoughH1, DoughIcon } from "./style";

const DoughOption = (props: any) => {
  let name = props.name;

  return (
    <DoughRow>
      <DoughH1 weight={props.weight}>{name}</DoughH1>
      <DoughIcon size={props.size} />
    </DoughRow>
  );
};

export default DoughOption;
