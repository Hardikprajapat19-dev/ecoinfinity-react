
import HomeHero from "./HomeHero";
import ProductShowcase from "./ProductShowcase";
import ManufacturingFacility from "./ManufacturingFacility";
import WhoWeAre from "./WhoWeAre";
import StatsSection from "./StatsSection";
import WhyChooseUs from "./WhyChooseUs";
import CustomerSpeak from "./CustomerSpeak";
import ClientsServed from "./ClientsServed";
import InquirySection from "./InquirySection";
import "./Home.css";
function Home() {
  return (
    <>
      <HomeHero />
      <ProductShowcase />
      <ManufacturingFacility />
      <WhoWeAre />
      <StatsSection />
      <WhyChooseUs />
      <CustomerSpeak />
      <ClientsServed />
      <InquirySection />
    </>
  );
}

export default Home;