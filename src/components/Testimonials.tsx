import { data } from "../Data.tsx";
export default function Testimonials() {
  return (
    <div className="">
      <h2 className="text-center pt-5 text-4xl text-gray-900 font-jost font-semibold">
        Don't just take our word for it, take theirs
      </h2>
      <div className="flex flex-col md:flex-row gap-6 mx-auto justify-center max-w-7xl items-center mt-8">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="border-2 rounded-lg h-auto card w-auto p-6">
      <p>
        It finally got swyft at this end Thank you @swyftpay_io for making my X
        blue payment swift It is the way your Customer Service officer was
        available to ensure I get the issue resolved
      </p>
      <hr></hr>
      <div className="">
        <p>@Ara2spicy</p>
        <span></span>
      </div>
    </div>
  );
}
