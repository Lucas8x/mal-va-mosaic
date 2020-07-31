import React, { useState } from 'react';
import './styles.css';

export default function Home({ history }) {
  const [url, setURL] = useState('');

  async function excractID(url) {
    let id;
    const arr = url.split('/');
    arr.map(item => {
      if (Number.isInteger(parseInt(item)))
        id = item;
      return false;
    })
    return id;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const id = await excractID(url);
    history.push(`/mosaic/${id}`);
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
