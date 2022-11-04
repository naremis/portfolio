import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../sections/banner";
import ServicesTest from "../sections/service-test";
import Services from "../sections/services";
import WhyUsSection from "../sections/why-us";
import Technologies from "../sections/technologies";
import Team from "../sections/team";
import Portfolio from "../sections/portfolio";
import { AppWrapper } from "../context";

export default function Home() {
  return (
    <AppWrapper>
      <Layout>
        <SEO />
        <Banner />
        <Technologies />
        <WhyUsSection />
        <Services />
        <Team />
        <Portfolio />
      </Layout>
    </AppWrapper>
  );
}
