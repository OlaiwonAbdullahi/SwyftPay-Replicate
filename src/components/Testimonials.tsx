import { data } from "../Data.tsx";
import Arrow from "../assets/arrow.png";

export default function Testimonials() {
  return (
    <div className="px-4 py-8 bg-gray-100">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-4xl text-gray-900 font-jost font-semibold leading-tight">
        Don't just take our word for it, take theirs
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto justify-center max-w-7xl mt-10">
        {data.map((card, index) => (
          <Cards key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

function Cards({ card }) {
  return (
    <div className="border-2 rounded-lg shadow-lg bg-white p-5 h-auto w-full border-gray-800">
      {/* Testimonial Text */}
      <p className="text-gray-700 font-inter text-sm md:text-base mb-6">
        {card.para}
      </p>

      {/* Divider */}
      <hr className="border-gray-900 mx-0" />

      {/* Author and Icon */}
      <div className="flex justify-between items-center">
        <p className="text-gray-700 font-inter">{card.author}</p>
        <img src={Arrow} alt="Arrow Icon" className="h-6 w-6" />
      </div>
    </div>
  );
}
