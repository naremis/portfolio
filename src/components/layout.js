import Footer from "./footer/footer";
import Header from "./header/header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="header relative pt-16 items-center h-screen table w-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
