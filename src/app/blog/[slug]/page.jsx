"use client";

import { usePathname } from 'next/navigation';
import CardData from './cards.json';

export default function Page() {
  const pathname = usePathname();
  const arr = pathname.split('/');
  const blogId = arr[2];
  const selectedCard = CardData.find((card) => card.id === Number(blogId));

  return (
    <>
      {selectedCard && (
        <>
          <h1>{selectedCard.title}</h1>
          <p>{selectedCard.text}</p>
        </>
      )}
    </>
  );
}
