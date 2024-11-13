import useGenres, { Genre } from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import { Button, HStack, Image, List } from '@chakra-ui/react';
import GenreListSkeleton from './GenreListSkeleton';

interface Props {
    onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;

    const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <List.Root variant="plain" gap="2" >
            {isLoading && skeletons.map(i => <GenreListSkeleton key={i} />)}
            {data.map(genre =>
                <List.Item
                    key={genre.id}
                >
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Button
                            fontSize="lg"
                            variant="plain"
                            onClick={() => onSelectedGenre(genre)}
                        >{genre.name}</Button>
                    </HStack>
                </List.Item>
            )}
        </List.Root>
    )
}

export default GenreList