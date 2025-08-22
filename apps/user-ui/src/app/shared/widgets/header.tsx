import Link from 'next/link';

export const Header = () => {
  return (
    <div className="w-full bg-white">
      <div className="m-auto flex w-4/5 items-center justify-between py-5">
        <div>
          <Link href="/">
            <span className="text-2xl font-semibold">Eshop</span>
          </Link>
        </div>
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Search for products..."
            name="text"
            className="h-14 w-full border border-blue-700 px-4 font-medium outline-none"
          />
          <div className="w-15">asd</div>
        </div>
      </div>
    </div>
  );
};
