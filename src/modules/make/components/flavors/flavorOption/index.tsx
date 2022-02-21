import { FlavorCol, FlavorH1, FlavorImg } from "./style";

const FlavorOption = (props: any) => {
  let name = props.name;
  let img = require(`assets/${props.img}`);

  return (
    <FlavorCol>
      <FlavorH1>{name}</FlavorH1>
      <FlavorImg onClick={() => props.setFlavor(name)} src={img} alt={name} />
    </FlavorCol>
  );
};

export default FlavorOption;
