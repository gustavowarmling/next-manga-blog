import { StyledTag } from "./styles";
import ReactTooltip from 'react-tooltip';

interface TagProps {
    children: String;
    id: string;
}

export default function Tag({children, id}: TagProps) {
    return (
        <>
            <StyledTag 
            data-tip="Tag description" 
            data-for={id}
            >
                {children}       
            </StyledTag>
            <ReactTooltip 
                id={id} 
                effect="solid" 
                backgroundColor="var(--blue-500)" 
                textColor="var(--subtitle)"
            />
        </> 
    )
}