import { StyledTag } from "./styles";

interface TagProps {
    children: String;
}

export default function Tag({children}: TagProps) {
    return (
        <StyledTag>
            {children}       
        </StyledTag>
    )
}