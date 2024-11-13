import { Input } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import { InputGroup } from './ui/input-group'

interface Props {
    onSearch: (searchText: string) => void
}

const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <form
            onSubmit={(event => {
                event.preventDefault();
                onSearch(ref.current!.value);
            })}>
            <InputGroup
                width="100%"
                startElement={<BsSearch />}>
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder='Serch games...'
                    variant="subtle" />
            </InputGroup>
        </form>
    )
}

export default SearchInput