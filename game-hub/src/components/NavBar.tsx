import { ColorModeButton } from "@/components/ui/color-mode";
import { HStack, Image } from '@chakra-ui/react';
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize="60px" />
            <SearchInput />
            <HStack padding="10px" >
                <ColorModeButton />
                <ColorModeSwitch />
            </HStack>
        </HStack >
    );
};

export default NavBar;