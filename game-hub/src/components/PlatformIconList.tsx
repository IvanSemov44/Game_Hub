import { Platform } from '@/hooks/useGames';
import { HStack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsGlobe } from "react-icons/bs";
import {
    FaAndroid,
    FaApple,
    FaLinux,
    FaPlaystation,
    FaWindows,
    FaXbox
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    // const iconMap: { [key: string]: IconType } = {
    //     pc: FaWindows,
    //     playstation: FaPlaystation,
    //     xbox: FaXbox,
    //     mac: FaApple,
    //     linux: FaLinux,
    //     android: FaAndroid,
    //     ios: MdPhoneIphone,
    //     nintendo: SiNintendo,
    //     globe: BsGlobe,
    // };

    const iconMap3: { [key: string]: ReactNode } = {
        pc: <FaWindows />,
        playstation: <FaPlaystation />,
        xbox: <FaXbox />,
        mac: <FaApple />,
        linux: <FaLinux />,
        android: <FaAndroid />,
        ios: <MdPhoneIphone />,
        nintendo: <SiNintendo />,
        globe: <BsGlobe />,
    };

    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (
                // < Icon
                //     // key={platform.id}
                //     // as={iconMap[platform.slug]} 
                // />
                <p key={platform.id}>
                    {iconMap3[platform.slug]}
                </p>
            ))}
        </HStack>
    )
}

export default PlatformIconList;