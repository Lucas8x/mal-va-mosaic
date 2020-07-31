import React, { useState, useEffect } from 'react';
import './styles.css';

import api from '../../services/mal';

export default function Mosaic({ match }) {
  const [data, setData] = useState({});
  const people_id = match.params.id;

  useEffect(() => {
    api.get(`/people/${people_id}`).then(response => {
      setData(response.data)
    })
  }, [people_id]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="container">
      {!data.length > 0 ? (
        <ul>
          <li key={data.name}>
            {data.pictures ? (
              <img src={data.pictures[0]} alt='' />
            ) : ('')}
          </li>
          {data.characters ? (
            data.characters.map(character => (
              character.pictures.length > 0 ? (
                <li key={character.name}>
                  <img src={character.pictures[0]} alt='' />
                </li>
              ) : ('')
            ))
          ) : ('')}
        </ul>
      ) : (
          <div className="empty">Empty</div>
        )
      }
    </div>
  )
}