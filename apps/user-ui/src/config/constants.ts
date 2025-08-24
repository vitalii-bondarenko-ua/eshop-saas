export const AppLink = {
  Home: '/',
  Login: '/login',
  Signup: '/signup',
  WishList: '/wishlist',
  Cart: '/cart',
  Products: '/products',
  Shops: '/shops',
  Offers: '/offers',
  BecomeSeller: '/become-seller',
  ForgotPassword: '/forgot-password',
} as const;

export const navItems: NavItemsTypes[] = [
  { title: 'Home', href: AppLink.Home },
  { title: 'Products', href: AppLink.Products },
  { title: 'Shops', href: AppLink.Shops },
  { title: 'Offers', href: AppLink.Offers },
  { title: 'Become A Seller', href: AppLink.BecomeSeller },
];

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
