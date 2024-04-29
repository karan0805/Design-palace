import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from 'next/server';
import { env } from '@/env/server.mjs';
import { getToken } from 'next-auth/jwt';

export default function withAuthorization(
  middleware: NextMiddleware,
  requireAuth: string[] = [],
) {
  return async (request: NextRequest, next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;
    if (requireAuth.some((path) => pathname.startsWith(path))) {
      const token = await getToken({
        req: request,
        secret: env.NEXTAUTH_SECRET,
      });
      if (!token) {
        const url = new URL(`/auth/signin`, request.url);
        return NextResponse.redirect(url);
      }
      if (token?.user?.role !== 'ADMIN') {
        const url = new URL(`/403`, request.url);
        return NextResponse.rewrite(url);
      }
    }
    return middleware(request, next);
  };
}
