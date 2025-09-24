import { TestimonialCard } from './TestimonialCard';


export const Testimonials = ({ testimonials }) => (
  <section className="bg-gray-800 py-16 px-6">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        {testimonials.title}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.cards.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  </section>
);