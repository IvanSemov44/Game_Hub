import useGenres from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import { HStack, Image, List, Text } from '@chakra-ui/react';

const GenreList = () => {
    const { data } = useGenres();
    return (
        <List.Root variant="plain" gap="2" >
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