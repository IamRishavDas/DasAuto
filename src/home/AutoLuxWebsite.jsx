import { HeroSection } from '../components/HeroSection';
import { FeaturedServices } from '../components/FeaturedServices';
import { TopSellingParts } from '../components/TopSellingParts';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { data } from '../data/AppData';



const AutoLuxWebsite = () => {

  return (
    <div className="min-h-screen bg-gray-800">
      <Header brand={data.brand} />
      <HeroSection heroSection={data.heroSection} />
      <FeaturedServices featuredServices={data.featuredServices} />
      <TopSellingParts topSellingParts={data.topSellingParts} />
      {/* <Testimonials testimonials={data.testimonials} /> */}
      <Footer footer={data.footer} />
    </div>
  );
};

export default AutoLuxWebsite;