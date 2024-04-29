import type { ReactElement } from 'react';
import { useState } from 'react';
import { PrimaryLayout } from '@/layouts';
import { useSession } from 'next-auth/react';
import type { NextPageWithLayout } from './_app';

const Account: NextPageWithLayout = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    businessName: '',
    website: '',
    designUsage: '',
  });

  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUpdatedUser({
      ...updatedUser,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    setUser(updatedUser);
    setEditing(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl space-y-8 sm:p-10">
        <h1 className="mb-6 text-center text-4xl font-bold text-gray-700">
          My Account
        </h1>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={session?.user?.name || ''}
            readOnly
            className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 shadow-sm focus:border-violet-700 focus:ring-violet-700 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={session?.user?.email || ''}
            readOnly
            className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 shadow-sm focus:border-violet-700 focus:ring-violet-700 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="businessName"
            className="block text-sm font-medium text-gray-700"
          >
            Business Name
          </label>
          {editing ? (
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={updatedUser.businessName}
              placeholder="Business Name"
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-violet-700 focus:ring-violet-700 sm:text-sm"
            />
          ) : (
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={user.businessName}
              placeholder="Business Name"
              readOnly
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 shadow-sm focus:border-violet-700 focus:ring-violet-700 sm:text-sm"
            />
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="website"
            className="block text-sm font-medium text-gray-700"
          >
            Website
          </label>
          {editing ? (
            <input
              type="text"
              id="website"
              name="website"
              value={updatedUser.website}
              onChange={handleChange}
              placeholder="https://www.example.com"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-violet-700 focus:ring-violet-700 sm:text-sm"
            />
          ) : (
            <input
              type="text"
              id="website"
              name="website"
              value={user.website}
              placeholder="https://www.example.com"
              readOnly
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 shadow-sm focus:border-violet-700 focus:ring-violet-700 sm:text-sm"
            />
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="designUsage"
            className="block text-sm font-medium text-gray-700"
          >
            What will you be using the designs for?
          </label>
          {editing ? (
            <textarea
              id="designUsage"
              name="designUsage"
              rows={Number(4)}
              placeholder="Creating promotional materials for our products."
              value={updatedUser.designUsage}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-violet-700 focus:ring-violet-700 sm:text-sm"
            />
          ) : (
            <textarea
              id="designUsage"
              name="designUsage"
              rows={Number(4)}
              value={user.designUsage}
              placeholder="Creating promotional materials for our products."
              readOnly
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 shadow-sm focus:border-violet-700 focus:ring-violet-700 sm:text-sm"
            />
          )}
        </div>
        {editing ? (
          <div className="flex justify-start">
            <button
              onClick={handleSaveChanges}
              className="inline-flex justify-center rounded-md border border-transparent bg-violet-700 px-4 py-2 text-white shadow-sm hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 sm:text-sm"
            >
              Save Changes
            </button>
          </div>
        ) : (
          <div className="flex justify-start">
            <button
              onClick={handleEdit}
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:text-sm"
            >
              Edit Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Account.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'My Account',
      }}
    >
      {page}
    </PrimaryLayout>
  );
};

export default Account;
