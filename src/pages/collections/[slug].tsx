import { useRouter } from 'next/router';
import { ReactElement, useCallback, useEffect, useMemo } from 'react';
import { ProductsList } from '@/components';
import { PrimaryLayout } from '@/layouts';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Pagination } from '@/components/ui';
import { type NextPageWithLayout, queryClient } from './../_app';

const Collections: NextPageWithLayout = () => {
  const router = useRouter();
  const { slug, page = 1 } = router.query as {
    slug: string | undefined;
    page: number | undefined;
  };

  const queryInput = useMemo(
    () => ({
      slug,
      page: page,
    }),
    [page, slug],
  );

  const getData = useCallback(
    async (queryInput1) => {
      const { data } = await axios.post(
        '/api/collections/' + slug,
        queryInput1,
      );
      return data;
    },
    [slug],
  );

  const { data, isLoading, isPreviousData } = useQuery(
    ['fetching-all-products-for-collections', queryInput],
    () => getData(queryInput),
  );

  const pageSize = 12;

  useEffect(() => {
    if (data) {
      const totalPageCount = Math.ceil(data?.totalCount / pageSize);
      if (!isPreviousData && totalPageCount > Number(page)) {
        queryClient.prefetchQuery(
          [
            'fetching-all-products-for-collections',
            { ...queryInput, page: Number(page) + 1 },
          ],
          () => getData({ ...queryInput, page: Number(page) + 1 }),
        );
      }
    }
  }, [data, page, isPreviousData, queryInput, getData]);

  return (
    <div className="mx-auto items-center p-4 xl:container">
      <div className="flex gap-5">
        <div className="flex-[5]">
          <div className="block mx-auto mb-5 w-full h-[150px]">
            <span
              className="block h-full w-full rounded-lg bg-cover bg-center text-center shadow-md transition-all duration-300 hover:shadow-lg"
              style={{ backgroundImage: `url('/assets/banner.webp')` }}
            >
              <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-40  rounded-lg">
                <p className="text-5xl font-bold text-white">
                  {data?.currentCollection?.name}
                </p>
              </div>
            </span>
          </div>
          <ProductsList products={data?.products} isLoading={isLoading} />
          {data?.totalCount === 0 && (
            <p className="text-center text-2xl">
              No designs available in this collection yet. Please check back
              later!
            </p>
          )}
          <div className="flex justify-center py-5">
            <Pagination
              totalCount={data?.totalCount}
              currentPage={Number(page)}
              pageSize={pageSize}
              onPageChange={(page) =>
                router.push({ query: { ...router.query, page } }, undefined, {
                  shallow: true,
                  scroll: true,
                })
              }
            />
          </div>
        </div>
      </div>
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
