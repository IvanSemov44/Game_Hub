import Game from '@/entities/Game';
import { SimpleGrid, Text } from '@chakra-ui/react';
import CriticScore from './CriticScore';
import DefinictionItem from './DefinictionItem';

interface Props {
    game: Game;
}

const GameAttributes = ({ game }: Props) => {
    return (
        <SimpleGrid columns={2} as="dl">
            <DefinictionItem term="Platforms">
                {game.parent_platforms?.map(({ platform }) =>
                    <Text key={platform.id}>{platform.name}</Text>
                )}
            </DefinictionItem>

            <DefinictionItem term="Metascores">
                <CriticScore score={game.metacritic} />
            </DefinictionItem>

            <DefinictionItem term="Genres">
                {game.genres.map((genre) =>
                    <Text key={genre.id}>{genre.name}</Text>
                )}
            </DefinictionItem>

            <DefinictionItem term="Publisher">
                {game.publishers?.map(publisher =>
                    <Text key={publisher.id}>{publisher.name}</Text>
                )}
            </DefinictionItem>
        </SimpleGrid>
    )
}

export default GameAttributes