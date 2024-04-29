import Image from 'next/image';
import Link from 'next/link';
import { numberWithCommas } from '@/utils';
import clsx from 'clsx';

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/70 before:to-transparent`;

export const Skeleton = () => {
  return (
    <div className="rounded-2xl bg-white p-2">
      <div className={`h-[250px]  rounded-2xl bg-neutral-200 ${shimmer}`} />
      <div className="my-3 space-y-3 px-1">
        <div className="flex gap-2">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className={`h-[40px] w-[40px] rounded-full bg-neutral-200 ${shimmer}`}
              ></div>
            ))}
        </div>
        <div className={`h-4 w-1/2 rounded-lg bg-neutral-200 ${shimmer}`} />
        <div className="flex justify-between">
          <div className={`h-4 w-1/3 rounded-lg bg-neutral-200 ${shimmer}`} />
          <div className={`h-4 w-1/3 rounded-lg bg-neutral-200 ${shimmer}`} />
        </div>
      </div>
    </div>
  );
};

export const ProductItem = ({
  name,
  price,
  slug,
  imageURL,
  parentCollectionName,
}: any) => {
  const productLink = `/products/${slug}`;

  return (
    <div className="group rounded-lg bg-white p-2">
      <div className="relative overflow-hidden rounded-lg transition">
        <Link href={productLink} className="relative block">
          <Image
            key={imageURL}
            src={imageURL}
            alt={`${name} image`}
            className={clsx('duration-700 ')}
            width={350}
            height={350}
          />
        </Link>
      </div>
      <div className="mb-1 mt-2 space-y-2 px-1">
        <div>
          <h2 className="text-base font-medium">{name}</h2>
          <h3 className="text-xs font-normal capitalize text-neutral-400">
            {parentCollectionName}
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-black">
            ${numberWithCommas(price.toFixed(2))}
          </h3>
        </div>
      </div>
    </div>
  );
};
