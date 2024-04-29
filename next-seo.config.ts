import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  defaultTitle: 'Design Palace',
  titleTemplate: '%s | Design Palace',
  description: `Explore and buy thousands of seamless pattern and textile designs from the world's largest online collection of textile.`,
  canonical: 'https://design-palace.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://design-palace.vercel.app/',
    siteName: 'Design Palace',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default config;
