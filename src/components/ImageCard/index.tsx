import { useState } from 'react';
//import ImageGallery from 'react-image-gallery';

import {
  ImageCardContainer,
  ImageCardInfo,
  InfoName,
  Main,
  VoiceActorImage,
  ControlLeft,
  ControlRight,
} from './styles';

interface ImageCardProps {
  name: string;
  defaultPicture: string;
  pictures: string[];
}

export function ImageCard({ name, defaultPicture, pictures }: ImageCardProps) {
  const [currentPictureIndex, setCurrentPictureIndex] = useState<number>(
    pictures.indexOf(defaultPicture)
  );

  const isFirstPicture = currentPictureIndex === 0;
  const isLastPicture = currentPictureIndex === pictures.length - 1;

  function previousPicture() {
    if (currentPictureIndex > 0) {
      setCurrentPictureIndex(currentPictureIndex - 1);
    }
  }

  function nextPicture() {
    if (currentPictureIndex + 1 < pictures.length) {
      setCurrentPictureIndex(currentPictureIndex + 1);
    }
  }

  return (
    <ImageCardContainer key={name}>
      {/* <ImageGallery
        items={data.pictures.map((x) => ({
          original: x,
          originalTitle: data.name,
          description: data.name,
        }))}
        startIndex={data.pictures.indexOf(data.default)}
        lazyLoad={true}
        infinite={false}
        showThumbnails={false}
        autoPlay={false}
        showPlayButton={false}
        showFullscreenButton={false}
      /> */}
      <Main>
        <ControlLeft disabled={isFirstPicture} onClick={previousPicture} />

        <VoiceActorImage
          src={pictures[currentPictureIndex]}
          alt={`${name} photos`}
        />

        <ControlRight disabled={isLastPicture} onClick={nextPicture} />
      </Main>

      <ImageCardInfo>
        <InfoName>{name}</InfoName>
      </ImageCardInfo>
    </ImageCardContainer>
  );
}
