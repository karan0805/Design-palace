import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { PrimaryLayout } from '@/layouts';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ProductImages from '@/components/product-preview/ProductImages';
import type { NextPageWithLayout } from './../_app';

const Products: NextPageWithLayout = () => {
  const router = useRouter();
  const { slug } = router.query as {
    slug: number | string | undefined;
  };

  const getData = async () => {
    const { data } = await axios.get('/api/products/' + slug);
    return data.productdetail;
  };

  const { data, isLoading } = useQuery(['fetching-product-page', slug], () =>
    getData(),
  );

  return (
    <div className="relative mx-auto flex min-h-screen flex-col px-10 lg:px-14">
      <div className="mx-auto flex flex-col items-center justify-start gap-y-24 pb-16 pt-20 lg:flex-row lg:items-center lg:justify-evenly lg:gap-x-10">
        {!isLoading && <ProductImages image={data?.imageURL} />}
        <div className="space-y-12 self-start px-4 lg:self-center lg:pr-12">
          <div className="">
            <h1 className="text-[24px] font-semibold tracking-wide">
              {data?.name}
            </h1>
            <h2 className="text-[16px] capitalize text-gray-700">
              <Link
                href={`/collections/${data?.parentCollectionSlug}`}
                passHref
                className="hover:underline"
              >
                {data?.parentCollectionName}
              </Link>
              {' / '}
              <Link
                href={`/collections/${data?.collection?.slug}`}
                passHref
                className="hover:underline"
              >
                {data?.collection?.name}
              </Link>
            </h2>
          </div>

          <div className="">
            <h1 className="text-h3 font-normal tracking-wide">{'License:'}</h1>
            <h2 className="text-lead font-bold capitalize text-gray-400">
              {'Commercial'}
            </h2>
          </div>

          <div className="">
            <h1 className="text-h3 font-normal tracking-wide">{'Price:'}</h1>
            <h2 className="text-lead font-bold capitalize text-gray-400">
              $ {data?.price}
            </h2>
          </div>

          <div className="">
            <h1 className="text-h3 font-normal tracking-wide">
              {'Included Files:'}
            </h1>
            <h2 className="text-lead font-bold capitalize text-gray-400">
              {data?.deliveryFormat}{' '}
            </h2>
          </div>
          <div className="">
            <h1 className="text-h3 font-normal tracking-wide">
              {'File Size:'}
            </h1>
            <h2 className="text-lead font-bold capitalize text-gray-400">
              {'3780 x 3780 px / 33 x 33 cm'}
            </h2>
          </div>
          <div className="">
            <h1 className="text-h3 font-normal tracking-wide">
              {'Repeatable:'}
            </h1>
            <h2 className="text-lead font-bold capitalize text-gray-400">
              {'In Repeat + Seamless Tile'}
            </h2>
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto flex max-w-screen-xl flex-col items-start justify-start bg-slate-50  p-8 pb-32">
        <div className="relative w-full  border-b-2 border-b-gray-700 py-12">
          <h1 className="text-h1 absolute top-9 z-[-1]  text-5xl tracking-wider  text-gray-200/40 sm:top-4 sm:text-8xl ">
            Overview
          </h1>
          <h2 className="text-h4 tracking-wide">Product Information</h2>
        </div>
        <div className="flex flex-col items-start justify-start gap-y-12 py-8">
          <div className="flex flex-col md:flex-row justify-between gap-x-12">
            <h2 className="text-lead flex-none text-base font-bold capitalize text-gray-400">
              PRODUCT DETAILS
            </h2>
            <p className="text-base  font-normal text-gray-600">
              Each design is crafted to inspire creativity and elevate your
              projects. Our designs are perfect for digital printing, fabric
              creation, and diverse applications in home decor and fashion
              industries. Gain exclusive access to our high-resolution files,
              ready for both personal and commercial use.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-start gap-x-20">
            <h2 className="text-lead flex-none text-base font-bold capitalize text-gray-400">
              USAGE RIGHTS
            </h2>
            <p className="text-base font-normal text-gray-600">
              With the purchase of this design, you receive both personal and
              commercial usage rights, allowing you to utilize the design across
              various mediums and products without any additional fees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Products.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Product Page',
      }}
    >
      {page}
    </PrimaryLayout>
  );
};

export default Products;
