import Image from "next/image";
import React from "react";

export default function ImageContentFill({
  url,
  alt,
}: {
  url: string;
  alt: string;
}) {
  return (
    <div className="my-5 w-full relative aspect-video">
      <Image
        src={url}
        fill
        alt={alt}
        priority
        className="object-cover cursor-pointer rounded-md"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
