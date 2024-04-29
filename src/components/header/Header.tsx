import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BottomNavigation } from '@/components';
import { Transition } from '@headlessui/react';
import { signOut, useSession } from 'next-auth/react';
import { IconType } from 'react-icons';
import { FiHeart, FiLogOut, FiShoppingBag, FiUser } from 'react-icons/fi';
import { MegaMenu } from './MegaMenu';
import { Search } from './Search';
import { TopBar } from './TopBar';

// import AnnouncementBar from './AnnouncementBar';

export interface NavLink {
  name: 'Explore' | 'Collections' | 'Bulk Buying' | 'Sell your Design';
  href: string;
  collapsible?: boolean;
}

export const navLinks: NavLink[] = [
  { name: 'Explore', href: '/collections', collapsible: true },
  { name: 'Bulk Buying', href: '/bulk-buying' },
  { name: 'Sell your Design', href: '/sell-your-design' },
];

export const mobilenavLinks: NavLink[] = [
  { name: 'Collections', href: '/collections', collapsible: true },
  { name: 'Bulk Buying', href: '/bulk-buying' },
  { name: 'Sell your Design', href: '/sell-your-design' },
];

export const sideNavLinks: [string, IconType][] = [
  ['/wishlist', FiHeart],
  ['/checkout', FiShoppingBag],
  ['/auth/signin', FiUser],
];

export const Header = ({ collections }: any) => {
  const { data: session } = useSession();

  const [hoveredNavLink, setHoveredNavLink] = useState<NavLink | null>();

  const handleShowMenu = (navLink: NavLink) => setHoveredNavLink(navLink);
  const handleCloseMenu = () => setHoveredNavLink(null);

  return (
    <header>
      {/* <AnnouncementBar/> */}
      <TopBar />
      <div className="relative h-14 bg-white shadow-md shadow-gray-200">
        <div className="mx-auto flex h-full items-center px-4 xl:container">
          <div className="mr-5 flex shrink-0 items-center">
            <Link href="/">
              <Image
                priority
                src="/logo.svg"
                alt="logo"
                width={200}
                height={35}
                quality={100}
              />
            </Link>
          </div>
          <ul className="ml-auto hidden h-full md:flex">
            {navLinks.map((item, index) => (
              <li
                className={`font-medium text-neutral-700 transition-colors ${
                  hoveredNavLink === item && 'bg-violet-100 text-violet-700'
                }`}
                key={index}
                onMouseEnter={() => handleShowMenu(item)}
                onMouseLeave={handleCloseMenu}
              >
                <Link
                  href={item.href}
                  className="flex h-full items-center px-5"
                  onClick={handleCloseMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="ml-auto items-center md:flex">
            <Search onSearch={(value) => console.log(value)} />
            {/* <Link href={'/wishlist'} className="ml-5 hidden md:block">
              <FiHeart
                className="text-neutral-700 transition-colors hover:text-violet-700"
                size="20px"
              />
            </Link> */}
            <Link href={'/checkout'} className="ml-5 hidden md:block">
              <FiShoppingBag
                className="text-neutral-700 transition-colors hover:text-violet-700"
                size="20px"
              />
            </Link>
            {!session && (
              <Link href={'/auth/signin'} className="ml-5 hidden md:block">
                <FiUser
                  className="text-neutral-700 transition-colors hover:text-violet-700"
                  size="20px"
                />
              </Link>
            )}

            {session && (
              <>
                <Link href={'/account'} className="ml-5 hidden md:block">
                  <FiUser
                    className="text-neutral-700 transition-colors hover:text-violet-700"
                    size="20px"
                  />
                </Link>
                <FiLogOut
                  className="ml-5 hidden text-neutral-700 transition-colors hover:text-violet-700 md:block"
                  size="20px"
                  onClick={() => signOut({ callbackUrl: '/' })}
                />
              </>
            )}
          </ul>
        </div>
        <Transition show={Boolean(hoveredNavLink?.collapsible)}>
          {hoveredNavLink && (
            <MegaMenu
              collections={collections}
              onShowMenu={() => handleShowMenu(hoveredNavLink)}
              onCloseMenu={handleCloseMenu}
            />
          )}
        </Transition>
      </div>
      <BottomNavigation navLinks={mobilenavLinks} collections={collections} />
    </header>
  );
};
