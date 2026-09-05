import { Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';
import useGenre from '../hooks/useGenre';
import useGenres from '../hooks/useGenres';
import useGameQueryStore from '../store';

const GenreSelector = () => {
  const { data, error } = useGenres();
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const selectedGenre = useGenre(selectedGenreId);

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline">
          {selectedGenre?.name || 'Genres'} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent maxHeight="300px" overflowY="auto">
        {data?.results.map(genre => (
          <MenuItem
            key={genre.id}
            value={genre.name}
            onClick={() => setSelectedGenreId(genre.id)}
          >
            {genre.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default GenreSelector;
