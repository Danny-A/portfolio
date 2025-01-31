import { NavLink } from '@remix-run/react';
import { cn } from '~/utils/tailwindmerge';

export default function Header() {
  return (
    <header className="bg-navigation fixed bottom-6 left-1/2 z-10 flex h-16 -translate-x-1/2 rounded-lg backdrop-blur-lg" role="banner">
      <nav 
        className="flex items-center gap-8 px-8" 
        role="navigation" 
        aria-label="Main navigation"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            cn('hover:underline', {
              'text-secondary underline': isActive,
              'opacity-50': isPending,
              'text-primary': !isActive && !isPending,
            })
          }
          aria-current={({ isActive }) => isActive ? 'page' : undefined}
        >
          Home
        </NavLink>
        <NavLink
          to="/werk"
          className={({ isActive, isPending }) =>
            cn('hover:underline', {
              'text-secondary underline': isActive,
              'opacity-50': isPending,
              'text-primary': !isActive && !isPending,
            })
          }
        >
          Werk
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            cn('hover:underline', {
              'text-secondary underline': isActive,
              'opacity-50': isPending,
              'text-primary': !isActive && !isPending,
            })
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
