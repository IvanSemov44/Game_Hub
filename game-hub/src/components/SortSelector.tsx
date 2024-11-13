import { Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from './ui/menu';

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Data added' },
        { value: 'name', label: 'Name' },
        { value: '-release', label: 'Release data' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ]

    const currenSortOrder = sortOrders.find(order => order.value === sortOrder)

    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                    Order by: {currenSortOrder?.label || " Relevance"}
                    <BsChevronDown />
                </Button>
            </MenuTrigger>
            <MenuContent>
                {sortOrders.map(order =>
                    <MenuItem
                        key={order.value}
                        value={order.value}
                        onClick={() => onSelectSortOrder(order.value)}
                    >
                        {order.label}
                    </MenuItem>
                )}
            </MenuContent>
        </MenuRoot>
    )
}

export default SortSelector