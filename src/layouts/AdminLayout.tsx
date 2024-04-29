import Link from 'next/link';
import React from 'react';
import { AdminHeader } from '@/components';
import { NextSeo, type NextSeoProps } from 'next-seo';
import { Toaster } from 'react-hot-toast';

interface AdminLayoutProps extends React.PropsWithChildren {
  seo: NextSeoProps;
}

export const AdminLayout = ({ seo, children }: AdminLayoutProps) => {
  return (
    <>
      <NextSeo noindex={true} nofollow={true} {...seo} />
      <Toaster />
      <div className="min-h-screen flex flex-col">
        <AdminHeader />
        <div className="flex">
          <aside className="w-100 flex-none text-black p-4">
            <ul className="space-y-2">
              <li>
                <Link href="/admin">
                  <div className="block px-2 py-1 hover:bg-gray-700 rounded">
                    Dashboard
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/admin/settings">
                  <div className="block px-2 py-1 hover:bg-gray-700 rounded">
                    Settings
                  </div>
                </Link>
              </li>
            </ul>
          </aside>
          <div className="flex-1 p-4 bg-white">{children}</div>
        </div>
      </div>
    </>
  );
};
