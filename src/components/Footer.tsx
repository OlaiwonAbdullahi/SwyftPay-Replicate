import Logo from "../assets/logo.png";
export default function Footer() {
  return (
    <div className="bg-white mt-14 mx-12 md:mx-32 md:w-2/3">
      <img src={Logo} className="h-16 w-24 mb-4"></img>
      <div className=" flex gap-3">
        <div className="basis-1/3 mt-5">
          <h2 className="mb-6 text-base text-gray-900 font-semibold font-inter">
            Products
          </h2>
          <span className="text-sm text-gray-500 font-inter">Getfiat</span>
        </div>

        <div className="basis-1/3 mt-5 flex flex-col">
          <h2 className="mb-6 text-base text-gray-900 font-semibold font-inter">
            Company
          </h2>
          <span className="text-sm text-gray-500 font-inter">Careers</span>
          <span className="text-sm text-gray-500 font-inter">Blog</span>
        </div>

        <div className="basis-1/3 mt-5 flex flex-col">
          <h2 className="mb-6 text-base text-gray-900 font-semibold font-inter">
            Legal
          </h2>
          <span className="text-sm text-gray-500 font-inter">
            Privacy Policy
          </span>
          <span className="text-sm text-gray-500 font-inter">Terms of use</span>
        </div>
      </div>
    </div>
  );
}
