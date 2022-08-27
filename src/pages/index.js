import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../sections/banner";
import ServicesTest from "../sections/service-test";
import Services from "../sections/services";
import WhyUsSection from "../sections/why-us";
import Technologies from "../sections/technologies";

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Banner />
      <Technologies />
      <WhyUsSection />
      <Services />
    </Layout>
  );
}
