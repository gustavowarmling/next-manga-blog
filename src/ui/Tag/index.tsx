import { StyledTag } from "./styles";
import ReactTooltip from 'react-tooltip';

interface TagProps {
    title: string;
}

export function Tag({ title }: TagProps) {
    return (
        <>
            <StyledTag 
            data-tip="Tag description" 
            data-for={title}
            >
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
        </> 
    )
}