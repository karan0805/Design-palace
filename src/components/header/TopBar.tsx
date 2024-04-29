import Link from 'next/link';
import type { IconType } from 'react-icons';
import { AiOutlineTeam } from 'react-icons/ai';
import { FiGrid, FiPhone } from 'react-icons/fi';

interface TopbarItemProps {
  label: string;
  url: string;
  Icon?: IconType;
}

const TopbarItem = ({ label, url, Icon }: TopbarItemProps) => (
  <li className="mx-1 pb-px md:mr-2.5 lg:[&:nth-of-type(3)]:mr-0">
    <Link
      href={url}
      className="flex items-center transition-colors hover:text-white"
    >
      {Icon && <Icon className="mx-1 md:text-sm"></Icon>}
      <span>{label}</span>
    </Link>
  </li>
);

export const TopBar = () => {
  const topbarItems: TopbarItemProps[] = [
    { label: 'Partner with us', url: '/contact-us', Icon: AiOutlineTeam },
    {
      label: 'Offline Order',
      url: 'https://wa.me/9909966560?text=Hello Design Palace, I am looking for an Offline Order.',
      Icon: FiGrid,
    },
    { label: '+91 99099 66560', url: 'tel:+919909966560', Icon: FiPhone },
  ];

  return (
    <div className="bg-[#232323] text-[10px] text-gray-300 md:text-xs">
      <div className="mx-auto flex flex-col items-center px-4 py-1 xl:container md:flex-row md:py-2.5">
        <p className="pb-2 md:pb-0">
          {'Get 25% discount on a first purchase.'}
        </p>
        <ul className="flex flex-wrap justify-center md:ml-auto">
          {topbarItems.map((item) => (
            <TopbarItem key={item.label} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};
