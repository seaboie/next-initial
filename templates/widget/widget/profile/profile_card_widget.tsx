import React from "react";
import Image from "next/image";
import LayoutCard from "../../layout/layout_card";
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
    <LayoutCard>
      <div className="relative w-full" style={{ aspectRatio: 1 / 0.9 }}>
        <div className="relative h-1/2 w-full">
          <div className="relative w-full h-3/4">
            <Image
              src={coverImage}
              fill
              alt={coverAlt}
              priority
              className="rounded-t-lg object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="w-full h-1/4"></div>
          <Image
            src={profileImage}
            width={200}
            height={200}
            alt={profileAlt}
            priority
            className="absolute  w-1/4  rounded-full object-cover m-auto left-0 right-0 ring-2 ring-white z-20 -bottom-1"
            style={{ aspectRatio: 1 / 1 }}
          />
        </div>
        <div className="h-1/2 flex items-center flex-col justify-evenly ">
          <TextExtraLargeMedium text={name} />
          <div className="flex items-center gap-4">
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
          <ButtonDefault text={buttonTitle} />
        </div>
      </div>
    </LayoutCard>
  );
}