import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Form, ErrorMessage, Input, EnterButton } from './styles';

export function Home() {
  const history = useHistory();
  const [error, setError] = useState('');
  const [url, setURL] = useState('');
  const [id, setId] = useState('');

  function extractID() {
    if (!url) {
      setError('');
      return;
    }

    const extractedID = url
      .split('/')
      .find((item) => Number.isInteger(parseInt(item)));

    if (!extractedID) {
      return setError('ID not found.');
    }

    setError('');
    setId(extractedID);
  }

  function handleSubmit() {
    history.push(id);
  }

  useEffect(() => {
    extractID();
  }, [url]);

  return (
    <Container className='container'>
      <Form onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          placeholder='Enter MyAnimeList voice actor url'
          value={url}
          onChange={(e) => setURL(e.target.value)}
        />
        <EnterButton type='submit'>Enter</EnterButton>
      </Form>
    </Container>
  );
}
