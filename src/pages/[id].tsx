import { GetStaticPaths, GetStaticProps } from 'next';
import { api } from '../services/api';
import { VoiceActorGrid } from '../components/VoiceActorGrid';
import { Container } from '../styles/mosaic.styles';

interface PeopleData {
  id: string;
  name: string;
  default: string;
  pictures: Array<string>;
  characters: Array<{
    name: string;
    default: string;
    pictures: Array<string>;
    favorites: number;
  }>;
}

interface Props {
  data: PeopleData;
}

export default function Mosaic({ data }: Props) {
  return (
    <Container>
      <VoiceActorGrid data={data} />
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string };
  const { data } = await api.get(`/people/${id}`);

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 24,
  };
};
