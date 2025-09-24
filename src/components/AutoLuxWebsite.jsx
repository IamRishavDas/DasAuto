import { HeroSection } from './HeroSection';
import { FeaturedServices } from './FeaturedServices';
import { TopSellingParts } from './TopSellingParts';
import { Testimonials } from './Testimonials';
import { Footer } from './Footer';
import { Header } from './Header';



const AutoLuxWebsite = () => {
  const data = {
    "brand": {
      "name": "Das Auto",
      "logo": "icon_placeholder",
      "navigation": [
        {"label": "Services", "route": "/services"},
        {"label": "Parts", "route": "/parts"},
        {"label": "Bookings", "route": "/bookings"},
        {"label": "About Us", "route": "/about"},
        {"label": "Contact", "route": "/contact"}
      ],
      // "actions": [
      //   {"label": "Login", "type": "button", "variant": "outline", "route": "/login"},
      //   {"label": "Sign Up", "type": "button", "variant": "filled", "route": "/signup"}
      // ]
    },
    "heroSection": {
      "backgroundImage": "city_night_placeholder",
      "heading": "Elevate Your Drive",
      "subtitle": "Premium car servicing and parts for discerning drivers. Experience the future of automotive care.",
      "primaryAction": {
        "label": "Explore Services",
        "type": "button",
        "variant": "primary",
        "route": "/services"
      }
    },
    "featuredServices": {
      "title": "Featured Services",
      "cards": [
        {
          "image": "oil_change_placeholder",
          "title": "Oil Change",
          "description": "Keep your engine running smoothly with our expert oil change service."
        },
        {
          "image": "tire_rotation_placeholder",
          "title": "Tire Rotation",
          "description": "Ensure even wear and optimal performance with our professional tire rotation."
        },
        {
          "image": "diagnostics_placeholder",
          "title": "Diagnostics",
          "description": "Identify and resolve issues with our advanced diagnostic tools."
        }
      ]
    },
    "topSellingParts": {
      "title": "Top Selling Parts",
      "cards": [
        {
          "image": "brake_pads_placeholder",
          "title": "Brake Pads",
          "description": "High-performance pads."
        },
        {
          "image": "air_filters_placeholder",
          "title": "Air Filters",
          "description": "Premium engine air filters."
        },
        {
          "image": "engine_components_placeholder",
          "title": "Engine Components",
          "description": "Quality engine components."
        }
      ]
    },
    "testimonials": {
      "title": "What Our Customers Say",
      "cards": [
        {
          "avatar": "avatar_gold_placeholder",
          "text": "AutoLux's service is top-notch. My car has never run better!",
          "author": "Sarah M."
        },
        {
          "avatar": "avatar_male_placeholder",
          "text": "The parts I ordered were high quality and arrived quickly. Great experience.",
          "author": "David L."
        },
        {
          "avatar": "avatar_female_placeholder",
          "text": "I appreciate the professionalism and attention to detail. Highly recommend.",
          "author": "Emily R."
        }
      ]
    },
    "footer": {
      "links": [
        {"label": "Privacy Policy", "route": "/privacy"},
        {"label": "Terms of Service", "route": "/terms"},
        {"label": "Contact Us", "route": "/contact"}
      ],
      "copyright": "© 2024 Das Auto. All rights reserved.",
      "social": [
        {"icon": "twitter", "route": "#"},
        {"icon": "instagram", "route": "#"},
        {"icon": "facebook", "route": "#"}
      ]
    }
  };

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