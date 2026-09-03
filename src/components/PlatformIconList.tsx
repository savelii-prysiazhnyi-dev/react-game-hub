import { HStack, Icon } from '@chakra-ui/react';
import type { IconType } from 'react-icons';
import { BsGlobe, BsNintendoSwitch } from 'react-icons/bs';
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import type { Platform } from '../hooks/useGames';

interface Props {
  platforms?: Platform[];
}

const PlatformIconList = ({ platforms = [] }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map(platform => {
        const IconComponent = iconMap[platform.slug];
        if (!IconComponent) return null;
        return (
          <Icon key={platform.id} asChild color="gray.500">
            <IconComponent />
          </Icon>
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
