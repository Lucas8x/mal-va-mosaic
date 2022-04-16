import { useState, useEffect } from 'react';

import { api } from '../../services/api';

import { VoiceActorGrid } from '../../components/VoiceActorGrid';

import { Container } from './styles';

interface RouterProps {
  match: {
    params: {
      id: string;
    };
  };
}

interface DataProps {
  name: string;
  default: string;
  pictures: string[];
  characters: Array<{
    name: string;
    default: string;
    pictures: string[];
    favorites: number;
  }>;
}

export function Mosaic({ match }: RouterProps) {
  const { id } = match.params;

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DataProps>();

  async function fetch() {
    setIsLoading(true);
    const { data } = await api.get(`/people/${id}`);
    setData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetch();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>NO DATA</p>;
  }

  return (
    <Container className='mosaic-page-container'>
      <VoiceActorGrid data={data} />
    </Container>
  );
}
