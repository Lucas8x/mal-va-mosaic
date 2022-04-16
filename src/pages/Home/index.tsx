import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Wrapper, ErrorMessage, Input, EnterButton } from './styles';

export function Home() {
  const history = useHistory();
  const [error, setError] = useState<string>('');
  const [url, setURL] = useState<string>('');
  const [id, setId] = useState<string>('');

  function handleSubmit() {
    if (!id) return;
    history.push(id);
  }

  useEffect(() => {
    function extractID() {
      if (!url) return setError('');

      const extractedID = url
        .split('/')
        .find((item) => Number.isInteger(parseInt(item)));

      if (!extractedID) return setError('ID not found.');

      setError('');
      setId(extractedID);
    }

    extractID();
  }, [url]);

  return (
    <Container className='container'>
      <Wrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          placeholder='Enter MyAnimeList voice actor url'
          value={url}
          onChange={(e) => setURL(e.target.value)}
        />
        <EnterButton onClick={handleSubmit}>Enter</EnterButton>
      </Wrapper>
    </Container>
  );
}
