import { data } from "../Data.tsx";
export default function Testimonials() {
  return (
    <div className="">
      <h2 className="text-center pt-5 text-4xl text-gray-900 font-jost font-semibold">
        Don't just take our word for it, take theirs
      </h2>
      <div className="flex flex-col md:flex-row gap-6 mx-auto justify-center max-w-7xl items-center mt-8">
        {data.map((card) => (
          <Cards card={card} />
        ))}
      </div>
    </div>
  );
}

function Cards({ card }) {
  return (
    <div className="border-2 rounded-lg h-auto card w-auto p-6 border-gray-800">
      <p>{card.para}</p>
      <hr style={{ color: "grey" }}></hr>
      <div className="">
        <p>{card.author}</p>
        <span></span>
      </div>
    </div>
  );
}
