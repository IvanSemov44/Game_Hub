import { Image, ImageProps } from "@chakra-ui/react";
import bullEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumpsUp from "../assets/thumbs-up.webp";

interface Props {
    rating: number;
}

const Emoji = ({ rating }: Props) => {
    if (rating) return null

    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: meh, alt: "meh", boxSize: "25px" },
        4: { src: thumpsUp, alt: "recommended", boxSize: "25px" },
        5: { src: bullEye, alt: "exceptional", boxSize: "35px" },
    }

    return (
        <Image
            {...emojiMap[rating]}
            boxSize="25px"
        />
    );
};

export default Emoji;