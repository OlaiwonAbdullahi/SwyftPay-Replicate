import HeroImg from "../assets/hero.svg";
import Apple from "../assets/apple.svg";
import Play from "../assets/playstore.svg";
export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row w-auto h-auto bg-white">
      <div className=" text-center md:text-left basis-1/3 justify-center mt-4 md:ml-28">
        <div className="flex gap-2 bg-violet-200 rounded-2xl h-8 w-52 pt-1 mx-auto md:mx-1 mb-5 mt-7 md:mt-36">
          <span className="bg-violet-500 text-white rounded-xl font-inter ml-2 h-6 text-sm w-10 px-1">
            NEW
          </span>
          <p className="font-inter">Available only in 🇳🇬.</p>
        </div>
        <h2 className="text-4xl md:text-6xl whitespace-nowrap text-slate-900 font-extrabold mt-3 font-jost">
          Global Remittance,
        </h2>
        <h2 className="text-4xl md:text-6xl md:pl-4 text-violet-700 font-extrabold mt-3 font-jost">
          Made Easy.
        </h2>
        <p className=" font-inter text-center md:text-left mt-3 text-gray-600 w-96 items-center mx-auto md:mx-1">
          Make swift payments in any currency with multiple payment options.
          Gain financial freedom
        </p>

        <div className=" mt-4 flex md:gap-3 gap-1">
          <button className="p-2 rounded-md border-2 border-gray-800 w-48 h-14 flex gap-3 mx-auto md:mx-0 justify-center">
            <img src={Apple}></img>
            <span className="mt-1 text-gray-900 font-inter">Get on iPhone</span>
          </button>
          <button className="p-2 rounded-md border-2 border-gray-800 w-48 h-14 flex gap-3 mx-auto md:mx-0 justify-center">
            <img src={Play}></img>
            <span className="mt-1 text-gray-900 font-inter">
              Get on Android
            </span>
          </button>
        </div>
      </div>
      <div className=" flex md:items-end items-center basis-2/3 justify-end">
        <img src={HeroImg}></img>
      </div>
    </div>
  );
}
