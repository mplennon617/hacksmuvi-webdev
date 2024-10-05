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
    <></>
    // TODO: Design the card structure and styling using a prompt from the Prompt Cookbook.
  );
};

export default Card;