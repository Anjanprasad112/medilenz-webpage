"use client";

import { usePathname } from 'next/navigation';
import CardData from './cards.json';

const Page = () => {
    const pathname = usePathname();
    const arr = pathname.split('/');
    const blogId = arr[2];
    const selectedCard = CardData.find((card) => card.id === Number(blogId));
  return (
    <>
        {selectedCard && (
            <>
            <p>{selectedCard.title}</p>
            <p>{selectedCard.text}</p>
            </>
        )}

    </>
  )
}

export default Page