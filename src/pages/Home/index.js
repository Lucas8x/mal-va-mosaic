import React, { useState } from 'react';
import './styles.css';

export default function Home({ history }) {
  const [url, setURL] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const id = url.split('/').find(item => Number.isInteger(parseInt(item)));
    if (id) {
      history.push(`/${id}`);
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter voice actor MAL url"
          value={url}
          onChange={e => setURL(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}
