import GetFiatImg from "../assets/getfiat.svg";

export default function GetFiat() {
  return (
    <div className="mt-11 md:mt-24 bg-gray-200 rounded-xl md:rounded-3xl w-full md:w-2/3 flex flex-col items-center justify-center mx-auto py-6 px-4 md:px-10">
      {/* Heading */}
      <h2 className="text-center text-gray-900 font-jost text-2xl md:text-4xl font-semibold leading-normal mb-5">
        Receive Money From Anywhere <br className="hidden md:block" />
        with <span className="text-violet-600">GetFiat</span>
      </h2>

      {/* Description */}
      <p className="text-center text-gray-500 font-inter mb-4 md:mb-6 px-4 md:px-0 max-w-lg">
        Go borderless with the powerful GetFiat! Receive money from anywhere in
        the world in a matter of minutes.
      </p>

      {/* Button */}
      <button className="bg-violet-700 text-white h-11 px-4 font-inter mt-4 rounded-md">
        Start Receiving
      </button>

      {/* Image */}
      <img
        src={GetFiatImg}
        alt="GetFiat illustration"
        className="mt-6 h-auto w-4/5 md:w-3/5 mb-6"
      />
    </div>
  );
}
