import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;

  // Halaman dashboard dan semua API dilindungi login Clerk,
  // kecuali /api/umkm yang merupakan direktori UMKM publik.
  const isProtectedPage = pathname.startsWith('/dashboard');
  const isProtectedApi =
    pathname.startsWith('/api') && !pathname.startsWith('/api/umkm');

  if (isProtectedPage || isProtectedApi) {
    const { isAuthenticated } = await auth();

    if (!isAuthenticated) {
      if (isProtectedApi) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        );
      }

      // Dashboard -> /sign-up
      const signUpUrl = new URL('/sign-up', req.url);
      signUpUrl.searchParams.set(
        'redirect_url',
        req.nextUrl.href
      );

      return NextResponse.redirect(signUpUrl);
    }
  }
},
{
  frontendApiProxy: {
    enabled: true,
  },
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
    "/__clerk/:path*"
  ],
};

// The "middleware" file convention is deprecated. Please use "proxy" instead.
