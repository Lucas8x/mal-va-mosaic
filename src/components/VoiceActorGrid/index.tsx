import { ImageCard } from '../ImageCard';

import { Container, List } from './styles';

interface VoiceActorGridProps {
  data: {
    name: string;
    default: string;
    pictures: string[];
    characters: Array<{
      name: string;
      default: string;
      pictures: string[];
    }>;
  };
}

export function VoiceActorGrid({ data }: VoiceActorGridProps) {
  return (
    <Container className='va-grid-container'>
      <List>
        <ImageCard
          data={{
            name: data.name,
            default: data.default,
            pictures: data.pictures,
          }}
        />
        {data.characters
          ? data.characters.map((character, index) =>
              character.name && character.pictures ? (
                <ImageCard key={index} data={character} />
              ) : null
            )
          : 'NO CHARACTERS'}
      </List>
    </Container>
  );
}
