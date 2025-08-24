import { Search } from 'lucide-react';
import Link from 'next/link';
import { AppLink } from '../../config/constants';
import { styles } from '../../config/styles';
import { HeaderActions } from '../components';
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
        <HeaderActions />
      </div>
      <div className="border-b border-b-slate-200" />
      <HeaderBottom />
    </div>
  );
};
