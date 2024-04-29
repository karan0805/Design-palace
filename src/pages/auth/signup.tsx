import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { type ReactElement, useEffect, useState } from 'react';
import { PrimaryLayout } from '@/layouts';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import type { NextPageWithLayout } from '../_app';

const Signup: NextPageWithLayout = () => {
  const [field, setField] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  const handleChange = (e: any) => {
    setField({ ...field, [e.target.name]: e.target.value });
  };

  const doRegister = async (e: any) => {
    e.preventDefault();
    axios
      .post('/api/auth/signup', field)
      .then((res) => {
        toast.success('Registration Successful');
        router.push('/auth/signin');
        console.log(res);
      })
      .catch((err) => {
        const errmsg = err.response.data.error;
        console.log(errmsg);
        toast.error(errmsg);
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-10">
      <div className="flex w-full max-w-md flex-col place-items-center rounded-xl bg-white p-5 shadow-xl">
        {' '}
        <form onSubmit={doRegister}>
          <h1 className="text-cusblack my-5 text-center text-xl font-bold leading-6">
            BECOME A MEMBER
          </h1>
          <p className="mb-4 px-6 text-center text-sm font-medium text-gray-400">
            Join now for exclusive design finds, inspiration, and a vibrant
            creative community!
          </p>

          <input
            onChange={handleChange}
            required
            type="text"
            placeholder="Full Name"
            name="name"
            className="my-2 w-full rounded-sm border border-gray-300 px-4 py-3 text-sm"
          />
          <input
            onChange={handleChange}
            required
            type="text"
            placeholder="Email address"
            name="email"
            className="my-2 w-full rounded-sm border border-gray-300 px-4 py-3 text-sm"
          />
          <div className="relative">
            <input
              onChange={handleChange}
              required
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              className="my-2 w-full rounded-sm border border-gray-300 px-4 py-3 text-sm"
              autoComplete="new-password"
            />
            <div
              className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <p className="my-2 px-6 text-center text-xs text-gray-400">
            By register, you agree to our{' '}
            <span className="underline">Privacy Policy</span> and{' '}
            <span className="underline">Terms of Use</span>.
          </p>
          <button
            type="submit"
            className="mt-3 w-full rounded-sm bg-black py-2 text-white"
          >
            JOIN US
          </button>
          <div className="mt-5 text-center text-xs text-gray-400">
            Already have?{' '}
            <Link href="/auth/signin">
              <span className="underline">Sign In</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

Signup.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Sign up',
      }}
    >
      {page}
    </PrimaryLayout>
  );
};

export default Signup;
