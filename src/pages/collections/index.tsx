import Link from 'next/link';
import type { ReactElement } from 'react';
import { PrimaryLayout } from '@/layouts';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { NextPageWithLayout } from './../_app';

const Collections: NextPageWithLayout = () => {
  const { data } = useQuery(['fetching-all-collections'], () => {
    return axios.get('/api/collections').then((res) => res.data);
  });

  return (
    <div className="my-20 flex flex-col items-center justify-center px-4">
      <h2 className="mb-6 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        Explore Our Collections
      </h2>
      {data?.map((collection: any) => (
        <Link href={`/collections/${collection.slug}`} key={collection.slug}>
          <div className="block mx-auto mb-5 w-[400px] h-[150px] md:w-[1200px]">
            <span
              className="block h-full w-full rounded-lg bg-cover bg-center text-center shadow-md transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundImage: `url('/assets/collections-banner.jpg')`,
              }}
            >
              <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-10  rounded-lg">
                <p className="text-5xl font-bold text-white">
                  {collection.name}
                </p>
              </div>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

Collections.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Collections',
      }}
    >
      {page}
    </PrimaryLayout>
  );
};

export default Collections;
