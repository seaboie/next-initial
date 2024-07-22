import Image from "next/image";
import Link from "next/link";
import React from "react";
import TextLargeMedium from "../text/text_large_medium";
import TextSmall from "../text/text_small";
import TextSmallBold from "../text/text_small_bold";

interface ListImageCaptionTitleDescriptionProps {
  imageUrl: string;
  imageAlt: string;
  caption: string;
  title: string;
  description: string;
}

export default function ListImageCaptionTitleDescription({
  imageUrl,
  imageAlt,
  caption,
  title,
  description,
}: ListImageCaptionTitleDescriptionProps) {
  return (
    <div className="max-w-md md:max-w-2xl bg-slate-200 rounded-xl shadow-lg overflow-hidden  mx-auto">
      <div className="md:flex">
        <div className="md:shrink-0">
          <Image
            className="h-48 w-full object-cover md:h-52 md:w-48"
            width={200}
            height={200}
            src={imageUrl}
            alt={imageAlt}
            priority
          />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <div className="uppercase tracking-wider">
            <TextSmallBold text={caption} className={`text-blue`} />
          </div>
          <Link href={``} className=" hover:underline">
            <TextLargeMedium text={title} />
          </Link>
          <div className="mt-2 line-clamp-3">
            <TextSmall text={description} />
          </div>
        </div>
      </div>
    </div>
  );
}
