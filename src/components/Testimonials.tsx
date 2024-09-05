import { data } from "../Data.tsx";
import Arrow from "../assets/arrow.png";

export default function Testimonials() {
  return (
    <div className="px-4">
      <h2 className="text-center pt-5 text-3xl md:text-4xl text-gray-900 font-jost font-semibold">
        Don't just take our word for it, take theirs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto justify-center max-w-7xl items-center mt-11">
        {data.map((card, index) => (
          <Cards key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

function Cards({ card }) {
  return (
    <div className="border-2 rounded-lg h-auto card w-full  border-gray-800 bg-white">
      <p className="text-gray-700 font-inter text-sm m-4">{card.para}</p>
      <hr className="my-4 border-gray-900 w-full mx-0" />
      <div className="text-left flex">
        <p className="text-gray-700 font-inter ml-4 mb-4">{card.author}</p>
        <span className="items-end ml-auto">
          <img src={Arrow} className="h-6 w-6"></img>
        </span>
      </div>
    </div>
  );
}
