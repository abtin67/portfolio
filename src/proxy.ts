// proxy.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing'; // آدرس فایل routing خود را چک کنید
import { NextRequest } from 'next/server';

// ابتدا میدل‌ور next-intl را می‌سازیم
const handleIntl = createMiddleware(routing);

// طبق داکیومنت جدید، تابعی به نام proxy را اکسپورت می‌کنیم
export function proxy(request:NextRequest) {
  return handleIntl(request);
}

// کانفیگ همچنان به همان صورت باقی می‌ماند
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};