import Image from 'next/image';
import logo from '../assets/logo.svg';
import Layout from '../components/layout';
import SEO from '../components/seo';
export default function Home() {
  return (
    <Layout>
      <SEO />
      <section className="w-full text-center">
        <Image src={logo} alt="Naremis Logo" height={100} width={300} />
        <h1 className="text-xl font-small"> Coming Soon...</h1>
        <div></div>
      </section>
    </Layout>
  );
}
