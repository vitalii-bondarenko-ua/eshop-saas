import './global.css';
import { Header } from './shared/widgets';

export const metadata = {
  title: 'Eshop',
  description: 'Eshop saas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
