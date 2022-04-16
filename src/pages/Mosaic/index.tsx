import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();
  const { id } = match.params;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<DataProps>();

  const idIsNumber = !isNaN(id as any);

  useEffect(() => {
    if (!idIsNumber) return history.push('/');
  }, [id, history, idIsNumber]);

  useEffect(() => {
    if (!idIsNumber) return;

    async function fetchVoiceActorData() {
      setIsLoading(true);
      const { data } = await api.get(`/people/${id}`);
      setData(data);
      setIsLoading(false);
    }

    fetchVoiceActorData();
  }, [id, idIsNumber]);

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
