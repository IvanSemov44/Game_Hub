import { HStack, Text } from '@chakra-ui/react';
import { useColorMode } from './ui/color-mode';
import { Switch } from './ui/switch';

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <HStack>
            <Switch colorScheme="green" checked={colorMode === "dark"} onChange={toggleColorMode} />
            <Text>DarkMode</Text>
        </HStack>
    )
}

export default ColorModeSwitch