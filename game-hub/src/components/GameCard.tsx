import { Game } from '@/hooks/useGames';
import getCroppedImageUrl from '@/services/image-url';
import { Card, Heading, HStack, Image } from '@chakra-ui/react';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card.Root>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <Card.Body>
                <HStack justifyContent="space-between" marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize="2xl">{game.name}</Heading>
            </Card.Body>
        </Card.Root>
    );
};

export default GameCard;