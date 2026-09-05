import { Box, Grid, GridItem, HStack } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import GenreSelector from '../components/GenreSelector';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr',
      }}
    >
      <GridItem area="aside" hideBelow="lg" paddingX={5}>
        <GenreList />
      </GridItem>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack gap={{ base: 3, md: 5 }} marginBottom={5} flexWrap="wrap">
            <Box hideFrom="lg">
              <GenreSelector />
            </Box>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
