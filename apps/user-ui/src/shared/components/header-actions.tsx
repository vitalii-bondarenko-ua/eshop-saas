import Link from 'next/link';
import { AppLink } from '../../config/constants';
import { HeartIcon, ShoppingCart, User } from 'lucide-react';
import cn from 'classnames';

export const HeaderActions = () => {
  return (
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
  );
};
