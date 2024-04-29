import type { ReactElement } from 'react';
import { PrimaryLayout } from '@/layouts';
import type { NextPageWithLayout } from './_app';

const Bulkbuying: NextPageWithLayout = () => {
  return (
    <div className="px-6 py-10 sm:px-10">
      <div className="mx-auto ">
        <h1 className="mb-6 text-center text-4xl font-bold text-gray-700">
          Terms and Conditions
        </h1>
        <p className="text-gray-700">
          Welcome to Design Palace! By accessing and using our platform, you
          agree to be bound by the following terms and conditions:
        </p>
        <h2 className="my-4 text-2xl font-bold text-gray-700">
          1. Intellectual Property
        </h2>
        <p className="text-gray-700">
          All content and designs available on our platform are protected by
          copyright and other intellectual property rights. You may not
          reproduce, modify, distribute, or otherwise use any content without
          proper authorization.
        </p>
        <h2 className="my-4 text-2xl font-bold text-gray-700">
          2. Selling and Purchasing Designs
        </h2>
        <p className="text-gray-700">
          Design Palace acts as a marketplace for designers to sell their
          textile designs to users. Designers retain the rights to their
          designs, and users may purchase designs for personal or commercial use
          based on the license terms provided.
        </p>
        <h2 className="my-4 text-2xl font-bold text-gray-700">
          3. User Accounts
        </h2>
        <p className="text-gray-700">
          You must create an account to access certain features of our platform.
          Ensure that your account information is accurate and secure. You are
          responsible for maintaining the confidentiality of your account
          credentials.
        </p>
        <h2 className="my-4 text-2xl font-bold text-gray-700">
          4. Prohibited Activities
        </h2>
        <p className="text-gray-700">
          You may not use our platform for any unlawful or prohibited purpose.
          This includes uploading harmful content, violating intellectual
          property rights, or engaging in fraudulent activities.
        </p>
        <h2 className="my-4 text-2xl font-bold text-gray-700">
          5. Disclaimer of Warranties
        </h2>
        <p className="text-gray-700">
          Design Palace provides the platform on an "as is" basis without any
          warranties. We do not guarantee the accuracy, reliability, or
          completeness of the content and designs available on the platform.
        </p>
        <h2 className="my-4 text-2xl font-bold text-gray-700">
          6. Limitation of Liability
        </h2>
        <p className="text-gray-700">
          Design Palace shall not be liable for any direct, indirect,
          incidental, or consequential damages arising out of the use or
          inability to use our platform or the content available on it.
        </p>
        <h2 className="my-4 text-2xl font-bold text-gray-700">
          7. Governing Law and Jurisdiction
        </h2>
        <p className="text-gray-700">
          These terms and conditions are governed by the laws of [Your
          Jurisdiction]. Any disputes arising from the use of our platform shall
          be subject to the exclusive jurisdiction of the courts in [Your
          Jurisdiction].
        </p>
        <h2 className="my-4 text-2xl font-bold text-gray-700">
          8. Changes to Terms
        </h2>
        <p className="text-gray-700">
          We may update these terms and conditions from time to time. Any
          changes will be posted on this page, and the revised date will be
          indicated at the top of the page. Continued use of the platform after
          such changes constitutes your acceptance of the updated terms.
        </p>
        <h2 className="my-4 text-2xl font-bold text-gray-700">9. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions or concerns about these terms and
          conditions, please contact us at support@syntaxwork.com.
        </p>
      </div>
    </div>
  );
};

Bulkbuying.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Terms & Conditions',
      }}
    >
      {page}
    </PrimaryLayout>
  );
};

export default Bulkbuying;
