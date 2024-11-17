import usePlatforms, { Platform } from '@/hooks/usePlatforms'
import { BsChevronDown } from 'react-icons/bs'
import { Button } from './ui/button'
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from './ui/menu'

interface Props {
    onSelectPlatform: (platform: Platform) => void
    selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
    const { data, error } = usePlatforms();

    const selectedPlatform = data?.results.find(platform => platform.id === selectedPlatformId);
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
                        onClick={() => onSelectPlatform(platform)}
                    >
                        {platform.name}
                    </MenuItem>
                )}
            </MenuContent>
        </MenuRoot>
    )
}

export default PlatformSelector