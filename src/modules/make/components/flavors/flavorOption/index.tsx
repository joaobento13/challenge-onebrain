import { FlavorCol, FlavorH1, FlavorImg } from "./style";

const FlavorOption = (props: any) => {
  let name = props.name;
  let img = require(`assets/${props.img}`);

  return (
    <FlavorCol onClick={() => props.setFlavor(name)}>
      <FlavorH1>{name}</FlavorH1>
      <FlavorImg src={img} alt={name} />
    </FlavorCol>
  );
};

export default FlavorOption;
