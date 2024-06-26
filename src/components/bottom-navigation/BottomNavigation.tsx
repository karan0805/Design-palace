import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { NavLink } from '@/components';
import { Collections } from '@/types';
import { IconType } from 'react-icons';
import { FiGrid, FiHeart, FiHome, FiShoppingBag, FiUser } from 'react-icons/fi';
import { CollectionsPage } from './CollectionsPage';

interface Props {
  navLinks: NavLink[];
  collections: Collections;
}

interface BottomTab {
  title: string;
  url: string;
  Icon: IconType;
}

export const BottomNavigation = ({ navLinks, collections }: Props) => {
  const router = useRouter();

  const [currentTab, setCurrentTab] = useState('');

  const bottomTabs: BottomTab[] = [
    { title: 'Home', url: '/', Icon: FiHome },
    { title: 'Explore', url: '/#collections', Icon: FiGrid },
    { title: 'Cart', url: '/checkout', Icon: FiShoppingBag },
    { title: 'Wishlist', url: '/wishlist', Icon: FiHeart },
    { title: 'Profile', url: '/auth/signin', Icon: FiUser },
  ];

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-white drop-shadow-[0_-15px_20px_rgba(0,0,0,0.10)] md:hidden">
        <ul className="flex h-full">
          {bottomTabs.map((tab, index) => (
            <li key={index} className="flex-1">
              <Link
                href={tab.url}
                className={`flex h-full w-full flex-col items-center justify-center text-xs font-medium text-neutral-700 hover:text-violet-700 ${
                  router.pathname === tab.url && 'text-violet-700'
                }`}
                onClick={() => setCurrentTab(tab.url)}
              >
                <tab.Icon size={'1.2rem'} />
                <span className="mt-1">{tab.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {currentTab === '/#collections' && (
        <CollectionsPage
          navLinks={navLinks}
          collections={collections}
          onPageClose={() => setCurrentTab('')}
        />
      )}
    </>
  );
};
