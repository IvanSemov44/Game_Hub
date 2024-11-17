import { GameQuery } from '@/App';
import useGames from '@/hooks/useGames';
import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
    const {
        data,
        error,
        isLoading,
        fetchNextPage,
        hasNextPage
    } = useGames(gameQuery);

    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) <Text>{error.message}</Text>;

    const fetchedGamesCount = data?.pages.reduce((total, page) =>
        //                        default value
        total + page.results.length, 0) || 0;

    return (
        <InfiniteScroll
            dataLength={fetchedGamesCount}
            // double exclamation sign : it’s short way to cast a variable to be a Boolean (true or false) value.(parseBool~~parseInt)
            hasMore={!!hasNextPage}
            next={() => fetchNextPage()}
            loader={<Spinner />}
        >
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                padding="10px"
                gap={6}
            >
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                )}
                {data?.pages.map((page, index) =>
                    <React.Fragment key={index}>
                        {page.results.map(game =>
                            <GameCardContainer key={game.id}>
                                <GameCard game={game} />
                            </GameCardContainer>
                        )}
                    </React.Fragment>)}
            </SimpleGrid>
        </InfiniteScroll>
    );
};

export default GameGrid;