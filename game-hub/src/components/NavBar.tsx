import { ColorModeButton } from "@/components/ui/color-mode";
import { HStack, Image } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
    return (
        <HStack>
            <Link to="/">
                <Image src={logo} boxSize="60px" objectFit={"cover"} />
            </Link>
            <SearchInput />
            <HStack padding="10px" >
                <ColorModeButton />
                <ColorModeSwitch />
            </HStack>
        </HStack >
    );
};

export default NavBar;