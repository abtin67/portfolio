
import { createNavigation } from 'next-intl/navigation'; // 👈 تغییر اینجاست
import { routing } from './routing';

// بجای createSharedPathnamesNavigation باید از createNavigation استفاده کنی
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);