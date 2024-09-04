import GetFiatImg from "../assets/getfiat.svg";
export default function GetFiat() {
  return (
    <div className=" mt-11 md:mt-24 bg-gray-200 rounded-xl md:rounded-3xl md:w-2/3 items-center flex flex-col justify-center mx-auto  h-auto py-4 px-2 md:px-7">
      <h2 className="text-center text-gray-900 font-jost text-2xl md:text-4xl font-semibold leading-normal mb-5">
        Receive Money From Anywhere <br></br>with{" "}
        <span className="text-violet-600">GetFiat</span>
      </h2>

      <p className="text-center text-gray-500 font-inter mb-3">
        Go borderless with the powerful GetFiat! Receive money from anywhere in
        the world in matter of minutes
      </p>
      <button className="bg-violet-700 text-white h-11 w-auto px-3 font-inter mt-3 rounded-md">
        Start Receiving
      </button>
      <img src={GetFiatImg} className="mt-4 h-full w-4/5 md:w-auto mb-6"></img>
    </div>
  );
}
