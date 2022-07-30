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
  const { name, default: dfp, pictures, characters } = data;

  return (
    <Container>
      <List>
        <ImageCard name={name} defaultPicture={dfp} pictures={pictures} />
        {characters
          ? characters.map(({ name, pictures, default: dfp }, index) =>
              name && pictures ? (
                <ImageCard
                  key={index}
                  name={name}
                  defaultPicture={dfp}
                  pictures={pictures}
                />
              ) : null
            )
          : 'NO CHARACTERS'}
      </List>
    </Container>
  );
}
