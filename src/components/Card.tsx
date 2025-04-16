import { formatDate, shortDesc } from '@/app/_lib/actions';
import { urlFor } from '@/sanity/lib/image';
import { STARTUPS_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEye, FaUserGraduate } from 'react-icons/fa';

const Card = (props: NonNullable<STARTUPS_QUERYResult>[number]) => {
  const {
    title,
    slug,
    author,
    views,
    description,
    pitch,
    _createdAt,
    category,
    image,
  } = props;
  return (
    <div className="border-2 border-r-8 border-b-8 rounded-4xl shadow-amber-700 flex flex-col gap-2 p-5 hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
      <div className="flex justify-between items-center">
        <p className="p-2 bg-brand-red/30 text-sm rounded-lg">
          {formatDate(_createdAt)}
        </p>
        <p className="flex items-center gap-2">
          <FaEye className="text-brand-red" />
          {views}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="capitalize">{author?.name}</p>
          <p className="font-bold text-lg capitalize">{title}</p>
        </div>
        <FaUserGraduate className="size-10" />
      </div>

      {description && (
        <p className="text-pretty text-justify">{shortDesc(description)}</p>
      )}

      <div>
        {image?.asset?.url && (
          <Image
            src={urlFor(image.asset.url)
              .width(200)
              .height(200)
              .auto('format')
              .url()}
            width={200}
            height={200}
            priority
            alt=""
            className="min-w-full object-cover mx-auto rounded-2xl"
          />
        )}
      </div>

      <div className="flex justify-between items-center">
        <p className="font-bold capitalize">{author?.name}</p>
        <Link
          href={`/`}
          className="p-3 bg-brand-black text-brand-white rounded-2xl"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
