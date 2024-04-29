import Link from 'next/link';
import { NavLink } from '@/components';
import { Collections } from '@/types';
import { FiX } from 'react-icons/fi';
import { Accordion } from '@/components/ui';

interface Props {
  navLinks: NavLink[];
  collections: Collections;
  onPageClose: () => void;
}

export const CollectionsPage = ({
  navLinks,
  collections,
  onPageClose,
}: Props) => {
  return (
    <div className="fixed bottom-0 left-0 top-0 z-50 h-full w-full overflow-y-auto bg-white px-5 pt-5">
      <div className="flex justify-between">
        <h2 className="text-xl font-medium">{'Explore'}</h2>
        <FiX
          className="cursor-pointer"
          size="1.5rem"
          data-testid="close"
          onClick={onPageClose}
        />
      </div>
      <ul className="mt-5 flex flex-col px-2">
        {navLinks.map((item, index) => (
          <li
            key={index}
            className="border-b border-solid border-neutral-100 font-medium text-neutral-800"
          >
            {item.collapsible ? (
              <Accordion>
                <Accordion.Header>{item.name}</Accordion.Header>
                <Accordion.Body className="px-2 text-sm">
                  <ul>
                    {collections &&
                      collections.map((collection: any) => (
                        <li
                          key={collection.id}
                          className="block border-b border-solid border-neutral-100"
                        >
                          <Accordion>
                            <Accordion.Header>
                              {collection.name}
                            </Accordion.Header>
                            <Accordion.Body className="px-2 text-xs">
                              <ul>
                                {collection.children.map(
                                  (subCollection: any) => (
                                    <li
                                      key={subCollection.id}
                                      className="block border-b border-solid border-neutral-100 py-2"
                                    >
                                      <Link
                                        href={`/collections/${subCollection.slug}`}
                                        onClick={onPageClose}
                                      >
                                        <h3>{subCollection.name}</h3>
                                      </Link>
                                    </li>
                                  ),
                                )}
                                <li className="block border-b border-solid border-neutral-100 py-2">
                                  <Link
                                    href={`/collections/${collection.slug}`}
                                    onClick={onPageClose}
                                  >
                                    <h3> View All {collection.name}</h3>
                                  </Link>
                                </li>
                              </ul>
                            </Accordion.Body>
                          </Accordion>
                        </li>
                      ))}
                  </ul>
                </Accordion.Body>
              </Accordion>
            ) : (
              <Link
                href={item.name}
                className="block py-4"
                onClick={onPageClose}
              >
                <h3>{item.name}</h3>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
