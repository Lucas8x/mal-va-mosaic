import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import {
  Container,
  Wrapper,
  ErrorMessage,
  Input,
  EnterButton,
} from '../styles/home.styles';

//const re = new RegExp('[0-9][0-9]*');

export default function Home() {
  const [error, setError] = useState<string>('');
  const [url, setURL] = useState<string>('');
  const [id, setId] = useState<string>('');

  useEffect(() => {
    if (!url) {
      setError('');
      setId('');
      return;
    }

    const extractedID = url
      .split('/')
      .find((i) => Number.isInteger(parseInt(i)));

    if (!extractedID) {
      setError('ID not found.');
      return;
    }

    setError('');
    setId(extractedID);
  }, [url]);

  return (
    <Container>
      <Wrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Input
          placeholder='Enter MyAnimeList voice actor url'
          value={url}
          onChange={(e) => setURL(e.target.value)}
        />

        <Link href='/[id]' as={`/${id}`} prefetch={false}>
          <EnterButton disabled={!id}>Enter</EnterButton>
        </Link>
      </Wrapper>
    </Container>
  );
}
