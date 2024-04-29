import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { type ReactElement, useEffect, useState } from 'react';
import { PrimaryLayout } from '@/layouts';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import type { NextPageWithLayout } from '../_app';

const ForgotPassword: NextPageWithLayout = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [router, status]);

  async function onSubmit(e: any) {
    e.preventDefault();
    try {
      // Send a password reset link to the provided email
      // Example: await sendPasswordResetEmail(email);
      axios
        .post('/api/auth/forgot-password', { email })
        .then((res) => {
          toast.success('Password reset link sent successfully');
          router.push('/auth/signin');
          console.log(res);
        })
        .catch((err) => {
          const errmsg = err.response.data.error;
          console.log(errmsg);
          toast.error(errmsg);
        });
    } catch (error) {
      console.log(error);
      toast.error('Error sending password reset link');
    }
  }

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-10">
        <div className="flex w-full max-w-md flex-col place-items-center rounded-xl bg-white p-5 shadow-xl">
          <h1 className="my-5 text-center text-xl font-bold leading-6 text-black">
            FORGOT PASSWORD
          </h1>
          <p className="mb-4 px-6 text-center text-sm font-medium text-gray-400">
            Don't worry, it happens! Tell us your email address and we'll send
            you a password reset link.
          </p>
          <form onSubmit={onSubmit}>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="my-2 w-full rounded-sm border border-gray-300 px-4 py-3 text-sm"
              required
            />
            <button
              type="submit"
              className="mt-3 w-full rounded-md bg-zinc-900 px-4 py-2 font-medium text-white transition hover:bg-black"
            >
              SEND RESET LINK
            </button>
          </form>
          <div className="mt-5 text-xs text-gray-400">
            Remember your password?{' '}
            <Link href="/auth/signin">
              <span className="underline">Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

ForgotPassword.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Forgot Password',
      }}
    >
      {page}
    </PrimaryLayout>
  );
};

export default ForgotPassword;
