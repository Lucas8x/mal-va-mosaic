import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { api } from '../services/api';
import { VoiceActorGrid } from '../components/VoiceActorGrid';
import { PeopleData } from '../interfaces';

import { MosaicContainer } from '../styles/mosaic.styles';

interface Props {
  data: PeopleData;
}

export default function Mosaic({ data }: Props) {
  return (
    <>
      <Head>
        <title>{data?.name.replace(',', '')} | MAL Mosaic</title>
      </Head>

      <MosaicContainer>
        <VoiceActorGrid data={data} />
      </MosaicContainer>
    </>
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
  const { data, status } = await api.get(`/people/${id}`);

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 24,
  };
};
