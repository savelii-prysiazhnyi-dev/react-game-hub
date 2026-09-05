import { Card, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import type Game from '../entities/Game';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map(p => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={{ base: 'xl', md: '2xl' }}>
          <Link to={'/games/' + game.slug}>
            <Text
              as="span"
              _hover={{
                textDecoration: 'underline',
                color: 'gray.400',
              }}
              transition="color 0.05s ease"
            >
              {game.name}
            </Text>
          </Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
