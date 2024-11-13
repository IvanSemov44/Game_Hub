import { Input } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import { InputGroup } from './ui/input-group'

const SearchInput = () => {
    return (
        <InputGroup flex="1" startElement={<BsSearch />}>
            <Input borderRadius={20} placeholder='Serch games...' variant="subtle" />
        </InputGroup>
    )
}

export default SearchInput