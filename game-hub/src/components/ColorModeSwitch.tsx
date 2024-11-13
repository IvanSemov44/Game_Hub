import { Text } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react/stack';
import { useColorMode } from './ui/color-mode';
import { Switch } from './ui/switch';

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <HStack>
            <Switch colorScheme="green" checked={colorMode === "dark"} onChange={toggleColorMode} />
            <Text>DarkMode</Text>
        </HStack>
    );
};

export default ColorModeSwitch;