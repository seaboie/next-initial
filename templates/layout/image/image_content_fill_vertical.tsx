import Image from "next/image";
import React from "react";

export default function ImageContentFillVertical({
  url,
  alt,
}: {
  url: string;
  alt: string;
}) {
  return (
    <div className="relative w-1/5" style={{ aspectRatio: 1 / 1.4 }}>
      <Image
        src={url}
        fill
        alt={alt}
        priority
        className="object-cover rounded-md"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
