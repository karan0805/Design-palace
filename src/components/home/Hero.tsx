import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';

export const Hero = () => {
  return (
    <div className="overflow-hidden bg-gray-100">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col px-4 md:flex-row">
        <div className="flex flex-1 flex-col items-center justify-center pt-10 md:items-start md:px-4 md:pt-0">
          <span
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-2.5 rounded-md bg-violet-100 px-4 py-1 text-sm font-semibold text-violet-600 md:mb-5"
          >
            {'Save upto 50%'}
          </span>
          <h2
            data-aos="fade-right"
            data-aos-delay="200"
            className="mb-5 text-center text-[2.5rem] font-bold leading-tight text-black md:text-left md:text-5xl"
          >
            {'Your dream designs, just a click away.'}
          </h2>
          <h3
            data-aos="fade-right"
            data-aos-delay="300"
            className="font-regular mb-5 text-center text-lg leading-tight text-neutral-700 md:mb-10 md:text-left"
          >
            {`Buying design just got easier, so you can focus on what matters. Don't waste time thinking and start browsing.`}
          </h3>
          <Link
            href={'/products'}
            data-aos="fade-up"
            data-aos-delay="400"
            className="mb-10 flex items-center rounded bg-zinc-900 px-8 py-2.5 text-base font-normal text-white shadow-sm shadow-zinc-500"
          >
            <FiShoppingCart />
            <span className="ml-2">{'Start Shopping'}</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Image
            priority
            src="/assets/hero2.jpg"
            alt="hero"
            quality={100}
            width={750}
            height={550}
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
};
