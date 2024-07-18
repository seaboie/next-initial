import Image from "next/image";
import React from "react";

export default function ImageIconSmall({ url, alt }: { url: string, alt: string }) {
  return (
    <Image
      src={url}
      width={0}
      height={0}
      alt={alt}
      priority
      className="w-4 h-4 object-cover cursor-pointer"
    />
  );
}
