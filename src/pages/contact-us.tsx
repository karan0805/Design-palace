import type { ReactElement } from 'react';
import { useState } from 'react';
import { PrimaryLayout } from '@/layouts';
import type { NextPageWithLayout } from './_app';

const ContactUs: NextPageWithLayout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your logic here to handle the form submission, e.g., send the data to your backend or trigger an email to your support team.
    console.log(formData);
    // Clear the form data after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-100 to-violet-200 px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-4xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="text-gray-700">
          We&apos;d love to hear from you! If you have any questions,
          suggestions, or feedback, please feel free to reach out to us using
          the contact form below:
        </p>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-violet-700 focus:ring-violet-700 sm:text-sm"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-violet-700 focus:ring-violet-700 sm:text-sm"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={Number(4)}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-violet-700 focus:ring-violet-700 sm:text-sm"
              placeholder="Write your message here"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-violet-700 px-6 py-3 text-white shadow-sm hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-700  focus:ring-offset-2 sm:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

ContactUs.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Contact Us',
      }}
    >
      {page}
    </PrimaryLayout>
  );
};

export default ContactUs;
