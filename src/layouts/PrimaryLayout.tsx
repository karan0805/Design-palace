import React from 'react';
import { Footer, Header } from '@/components';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { NextSeo, type NextSeoProps } from 'next-seo';
import { Toaster } from 'react-hot-toast';

interface PrimaryLayoutProps extends React.PropsWithChildren {
  seo: NextSeoProps;
}

export const PrimaryLayout = ({ seo, children }: PrimaryLayoutProps) => {
  const { data } = useQuery(['fetching-all-collections'], () => {
    return axios.get('/api/collections').then((res) => res.data);
  });

  return (
    <>
      <NextSeo noindex={true} nofollow={true} {...seo} />
      <div className="min-h-screen">
        <Toaster />
        <Header collections={data} />
        {children}
      </div>
      <Footer />
    </>
  );
};
