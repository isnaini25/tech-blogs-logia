import Footer from './Footer';
import MainNavigation from './MainNavigation';

export default function Layout({ children }) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
