import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { type ReactElement, useEffect, useState } from 'react';
import { PrimaryLayout } from '@/layouts';
import { signIn, useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { BsGoogle } from 'react-icons/bs';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import type { NextPageWithLayout } from '../_app';

const Signin: NextPageWithLayout = () => {
  const [field, setField] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [router, status]);

  const handleChange = (e: any) => {
    setField({ ...field, [e.target.name]: e.target.value });
  };

  async function onSubmit(e: any) {
    e.preventDefault();
    signIn('credentials', {
      ...field,
      redirect: false,
    })
      .then((res) => {
        if (res?.status == 200) {
          console.log(res);
          toast.success('Login Successful');
        } else {
          console.log(res?.error);
          toast.error(res?.error as string);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-10">
        <div className="flex w-full max-w-md flex-col place-items-center rounded-xl bg-white p-5 shadow-xl">
          <h1 className="my-5 text-center text-xl font-bold leading-6 text-black">
            WELCOME BACK{' '}
          </h1>
          <form onSubmit={onSubmit}>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email address"
              className="my-2 w-full rounded-sm border border-gray-300 px-4 py-3 text-sm"
              required
            />
            <div className="relative">
              <input
                onChange={handleChange}
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                className="my-2 w-full rounded-sm border border-gray-300 px-4 py-3 text-sm"
                required
              />
              <div
                className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <p className="my-2 px-6 text-center text-xs text-gray-400">
              By logging in, you agree to our{' '}
              <span className="underline">Privacy Policy</span> and{' '}
              <span className="underline">Terms of Use</span>.
            </p>
            <button
              type="submit"
              className="mt-3 w-full rounded-md bg-zinc-900 px-4 py-2 font-medium text-white transition hover:bg-black"
            >
              SIGN IN
            </button>
            <button
              type="button"
              className="my-1.5 flex w-full items-center justify-center gap-3 rounded-md bg-zinc-900 px-4 py-2 font-medium text-white transition hover:bg-black"
              onClick={() =>
                signIn('google', {
                  callbackUrl: 'http://localhost:3000',
                  redirect: false,
                })
              }
            >
              <BsGoogle size="1.2rem" />
              {'Continue with Google'}
            </button>
          </form>
          <div className="mt-2 text-xs text-gray-400">
            <Link href="/auth/forgot-password">
              <span className="underline">Forgot your password?</span>
            </Link>
          </div>
          <div className="mt-5 text-xs text-gray-400">
            Not a member?{' '}
            <Link href="/auth/signup">
              <span className="underline">Join Us</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

Signin.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Sign in',
      }}
    >
      {page}
    </PrimaryLayout>
  );
};

export default Signin;
