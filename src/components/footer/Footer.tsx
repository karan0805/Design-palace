import Image from 'next/image';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { IconType } from 'react-icons/lib';

const socialMedias: [IconType, string][] = [
  [BsInstagram, 'https://instagram.com'],
  [BsTwitter, 'https://twitter.com'],
  [BsFacebook, 'https://facebook.com'],
  [BsLinkedin, 'https://linkedin.com'],
];

export const Footer = () => {
  const footerLinks = [
    {
      label: 'Sitemap',
      links: [
        ['Home', '/'],
        ['Our Collections', '/collections'],
        ['Explore Designs', '/products'],
      ],
    },
    {
      label: 'Work with us',
      links: [
        ['Partner with us', '/contact-us'],
        ['Sell your Design', '/sell-your-design'],
        ['Custom Bulk orders', '/bulk-buying'],
      ],
    },
    {
      label: 'Help',
      links: [
        ['Contact Us', '/contact-us'],
        ['Email Support', 'mailto:support@syntaxwork.com'],
        ['Privacy Policy', '/privacy-policy'],
        ['Terms & Conditions', '/terms-and-conditions'],
      ],
    },
  ];

  return (
    <footer className="mb-16 bg-white md:mb-0">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-1">
            <Link href="/">
              <Image
                priority
                src="/logo.svg"
                alt="design palace logo"
                width={200}
                height={35}
                quality={100}
              />
            </Link>
            <p className="py-4 text-sm font-normal text-neutral-500">
              {
                'Your one-stop destination for effortless design purchases. Browse through a curated collection of stunning designs and find the perfect fit for your project in just a few clicks.'
              }
            </p>
            <div className="my-5 flex justify-center md:justify-start">
              {socialMedias.map(([Icon, href]) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className="mr-2 rounded-lg bg-neutral-200 p-2 text-neutral-600 transition hover:bg-neutral-300 hover:text-neutral-700"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-5 flex justify-between md:mt-0 md:flex-[2] md:justify-around">
            {footerLinks.map(({ label, links }) => (
              <div key={label} className="flex flex-col">
                <strong className="mb-5 text-sm font-bold text-neutral-600 md:text-base">
                  {label}
                </strong>
                <ul className="flex flex-col gap-2 text-xs font-normal text-neutral-500 md:text-sm">
                  {links.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="transition hover:text-neutral-700"
                    >
                      {label}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-neutral-100">
        <div className="mx-auto max-w-7xl px-2 py-3">
          <div className="flex flex-col items-center justify-between gap-3 text-xs font-medium text-neutral-700 md:flex-row">
            <p>Copyright © 2024 Design Palace</p>
            <p>
              {`Created By `}
              <strong>
                <Link href="https://github.com/karan0805" target="_blank">
                  karan0805
                </Link>
              </strong>
              {'. '}
              {'All Rights Reserved'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
