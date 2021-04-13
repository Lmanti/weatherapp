import React from 'react';
import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div>
      {cities.map(c => <Card
        id={c.id}
        min={c.min}
        max={c.max}
        name={c.name}
        img={c.img}
        onClose={() => onClose(c.id)}
        key={c.id}
      />)}
    </div>
  );
}
