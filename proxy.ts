import createMiddleware from 'next-intl/middleware';
import { routing } from './navigation';

// The logic remains the same, but it lives in proxy.ts now
export default createMiddleware(routing);

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(en|fr)/:path*']
};