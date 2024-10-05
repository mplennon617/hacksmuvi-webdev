// Card.tsx
import { CardType } from '@/types/CardType';
import React from 'react';

// We specify that the Card's props are of type CardType.
// If we look at app/types/CardTypes.ts, we see that card must contain 3 strings:
// title, body, and author.
type CardProps = {
  card: CardType
};

// A standable Card component. The card takes a title, body, and author as props.
// Note the Tailwind.css styling! Feel free to play around with the styling options.
// Helpful playground for Tailwind.css: https://play.tailwindcss.com/
const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white px-12 py-6 m-3 lg:w-1/3">
      <div className="font-bold text-xl text-gray-900">{card.title}</div>
      <p className="text-gray-600 text-sm italic mb-4">by {card.author}</p>
      <p className="text-gray-700 text-base">{card.body}</p>
    </div>
  );
};

export default Card;