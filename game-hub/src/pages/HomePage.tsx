import GameGrid from '@/components/GameGrid'
import GameHeading from '@/components/GameHeading'
import GenreList from '@/components/GenreList'
import PlatformSelector from '@/components/PlatformSelector'
import SortSelector from '@/components/SortSelector'
import { Box, Flex, Grid, GridItem, Stack } from '@chakra-ui/react'

const HomePage = () => {
    return (
        <Grid templateAreas={{
            base: `"main"`,
            lg: `"aside main"`
        }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr"
            }}
        >
            <Stack hideBelow="lg">
                <GridItem area="aside" paddingX="10px">
                    <GenreList />
                </GridItem>
            </Stack>
            <GridItem area="main">
                <Box paddingLeft={2}>
                    <GameHeading />
                    <Flex gap={5} marginBottom={5}>
                        <PlatformSelector />
                        <SortSelector />
                    </Flex>
                </Box>
                <GameGrid />
            </GridItem>
        </Grid>
    )
}

export default HomePage