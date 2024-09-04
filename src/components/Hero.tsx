import HeroImg from "../assets/hero.svg";
export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row w-auto h-auto">
      <div className=" text-center basis-1/3 justify-center mt-4">
        <div className="flex gap-2 bg-violet-200 rounded-2xl h-8 w-52 pt-1 mx-auto mb-5 mt-7 md:mt-36">
          <span className="bg-violet-500 text-white rounded-xl ml-2 h-6 text-sm w-10">
            NEW
          </span>
          <p>Available only in 🇳🇬.</p>
        </div>
        <h2 className="text-4xl md:text-5xl text-slate-900 font-extrabold mt-3 font-jost">
          Global Remittance,
        </h2>
        <h2 className="text-4xl md:text-5xl md:pl-4 text-violet-700 font-extrabold mt-3 font-jost">
          Made Easy.
        </h2>
      </div>
      <div className=" flex md:items-end items-center basis-2/3 justify-end">
        <img src={HeroImg}></img>
      </div>
    </div>
  );
}
