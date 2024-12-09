'use client'

import React from "react";
import Image from "next/image";
import ButtonDefault from "../../button/button_default";
import TextExtraLargeMedium from "../../text/text_extra_large_medium";
import TextSmall from "../../text/text_small";

export default function ProfileCardWidget({
  coverImage,
  coverAlt,
  profileImage,
  profileAlt,
  name,
  followerCount,
  buttonTitle,
}: {
  coverImage: string;
  coverAlt: string;
  profileImage: string;
  profileAlt: string;
  name: string;
  followerCount: string;
  buttonTitle: string;
}) {
  return (
    <div className="p-4 bg-white flex flex-col rounded-lg shadow-md">
      <div className="relative w-full" style={{ aspectRatio: 1 / 0.3 }}>
        <Image
          src={coverImage}
          fill
          alt={coverAlt}
          priority
          className="rounded-t-lg object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Image
          src={profileImage}
          width={200}
          height={200}
          alt={profileAlt}
          priority
          className="absolute w-1/5 rounded-full object-cover mx-auto left-0 right-0 ring-2 ring-white z-20 -bottom-1/3"
          style={{ aspectRatio: 1 / 1 }}
        />
      </div>
      <div className="w-full" style={{ aspectRatio: 1 / 0.11 }}></div>
      <div className="flex items-center flex-col gap-2">
        <TextExtraLargeMedium text={name} />
        <div className="flex items-center">
          <div className="flex items-center gap-1">
            <Image
              src={profileImage}
              width={12}
              height={12}
              alt={profileAlt}
              priority
              className="w-3 h-3 rounded-full object-cover"
            />
            <Image
              src={profileImage}
              width={12}
              height={12}
              alt={profileAlt}
              priority
              className="w-3 h-3 rounded-full object-cover"
            />
            <Image
              src={profileImage}
              width={12}
              height={12}
              alt={profileAlt}
              priority
              className="w-3 h-3 rounded-full object-cover"
            />
          </div>
          <TextSmall text={`${followerCount} Followers`} />
        </div>
        <ButtonDefault text={buttonTitle} onClick={() => {}} />
      </div>
    </div>
  );
}
