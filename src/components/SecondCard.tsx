import VCard from "../assets/vcard_banner.png";

export default function SecondCard() {
  return (
    <div className="bg-white flex flex-col md:flex-row">
      <div className="basis-1/2 md:text-left text-center md:mt-36 mt-5 ml-9">
        <h2 className="text-gray-800 text-4xl md:text-6xl font-jost">
          Checkout with ease
        </h2>
        <h2 className="text-violet-600 text-4xl md:text-6xl font-jost mt-5">
          on 50+ websites.
        </h2>

        <p className="text-gray-500 w-96 flex mx-auto md:mx-0 mt-5 font-inter mb-4">
          Swyft provides a fast, affordable, and secure payment solution that
          enables users to transact in local Nigerian Naira and receive money in
          USD, GBP, EUR and digital currencies.
        </p>
      </div>
      <div className="basis-1/2 md:mt-28 ml-9">
        <img src={VCard} className="w-2/3 mx-auto flex"></img>
      </div>
    </div>
  );
}
