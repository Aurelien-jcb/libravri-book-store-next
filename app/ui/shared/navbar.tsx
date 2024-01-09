'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  PowerIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  Bars4Icon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import LibravriLogo from '@/app/ui/libravri-logo';
import UserDropdown from './user-dropdown';
import Search from '../search';
import NavbarOverlay from './navbar-overlay';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex h-20 items-center justify-between px-3 py-4 text-gray-600 md:h-16 md:px-12">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-lg font-bold">
          <LibravriLogo />
        </Link>
      </div>
      <Search placeholder="Rechercher un livre..." label="books" />
      <div className="flex  w-20 justify-between align-middle">
        <UserDropdown />
        <div>
          <Bars3Icon
            className="w-6 cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
        </div>
      </div>
      {openMenu && <NavbarOverlay onClose={() => setOpenMenu(false)} />}
    </div>
  );
}
