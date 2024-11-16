import useGenres, { Genre } from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import { Button, Heading, HStack, Image, List } from '@chakra-ui/react';
import GenreListSkeleton from './GenreListSkeleton';

interface Props {
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres();
    console.log(data);
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
                                onClick={() => onSelectedGenre(genre)}
                                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                            >{genre.name}</Button>
                        </HStack>
                    </List.Item>
                )}
            </List.Root>
        </>
    );
};

export default GenreList;