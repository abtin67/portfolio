import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // لیست زبان‌ها
  locales: ['fa', 'en'],
  
  // زبان پیش‌فرض
  defaultLocale: 'fa'
});