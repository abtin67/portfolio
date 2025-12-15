import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // مچ کردن همه مسیرها به جز فایل‌های استاتیک و api
  matcher: ['/', '/(fa|en)/:path*']
};
