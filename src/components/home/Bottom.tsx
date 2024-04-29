import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Bottom = () => {
  return (
    <div className="mx-auto flex flex-col items-center px-4 py-10 md:container">
      <span
        data-aos="fade-up"
        data-aos-delay="200"
        className="mb-4 text-sm font-bold uppercase text-violet-700"
      >
        Features{' '}
      </span>
      <h2
        data-aos="fade-up"
        data-aos-delay="300"
        className="mb-6 text-center text-3xl font-bold text-black md:text-4xl"
      >
        Why Choose Us ?
      </h2>
      <div className="z-0 -mt-[104px] flex w-full max-w-[1150px] flex-col space-x-0 space-y-10 pb-10 pt-32 md:-mt-[56px] md:pt-24 xl:flex-row xl:space-x-10 xl:space-y-0">
        <div className="relative flex basis-1/2 flex-col items-center justify-center space-y-8 text-[#212121]">
          <div className=" flex basis-1/2 flex-col justify-between space-y-8 sm:flex-row sm:space-x-14 sm:space-y-0">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="flex basis-1/2 flex-col items-start justify-center"
            >
              <p className="text-lg font-semibold leading-4">
                Unique & Beautiful Designs
              </p>
              <p className="mt-3 text-base font-light">
                All the designs are unique, copyrighted and owned by us.
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="flex basis-1/2 flex-col items-start justify-center"
            >
              <p className="text-lg font-semibold leading-4">
                Buy Custom Designs
              </p>
              <p className="mt-3 text-base font-light">
                Request for custom version of your chosen design.
              </p>
            </div>
          </div>
          <div className="flex basis-1/2 flex-col justify-between space-y-8 sm:flex-row sm:space-x-14 sm:space-y-0">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="flex basis-1/2 flex-col items-start justify-center"
            >
              <p className="text-lg font-semibold leading-4">
                Modern Trending Designs
              </p>
              <p className="mt-3 text-base font-light ">
                Our collections are up to date with modern trends.
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="flex basis-1/2 flex-col items-start justify-center "
            >
              <p className="text-lg font-semibold leading-4">
                Discount for Bulk Orders
              </p>
              <p className="mt-3 text-base font-light">
                Provide discounts for bulk orders containing 50+ designs.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 -z-40 flex items-center justify-center">
            <div className="text-[75px] font-bold text-gray-200 sm:text-[75px] sm:font-bold md:text-[90px] md:font-bold">
              Different from others
            </div>
          </div>
        </div>
        <div className="flex basis-full flex-col items-center space-x-3 space-y-10 sm:flex-row sm:space-y-0 xl:basis-1/2 xl:items-stretch xl:space-x-8">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="flex basis-2/5 xl:basis-3/5"
          >
            <Image
              src="/assets/hero.jpg"
              alt="feature bg-blue-100"
              width={300}
              height={350}
              style={{ width: 300, height: 350 }}
              priority
            ></Image>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="flex basis-3/5 flex-col justify-between space-y-10 xl:basis-2/5"
          >
            <p className="text-justify text-base font-light text-[#212121]">
              Discover stunning textile designs on our platform curated by
              talented artists. Embrace uniqueness and quality with our diverse
              collection, making your creations stand out. Elevate your projects
              effortlessly. Shop now and be inspired!
            </p>
            <Link href={'/'} className="z-40 ">
              <button className="w-fit cursor-pointer whitespace-nowrap bg-[#212121] px-5 py-2 text-white sm:w-2/3 sm:whitespace-normal">
                Browse here
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
