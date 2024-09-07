import Wallet from "../assets/wallet.svg";
export default function FirstCard() {
  return (
    <div className="bg-gray-300 h-auto flex flex-col md:flex-row items-center md:items-start p-4 md:p-8">
      <div className="w-full md:w-1/2">
        <img src={Wallet} className="w-full h-auto"></img>
      </div>
      <div className="w-full md:w-1/2 md:text-left text-center md:mt-60 mt-8 md:ml-9">
        <h2 className="text-gray-800 text-3xl md:text-6xl font-jost">
          Make Transfers &
        </h2>
        <h2 className="text-violet-600 text-3xl md:text-6xl font-jost mt-4 md:mt-5">
          Bill Payments.
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-xs md:max-w-md mx-auto md:mx-0 mt-5 font-inter mb-4">
          Swyft provides a fast, affordable, and secure payment solution that
          enables users to transact in local Nigerian Naira and receive money in
          USD, GBP, EUR, and digital currencies.
        </p>
      </div>
    </div>
  );
}
