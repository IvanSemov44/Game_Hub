import useGameQueryStore from '@/store';
import { Input } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { InputGroup } from './ui/input-group';

const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(s => s.setSearchText);

    return (
        <form
            onSubmit={(event => {
                event.preventDefault();
                setSearchText(ref.current!.value);
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
};

export default SearchInput;