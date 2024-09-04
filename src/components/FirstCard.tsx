import Wallet from "../assets/wallet.svg";
export default function FirstCard() {
  return (
    <div className="bg-gray-300 h-auto flex flex-col md:flex-row ">
      <div className="basis-1/2">
        <img src={Wallet} className="h-full"></img>
      </div>
      <div className=" md:text-left text-center md:mt-60 ml-9">
        <h2 className="text-gray-800 text-5xl md:text-6xl font-jost">
          Make Transfers &
        </h2>
        <h2 className="text-violet-600 text-5xl md:text-6xl font-jost">
          Bill Payments.
        </h2>
        <p className="text-gray-500 w-96 flex mx-auto md:mx-0 mt-3">
          Swyft provides a fast, affordable, and secure payment solution that
          enables users to transact in local Nigerian Naira and receive money in
          USD, GBP, EUR and digital currencies.
        </p>
      </div>
    </div>
  );
}
