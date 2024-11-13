import { Button } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from './ui/menu'

const SortSelector = () => {

    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                    Order by: Relevance
                    <BsChevronDown />
                </Button>
            </MenuTrigger>
            <MenuContent>
                <MenuItem value="new-txt-a" >
                    Relevance
                </MenuItem>
                <MenuItem value="new-txt-a" >
                    Date Added
                </MenuItem>
                <MenuItem value="new-txt-a" >
                    Name
                </MenuItem>
                <MenuItem value="new-txt-a" >
                    Populary
                </MenuItem>
                <MenuItem value="new-txt-a" >
                    Average Rating
                </MenuItem>
            </MenuContent>
        </MenuRoot>
    )
}

export default SortSelector