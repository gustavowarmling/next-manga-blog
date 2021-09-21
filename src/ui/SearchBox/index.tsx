import { FormEvent, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Container } from './styles'

export function SearchBox() {
    const [search, setSearch] = useState('');
    
    function handleSubmit(e:FormEvent) {
        e.preventDefault();

        console.log(search);
    }
    

    return (
        <Container onSubmit={handleSubmit}>
            <input type="search" onChange={(e) => setSearch(e.target.value)}/>
            <button type="submit">
                <BiSearch color='#fff'/>
            </button>
        </Container>
    )
}