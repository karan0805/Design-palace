import Link from 'next/link';
import type { ReactElement } from 'react';
import { PrimaryLayout } from '@/layouts';
import type { NextPageWithLayout } from './_app';

const Sellyourdesign: NextPageWithLayout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300 px-6 py-10 sm:px-10">
      <div className="w-full max-w-md rounded-lg bg-white p-10 shadow-xl">
        <h1 className="mb-6 text-center text-4xl font-bold text-gray-800">
          Sell Your Design
        </h1>
        <p className="mb-8 text-center text-lg text-gray-600">
          Are you a talented designer looking to showcase and monetize your
          creativity? Look no further! Our platform offers numerous benefits for
          freelancers like you.
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
            Showcase your talent to thousands of potential clients worldwide.
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
            Earn passive income by selling your digital designs on our platform.
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
            Gain exposure and build your portfolio with high-profile clients.
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
            Collaborate with other talented designers and expand your network.
          </li>
        </ul>
        <p className="mb-8 text-center text-lg text-gray-600">
          Join our community of creative minds and start monetizing your designs
          today!
        </p>
        <Link href="/contact-us">
          <span className="block w-full rounded-md bg-violet-600 py-3 text-center text-lg font-semibold text-white hover:bg-violet-700">
            List Your Design Now
          </span>
        </Link>
      </div>
    </div>
  );
};

Sellyourdesign.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Sell your Design',
      }}
    >
      {page}
    </PrimaryLayout>
  );
};

export default Sellyourdesign;
