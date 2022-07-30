import Footer from './footer/footer';
import Header from './header/header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main
        className="header relative pt-16 items-center flex h-screen	"
        style={{ height: 601 }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
