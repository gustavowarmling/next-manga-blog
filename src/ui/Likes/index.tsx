import { AiFillHeart } from 'react-icons/ai';
import { LikesStyle } from './styles'

interface LikesProps {
    quantity: Number
}

export function Likes({ quantity }: LikesProps) {
    return (
        <LikesStyle>
            <span>{quantity}</span> 
            <AiFillHeart />
        </LikesStyle>
    )
}