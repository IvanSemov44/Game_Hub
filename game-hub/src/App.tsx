import { Grid, GridItem, Stack } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" " main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Stack hideBelow="lg">
        <GridItem area="aside" >
          <GenreList />
        </GridItem>
      </Stack>
      <GridItem area="main" >
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
