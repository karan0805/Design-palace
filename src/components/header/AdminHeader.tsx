import Link from 'next/link';
import React from 'react';
import { useSession } from 'next-auth/react';

export const AdminHeader = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-gray-800 py-4 px-6">
      <nav className="flex items-center justify-between">
        <div>
          <Link href="/admin">
            <span className="text-white text-xl font-bold">
              Admin Dashboard
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-300">
              Welcome, {session?.user?.name}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};
