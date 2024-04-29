'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProductImages({ image }: any) {
  const [showcaseImage] = useState(image ? image : '');
  return (
    <div className="flex items-center justify-start gap-x-4">
      <Image
        className="aspect-square flex-auto transition ease-in-out"
        src={showcaseImage}
        width={600}
        height={600}
        alt="temp alt"
      />
    </div>
  );
}
