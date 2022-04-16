import { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiExternalLink } from 'react-icons/fi';

//import ImageGallery from 'react-image-gallery';

import {
  ImageCardContainer,
  ImageCardInfo,
  Main,
  VoiceActorImage,
  ControlLeft,
  ControlRight,
} from './styles';

interface ImageCardProps {
  data: {
    name: string;
    default: string;
    pictures: string[];
  };
}

export function ImageCard({ data }: ImageCardProps) {
  const [currentPictureIndex, setCurrentPictureIndex] = useState<number>(
    data.pictures.indexOf(data.default)
  );

  function previousPicture() {
    if (currentPictureIndex > 0) {
      setCurrentPictureIndex(currentPictureIndex - 1);
    }
  }

  function nextPicture() {
    if (currentPictureIndex + 1 < data.pictures.length) {
      setCurrentPictureIndex(currentPictureIndex + 1);
    }
  }

  return (
    <ImageCardContainer key={data.name}>
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
        <ControlLeft type='button' onClick={previousPicture}>
          <FiArrowLeft />
        </ControlLeft>

        <VoiceActorImage
          src={data.pictures[currentPictureIndex]}
          alt={`${data.name} photos`}
        />

        <ControlRight type='button' onClick={nextPicture}>
          <FiArrowRight />
        </ControlRight>
      </Main>

      <ImageCardInfo>
        <strong>{data.name}</strong>
      </ImageCardInfo>
    </ImageCardContainer>
  );
}
