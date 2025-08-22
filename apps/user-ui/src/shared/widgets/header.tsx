import cn from 'classnames';
import { HeartIcon, Search, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { styles } from '../../brandConfig';
import { AppLink } from '../../constants';
import { HeaderBottom } from './header-bottom';

export const Header = () => {
  return (
    <div className="w-full bg-white">
      <div className="m-auto flex w-4/5 items-center justify-between py-5">
        <div>
          <Link href={AppLink.Home}>
            <span className="text-2xl font-semibold">Eshop</span>
          </Link>
        </div>
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Search for products..."
            name="text"
            className="h-14 w-full border-2 border-accent-primary px-4 font-Poppins font-medium outline-none"
          />
          <div className="absolute right-0 top-0 flex h-14 w-15 cursor-pointer items-center justify-center bg-accent-primary">
            <Search color={styles.colors.basic.white} />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Link
              href={AppLink.Login}
              className={cn(
                'flex size-12 items-center justify-center rounded-full border-2 border-accent-grey'
              )}
            >
              <User />
            </Link>
            <Link href={AppLink.Login}>
              <span className="block font-medium">Hello,</span>
              <span className="font-semibold">Sign In</span>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link href={AppLink.WishList} className="relative">
              <HeartIcon />
              <div className="absolute -right-3 -top-3 flex size-6 items-center justify-center rounded-full border-2 border-white bg-red-500">
                <span className="text-sm font-medium text-white">0</span>
              </div>
            </Link>
            <Link href={AppLink.Cart} className="relative">
              <ShoppingCart />
              <div className="absolute -right-3 -top-3 flex size-6 items-center justify-center rounded-full border-2 border-white bg-red-500">
                <span className="text-sm font-medium text-white">0</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-b-slate-200" />
      <HeaderBottom />
    </div>
  );
};
