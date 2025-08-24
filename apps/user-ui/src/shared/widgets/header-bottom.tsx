'use client';

import cn from 'classnames';
import { AlignLeft, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navItems } from '../../config/constants';
import { styles } from '../../config/styles';
import { HeaderActions } from '../components';

const { colors } = styles;

export const HeaderBottom = () => {
  const [show, setShow] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y =
        window.scrollY ??
        window.pageYOffset ??
        document.documentElement.scrollTop ??
        0;

      setIsSticky(y > 100);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'w-full transition-all duration-300',
        isSticky ? 'fixed left-0 top-0 z-100 bg-white shadow-lg' : 'relative'
      )}
    >
      <div
        className={cn(
          'relative m-auto flex w-4/5 items-center justify-between',
          isSticky ? 'py-3' : 'py-0'
        )}
      >
        <div
          className="flex h-12 w-[260px] cursor-pointer items-center justify-between bg-accent-primary px-5"
          onClick={() => setShow((prev) => !prev)}
        >
          <div className="flex items-center gap-2">
            <AlignLeft color={colors.basic.white} />
            <span className="font-medium text-white">All Departments</span>
          </div>
          <ChevronDown
            color={colors.basic.white}
            className={cn(
              'transition-transform duration-300',
              show && 'rotate-180'
            )}
          />
        </div>
        {show && (
          <div
            className={cn(
              'absolute left-0 h-[400px] w-[260px] bg-gray-100',
              isSticky ? 'top-18' : 'top-12'
            )}
          >
            Dropdowns
          </div>
        )}
        <div className="flex items-center">
          {navItems.map((item: NavItemsTypes) => (
            <Link
              href={item.href}
              key={item.href}
              className="px-5 text-lg font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div>{isSticky && <HeaderActions />}</div>
      </div>
    </div>
  );
};
