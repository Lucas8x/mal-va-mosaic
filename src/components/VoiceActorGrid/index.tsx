import { ImageCard } from '../ImageCard';
import { PeopleData } from '../../interfaces';

import { VAGContainer } from './styles';

interface Props {
  data: PeopleData;
}

export function VoiceActorGrid({ data }: Props) {
  const { name, default: dfp, pictures, characters } = data;

  return (
    <VAGContainer>
      <ImageCard name={name} defaultPicture={dfp} pictures={pictures} />
      {characters?.length
        ? characters.map(({ name, pictures, default: dfp }, index) =>
            name && pictures?.length ? (
              <ImageCard
                key={index}
                name={name}
                defaultPicture={dfp}
                pictures={pictures}
              />
            ) : null
          )
        : 'NO CHARACTERS'}
    </VAGContainer>
  );
}
