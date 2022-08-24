import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../sections/banner";
import ServicesTest from "../sections/service-test";
import Services from "../sections/services";
import ServicesCarousel from "../sections/services-carousel";
import Technologies from "../sections/technologies";

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Banner />
      <Technologies />

      <Services />
      <ServicesTest />
      <ServicesCarousel />
      {/* <section className="w-full text-center ">
        <Image src={logo} alt="Naremis Logo" height={100} width={300} />
        <h1 className="text-xl font-small"> Coming Soon...</h1>
        <div></div>
      </section> */}
    </Layout>
  );
}
