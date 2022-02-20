import { DoughRow, DoughH1, DoughIcon } from "./style";

const DoughOption = (props: any) => {
  let name = props.name;

  return (
    <DoughRow onClick={() => props.setDough(name.split(" ")[1])}>
      <DoughH1 weight={props.weight}>{name}</DoughH1>
      <DoughIcon size={props.size} />
    </DoughRow>
  );
};

export default DoughOption;
