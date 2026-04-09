'use client';

import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { cn } from '~/utils/tailwindmerge';

const links = [
  { href: '/', label: 'Home' },
  { href: '/werk', label: 'Werk' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/artikelen', label: 'Artikelen' },
  { href: '/contact', label: 'Contact' },
];

const menuVariants = {
  closed: {
    opacity: 0,
    y: 6,
    scale: 0.97,
    transition: { duration: 0.15, ease: 'easeIn' as const },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.18, ease: 'easeOut' as const },
  },
};

const listVariants = {
  open: { transition: { staggerChildren: 0.045, delayChildren: 0.04 } },
  closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};

const itemVariants = {
  closed: { opacity: 0, y: 5, transition: { duration: 0.12 } },
  open: { opacity: 1, y: 0, transition: { duration: 0.15, ease: 'easeOut' as const } },
};

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Backdrop (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Menu (mobile only) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed bottom-22 left-1/2 z-20 -translate-x-1/2 md:hidden"
          >
            <motion.nav
              variants={listVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="bg-navigation shadow-elevation-high flex flex-col rounded-xl px-2 py-2 backdrop-blur-lg"
              role="navigation"
              aria-label="Main navigation"
            >
              {links.map(({ href, label }) => (
                <motion.div key={href} variants={itemVariants}>
                  <Link
                    href={href}
                    className={cn('block rounded-lg px-4 py-2 text-base hover:underline', {
                      'text-secondary underline': pathname === href,
                      'text-primary': pathname !== href,
                    })}
                    aria-current={pathname === href ? 'page' : undefined}>
                    {label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pill bar */}
      <header
        className="bg-navigation shadow-elevation-high fixed bottom-6 left-1/2 z-20 flex h-14 -translate-x-1/2 items-center rounded-full backdrop-blur-lg"
        role="banner">
        {/* Mobile: avatar + hamburger */}
        <div className="flex items-center gap-3 px-3 md:hidden">
          <div className="bg-primary flex h-9 w-9 items-center justify-center rounded-full">
            <span className="text-xs tracking-wide text-white">DA</span>
          </div>
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full transition-colors hover:bg-black/5"
            aria-label={isOpen ? 'Sluit menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="main-nav">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.18, ease: 'easeInOut' as const }}
              className="bg-primary block h-px w-5 origin-center"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.18, ease: 'easeInOut' as const }}
              className="bg-primary block h-px w-5 origin-center"
            />
          </button>
        </div>

        {/* Desktop: inline nav */}
        <nav className="hidden items-center gap-8 px-8 md:flex" role="navigation" aria-label="Main navigation">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn('hover:underline', {
                'text-secondary underline': pathname === href,
                'text-primary': pathname !== href,
              })}
              aria-current={pathname === href ? 'page' : undefined}>
              {label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
