import Link from "next/link";
import { InfoContainer, Info } from "./style";

export function TagInfo() {
  return (
    <InfoContainer>
      <Info>
        <span>Description</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          perspiciatis asperiores maiores fuga, sunt accusantium, nihil tempore
          recusandae voluptatum illum repellendus tenetur aspernatur ullam. Sunt
          reiciendis pariatur quis expedita nemo?
        </p>
        <span>Books:</span>
        <p>320</p>
      </Info>
    </InfoContainer>
  );
}
