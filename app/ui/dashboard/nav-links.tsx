'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  {
    name: 'Accueil',
    href: '/dashboard',
    icon: HomeIcon,
    isDisplayOnDesktop: true,
  },
  {
    name: 'Rechercher',
    href: '/search',
    icon: MagnifyingGlassIcon,
    isDisplayOnDesktop: false,
  },
  {
    name: 'Ajouter un livre',
    href: '/livres/creer',
    icon: PlusIcon,
    isDisplayOnDesktop: false,
  },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
    isDisplayOnDesktop: true,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <div
            key={link.name}
            className={`${
              link.isDisplayOnDesktop ? 'sm:block' : 'block sm:hidden'
            }`}
          >
            <Link
              href={link.href}
              passHref
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 p-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-500 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'text-gray-600': pathname === link.href,
                },
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
}
