import { type ReactElement } from 'react';
import { AdminLayout } from '@/layouts';
import type { NextPageWithLayout } from '../_app';

const Admin: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
    </div>
  );
};

Admin.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminLayout
      seo={{
        title: 'Admin',
      }}
    >
      {page}
    </AdminLayout>
  );
};

export default Admin;
