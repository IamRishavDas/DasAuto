export const TestimonialCard = ({ testimonial }) => (
  <div className="bg-gray-800 rounded-xl p-6">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-lg">
          {testimonial.author.charAt(0)}
        </span>
      </div>
      <div className="ml-4">
        <p className="text-white font-semibold">{testimonial.author}</p>
      </div>
    </div>
    <p className="text-gray-300 italic">"{testimonial.text}"</p>
    <div className="flex text-yellow-400 mt-4">
      {[...Array(5)].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  </div>
);