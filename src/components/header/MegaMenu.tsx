import Link from 'next/link';
import { Collections } from '@/types';

interface Props {
  collections: Collections;
  onShowMenu: () => void;
  onCloseMenu: () => void;
}

const newItems = [
  { label: 'New Arrivals', href: '/' },
  { label: 'Best Selling', href: '/' },
  { label: 'Premium Collections', href: '/' },
  { label: 'Exclusive Designs', href: '/' },
];

export const MegaMenu = ({ collections, onShowMenu, onCloseMenu }: Props) => {
  return (
    <div
      onMouseEnter={onShowMenu}
      onMouseLeave={onCloseMenu}
      className="absolute z-[500] w-full border-t border-solid border-neutral-200 bg-white shadow-md shadow-neutral-300"
    >
      <div className="mx-auto flex max-w-7xl">
        <div className="flex flex-1">
          <div className="ml-4 py-8">
            <Link
              href="/"
              onClick={onCloseMenu}
              className="text-sm font-bold uppercase leading-4 tracking-widest text-neutral-800 hover:underline"
            >
              New & Trending
            </Link>
            <ul className="pt-2">
              {newItems.map(({ label, href }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="mb-1.5 text-xs font-normal text-neutral-700 hover:underline"
                    onClick={onCloseMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-[3] border-l border-solid shadow-neutral-300">
          {collections &&
            collections.map((collection: Collections) => (
              <div
                key={collection.id}
                className="ml-4 w-full max-w-[225px] py-8"
              >
                <Link
                  href={`/collections/${collection.slug}`}
                  onClick={onCloseMenu}
                  className="text-sm font-bold uppercase leading-4 tracking-widest text-neutral-800 hover:underline"
                >
                  {collection.name}
                </Link>
                <ul className="pt-2">
                  {collection.children.map((subCollection: Collections) => (
                    <li key={subCollection.id}>
                      <Link
                        href={`/collections/${subCollection.slug}`}
                        className="mb-1.5 text-xs font-normal text-neutral-700 hover:underline"
                        onClick={onCloseMenu}
                      >
                        {subCollection.name}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link
                      href={`/collections/${collection.slug}`}
                      className="mb-1.5 text-xs font-normal text-neutral-700 underline"
                      onClick={onCloseMenu}
                    >
                      View All
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
