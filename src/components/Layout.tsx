import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingButtons } from './FloatingButtons';
import { ScrollRestoration } from 'react-router-dom';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[72px] md:pt-[88px]">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
      <ScrollRestoration />
    </div>
  );
}
