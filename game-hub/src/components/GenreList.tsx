import useGenres from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import useGameQueryStore from '@/store';
import { Button, Heading, HStack, Image, List } from '@chakra-ui/react';
import GenreListSkeleton from './GenreListSkeleton';

const GenreList = () => {
    const { data, isLoading, error } = useGenres();
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
    const setSelectedGenre = useGameQueryStore(s => s.setGenreId);

    if (error) return null;

    const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
            <List.Root variant="plain" gap="2" >
                {isLoading && skeletons.map(i => <GenreListSkeleton key={i} />)}
                {data?.results.map(genre =>
                    <List.Item
                        key={genre.id}
                    >
                        <HStack>
                            <Image
                                boxSize="32px"
                                objectFit="cover"
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                fontSize="lg"
                                whiteSpace="normal"
                                textAlign="left"
                                variant="plain"
                                onClick={() => setSelectedGenre(genre.id)}
                                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                            >{genre.name}</Button>
                        </HStack>
                    </List.Item>
                )}
            </List.Root>
        </>
    );
};

export default GenreList;