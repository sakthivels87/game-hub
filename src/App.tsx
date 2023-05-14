import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="tomato">
        Navbar
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          aside section
        </GridItem>
      </Show>
      <GridItem area="main" bg="plum">
        Main section
      </GridItem>
    </Grid>
  );
}

export default App;
