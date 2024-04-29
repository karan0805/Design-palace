import Link from 'next/link';
import type { ReactElement } from 'react';
import { PrimaryLayout } from '@/layouts';
import { useSession } from 'next-auth/react';
import type { NextPageWithLayout } from './_app';

const Checkout: NextPageWithLayout = () => {
  const { status } = useSession();
  console.log(status);

  if (status == 'authenticated') {
    return (
      <div className="mt-20 flex justify-center px-4">
        {status == 'authenticated' && (
          <div className="mx-auto text-center max-w-screen-lg px-8">
            <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
            <p>
              Your shopping cart is currently empty. Start adding products now!
            </p>
            <p>
              Visit our{' '}
              <Link href="/collections">
                <span className="text-blue-500 hover:text-blue-700">
                  collections page
                </span>
              </Link>{' '}
              to discover amazing products.
            </p>{' '}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="mt-20 flex justify-center px-4">
        <div className="mx-auto  max-w-screen-lg px-8">
          <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
          <p>
            You need to be <Link href="/sign-in">signed in</Link> to view and
            manage your shopping cart
          </p>
        </div>
      </div>
    );
  }
};

Checkout.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Checkout',
      }}
    >
      {page}
    </PrimaryLayout>
  );
};

export default Checkout;
