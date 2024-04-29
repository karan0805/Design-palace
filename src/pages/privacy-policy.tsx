import type { ReactElement } from 'react';
import { PrimaryLayout } from '@/layouts';
import type { NextPageWithLayout } from './_app';

const Privacy: NextPageWithLayout = () => {
  return (
    <div className="px-6 py-10 sm:px-10">
      <div className="mx-auto p-8">
        <h1 className="mb-6 text-center text-4xl font-bold text-gray-800">
          Privacy Policy
        </h1>
        <p className="text-gray-700">
          We take your privacy seriously. This Privacy Policy describes how we
          collect, use, and share your personal information when you use our
          platform.
        </p>
        <h2 className="my-4 text-2xl font-bold text-gray-800">
          Information We Collect
        </h2>
        <p className="text-gray-700">
          We may collect the following types of personal information:
        </p>
        <ul className="ml-6 list-disc text-gray-700">
          <li>Your name, email address, and contact information.</li>
          <li>
            Information about the designs you purchase or list on our platform.
          </li>
          <li>Payment and billing information.</li>
          <li>
            Device information, IP address, and other usage data when you visit
            our website.
          </li>
        </ul>
        <h2 className="my-4 text-2xl font-bold text-gray-800">
          How We Use Your Information
        </h2>
        <p className="text-gray-700">
          We use your personal information for the following purposes:
        </p>
        <ul className="ml-6 list-disc text-gray-700">
          <li>To process and fulfill your orders for designs.</li>
          <li>To communicate with you regarding your orders and inquiries.</li>
          <li>To improve and personalize your experience on our platform.</li>
          <li>
            To send you promotional offers and updates (you can opt-out at any
            time).
          </li>
          <li>To comply with legal requirements and protect our rights.</li>
        </ul>
        <h2 className="my-4 text-2xl font-bold text-gray-800">
          Sharing Your Information
        </h2>
        <p className="text-gray-700">
          We may share your personal information with:
        </p>
        <ul className="ml-6 list-disc text-gray-700">
          <li>
            Our trusted service providers who help us operate our platform.
          </li>
          <li>
            Other users when you list or purchase designs on our platform.
          </li>
          <li>
            Law enforcement or government authorities when required by law.
          </li>
        </ul>
        <h2 className="my-4 text-2xl font-bold text-gray-800">Security</h2>
        <p className="text-gray-700">
          We take reasonable measures to protect your personal information.
          However, no data transmission over the internet is 100% secure. Please
          use caution when sharing sensitive information online.
        </p>
        <h2 className="my-4 text-2xl font-bold text-gray-800">
          Changes to this Policy
        </h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the revised date will be indicated at the
          top of the page.
        </p>
        <h2 className="my-4 text-2xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at support@syntaxwork.com.
        </p>
      </div>
    </div>
  );
};

Privacy.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Privacy Policy',
      }}
    >
      {page}
    </PrimaryLayout>
  );
};

export default Privacy;
