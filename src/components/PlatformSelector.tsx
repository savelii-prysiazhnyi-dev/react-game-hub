import { Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';
import usePlatform from '../hooks/usePlatform';
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store';

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline">
          {selectedPlatform?.name || 'Platforms'} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data?.results.map(platform => (
          <MenuItem
            key={platform.id}
            value={platform.slug}
            onClick={() => setSelectedPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
