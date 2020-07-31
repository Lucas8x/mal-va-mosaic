import React, { useState, useEffect } from 'react';
import './styles.css';

import api from '../../services/mal';

export default function Mosaic({ match }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const people_id = match.params.id;

  useEffect(() => {
    async function fetch() {
      api.get(`/people/${people_id}`).then(response => {
        setData(response.data);
        setLoading(false);
      })
    }
    fetch();
  }, [people_id]);

  return (
    <div className="container">
      {!loading ? (
        data ? (
          <ul>
            <li key={data.name}>
              <img src={data.default} alt='' />
            </li>
            {data.characters ? (
              data.characters.map(character => (
                character.name && character.pictures ? (
                  <li key={character.name}>
                    <img src={character.default} alt='' />
                  </li>
                ) : null
              ))
            ) : ('NO CHARACTERS')}
          </ul>
        ) : ('NO DATA')
      ) : ('Loading...')}
    </div>
  )
}