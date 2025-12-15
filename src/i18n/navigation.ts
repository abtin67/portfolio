
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// ساخت توابع نویگیشن بر اساس تنظیمات routing
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);