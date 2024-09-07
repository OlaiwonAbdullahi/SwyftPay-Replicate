import VCard from "../assets/vcard_banner.png";

export default function SecondCard() {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center md:items-start p-4 md:p-8">
      <div className="w-full md:w-1/2 md:text-left text-center md:mt-36 mt-8 md:ml-9">
        <h2 className="text-gray-800 text-3xl md:text-6xl font-jost">
          Checkout with ease
        </h2>
        <h2 className="text-violet-600 text-3xl md:text-6xl font-jost mt-4 md:mt-5">
          on 50+ websites.
        </h2>

        <p className="text-gray-500 text-sm md:text-base max-w-xs md:max-w-md mx-auto md:mx-0 mt-5 font-inter mb-4">
          Swyft provides a fast, affordable, and secure payment solution that
          enables users to transact in local Nigerian Naira and receive money in
          USD, GBP, EUR, and digital currencies.
        </p>
      </div>
      <div className="w-full md:w-1/2 md:mt-28 mt-10">
        <img src={VCard} className="w-2/3 md:w-1/2 mx-auto h-auto"></img>
      </div>
    </div>
  );
}
