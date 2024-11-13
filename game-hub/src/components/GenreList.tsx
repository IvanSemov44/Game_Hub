import useGenres from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import { HStack, Image, List, Text } from '@chakra-ui/react';
import GenreListSkeleton from './GenreListSkeleton';

const GenreList = () => {
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
                        <Text fontSize="lg">{genre.name}</Text>
                    </HStack>
                </List.Item>
            )}
        </List.Root>
    )
}

export default GenreList