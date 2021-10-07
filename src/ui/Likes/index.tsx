import { AiFillHeart } from 'react-icons/ai';
import { LikesStyle } from './styles'

interface LikesProps {
    children: Number
}

export default function Likes({children}: LikesProps) {
    return (
        <LikesStyle><span>{children}</span> <span><AiFillHeart /></span></LikesStyle>
    )
}