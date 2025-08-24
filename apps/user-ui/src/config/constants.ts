export const AppLink = {
  Home: '/',
  Login: '/login',
  WishList: '/wishlist',
  Cart: '/cart',
  Products: '/products',
  Shops: '/shops',
  Offers: '/offers',
  BecomeSeller: '/become-seller',
} as const;

export const navItems: NavItemsTypes[] = [
  { title: 'Home', href: AppLink.Home },
  { title: 'Products', href: AppLink.Products },
  { title: 'Shops', href: AppLink.Shops },
  { title: 'Offers', href: AppLink.Offers },
  { title: 'Become A Seller', href: AppLink.BecomeSeller },
];
