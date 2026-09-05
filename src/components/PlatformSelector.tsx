import { Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';
import usePlatform from '../hooks/usePlatform';
import type { Platform } from '../hooks/usePlatforms';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
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
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
