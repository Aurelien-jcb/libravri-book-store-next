import Link from 'next/link';
import { signOut } from '@/auth';
// import { useState } from 'react';
import {
  PowerIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  Bars4Icon,
} from '@heroicons/react/24/outline';
import LibravriLogo from '@/app/ui/libravri-logo';

export default function Navbar() {
  // Utilisez l'état local pour gérer l'affichage du menu sur mobile
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-20 items-center justify-between px-3 py-4 text-gray-600 md:h-16 md:px-6">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          <LibravriLogo />
        </Link>

        {/* Input de recherche (ajuster selon vos besoins) */}
      </div>
      <div className="hidden items-center  md:flex">
        <MagnifyingGlassIcon className="ml-2 w-6" />
        <input
          type="text"
          placeholder="Rechercher..."
          className="rounded-md border-none bg-white px-3 py-2"
        />
      </div>

      {/* Burger menu pour les écrans mobiles */}
      <div className="md:hidden">
        <XMarkIcon
          className="w-6 cursor-pointer"
          // onClick={() => setMobileMenuOpen(false)}
        />
        {/* {mobileMenuOpen ? (
          // Affiche XIcon lorsque le menu est ouvert
          <XMarkIcon
            className="w-6 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          // Affiche MenuIcon lorsque le menu est fermé
          <Bars4Icon
            className="w-6 cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          />
        )} */}
      </div>

      {/* Menu principal (ajuster selon vos besoins) */}
      {/* <div
        className={`space-x-4 md:flex ${mobileMenuOpen ? 'flex' : 'hidden'}`}
      >
        <Link href="/link1">
          <a className="hover:underline">Link 1</a>
        </Link>
        <Link href="/link2">
          <a className="hover:underline">Link 2</a>
        </Link>
      </div> */}

      {/* Bouton de déconnexion */}
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button className="flex items-center space-x-2">
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>
    </div>
  );
}
