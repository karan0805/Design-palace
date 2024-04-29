import type { ReactElement } from 'react';
import { Hero } from '@/components';
import { PrimaryLayout } from '@/layouts';
import { Bottom } from '@/components/home/Bottom';
import { NewArrivals } from '@/components/home/NewArrivals';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <NewArrivals />
      <Bottom />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout seo={{ title: 'Home', canonical: '/' }}>
      {page}
    </PrimaryLayout>
  );
};

export default Home;
