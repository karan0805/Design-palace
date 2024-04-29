import Link from 'next/link';
import type { ReactElement } from 'react';
import { PrimaryLayout } from '@/layouts';
import type { NextPageWithLayout } from './_app';

const Bulkbuying: NextPageWithLayout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300 px-6 py-10 sm:px-10">
      <div className="w-full max-w-md rounded-lg bg-white p-10 shadow-xl">
        <h1 className="mb-6 text-center text-4xl font-bold text-gray-800">
          Bulk Buying
        </h1>
        <p className="mb-8 text-center text-lg text-gray-600">
          Welcome to our B2B platform! Register to access a wide range of
          textile designs for bulk ordering.
        </p>
        <ul className="mb-6 text-gray-700">
          <li className="mb-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Access exclusive textile designs from top designers.
          </li>
          <li className="mb-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Get attractive bulk discounts on design purchases.
          </li>
          <li className="mb-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Fast and secure checkout process for bulk orders.
          </li>
          <li className="mb-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Dedicated customer support for B2B clients.
          </li>
        </ul>
        <p className="mb-8 text-center text-lg text-gray-600">
          Register now to explore our extensive collection and place your bulk
          orders today!
        </p>
        <Link href="/contact-us">
          <span className="block w-full rounded-md bg-violet-600 py-3 text-center text-lg font-semibold text-white hover:bg-violet-700">
            Register for Bulk Buying
          </span>
        </Link>
      </div>
    </div>
  );
};

Bulkbuying.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Bulk Buy',
      }}
    >
      {page}
    </PrimaryLayout>
  );
};

export default Bulkbuying;
