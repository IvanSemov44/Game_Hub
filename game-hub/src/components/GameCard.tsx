import { Game } from '@/hooks/useGames';
import { Card, Heading, HStack, Image } from '@chakra-ui/react';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card.Root key={game.id} maxW="md" borderRadius={10} overflow="hidden">
            <Image src={game.background_image} />
            <Card.Body>
                <Heading fontSize="2xl">{game.name}</Heading>
                <HStack justifyContent="space-between">
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </Card.Body>
        </Card.Root>
    );
};

export default GameCard;