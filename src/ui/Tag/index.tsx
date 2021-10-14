import Link from "next/link";
import { StyledTag } from "./styles";
import ReactTooltip from "react-tooltip";

interface TagProps {
  title: string;
}

export function Tag({ title }: TagProps) {
  return (
    <Link href="http://localhost:3000/tags/1">
      <a>
        <StyledTag data-tip="Tag description" data-for={title}>
          {title}
        </StyledTag>
        <ReactTooltip
          id={title}
          effect="solid"
          backgroundColor="var(--blue-500)"
          textColor="var(--subtitle)"
          border={true}
          borderColor="var(--blue-300)"
        />
      </a>
    </Link>
  );
}
