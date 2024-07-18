import Image from "next/image";
import React from "react";

export default function ImageProfileMedium({
  url,
  alt,
}: {
  url: string;
  alt: string;
}) {
  return (
    <Image
      src={url}
      width={0}
      height={0}
      alt={alt}
      priority
      className="w-10 h-10 rounded-full object-cover"
    />
  );
}
