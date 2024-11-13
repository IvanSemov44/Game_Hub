import usePlatforms from '@/hooks/usePlatforms'
import { BsChevronDown } from 'react-icons/bs'
import { Button } from './ui/button'
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from './ui/menu'

const PlatformSelector = () => {
    const { data, error } = usePlatforms();
    if (error) return null;

    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                    Platforms
                    <BsChevronDown />
                </Button>
            </MenuTrigger>
            <MenuContent>
                {data.map(platform =>
                    <MenuItem key={platform.id} value="new-txt-a">
                        {platform.name}
                    </MenuItem>
                )}


            </MenuContent>
        </MenuRoot>
    )
}

export default PlatformSelector