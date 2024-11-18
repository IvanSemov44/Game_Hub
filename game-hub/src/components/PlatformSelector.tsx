import usePlatform from '@/hooks/usePlatform';
import usePlatforms from '@/hooks/usePlatforms';
import useGameQueryStore from '@/store';
import { BsChevronDown } from 'react-icons/bs';
import { Button } from './ui/button';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from './ui/menu';


const PlatformSelector = () => {
    const { data, error } = usePlatforms();
    const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId);

    const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
    const selectedPlatform = usePlatform(selectedPlatformId);

    if (error) return null;

    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                    {selectedPlatform?.name || "Platforms"}
                    <BsChevronDown />
                </Button>
            </MenuTrigger>
            <MenuContent>
                {data?.results.map(platform =>
                    <MenuItem
                        key={platform.id}
                        value="new-txt-a"
                        onClick={() => setSelectedPlatformId(platform.id)}
                    >
                        {platform.name}
                    </MenuItem>
                )}
            </MenuContent>
        </MenuRoot>
    );
};

export default PlatformSelector;