import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const NewArrivals = () => {
  const { data, isLoading } = useQuery(['fetching-new-arrivals'], () => {
    return axios.get('/api/products').then((res) => res.data);
  });

  const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/70 before:to-transparent`;

  return (
    <div className="overflow-hidden bg-white">
      <div className="mx-auto flex flex-col items-center px-4 py-10  md:container">
        <span
          data-aos="fade-up"
          data-aos-delay="200"
          className="mb-4 text-sm font-bold uppercase text-violet-700"
        >
          New Designs
        </span>
        <h2
          data-aos="fade-up"
          data-aos-delay="300"
          className="mb-6 text-center text-3xl font-bold text-black md:text-4xl"
        >
          Shop New Arrivals{' '}
        </h2>
        <div className="z-0 -mt-[104px] flex w-full max-w-[1150px] flex-col space-x-0 space-y-10 pb-10 pt-32 md:-mt-[56px] md:pt-24 xl:flex-row xl:space-x-10 xl:space-y-0">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mx-auto">
            {isLoading &&
              Array(10)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className={`h-[214px] w-[214px] bg-neutral-200 ${shimmer}`}
                  ></div>
                ))}
            {data?.products?.slice(0, 10).map((product: any) => (
              <div key={product.id} className="group relative">
                <Link href={'/products/' + product.slug}>
                  <Image
                    src={product.imageURL}
                    alt={product.name}
                    height={250}
                    width={250}
                    className="transition duration-300 ease-in-out transform"
                  />
                  <div className="absolute px-2 text-center inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 ease-in-out">
                    <h3 className="hidden group-hover:block text-lg font-bold text-white">
                      {product.name}
                    </h3>
                    <p className="hidden group-hover:block text-md font-semibold text-white">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
