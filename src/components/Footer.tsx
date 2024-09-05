import Logo from "../assets/logo.png";
import LinkedIn from "../assets/linkedin.png";
import X from "../assets/X.png";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";

export default function Footer() {
  return (
    <div className="bg-white mt-14 mx-12 md:mx-32 md:w-2/3">
      <img src={Logo} className="h-16 w-24 mb-6"></img>
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
          <span className="text-sm text-gray-500 font-inter mb-5">Careers</span>
          <span className="text-sm text-gray-500 font-inter">Blog</span>
        </div>

        <div className="basis-1/3 mt-5 flex flex-col">
          <h2 className="mb-6 text-base text-gray-900 font-semibold font-inter">
            Legal
          </h2>
          <span className="text-sm text-gray-500 font-inter mb-5">
            Privacy Policy
          </span>
          <span className="text-sm text-gray-500 font-inter">Terms of use</span>
        </div>
      </div>
      <div className="socials flex gap-4 mt-6">
        <img src={LinkedIn} alt="" className="h-4 " />
        <img src={X} alt="" className="h-4 " />
        <img src={Instagram} alt="" className="h-4 " />
        <img src={Facebook} alt="" className="h-4 " />
      </div>

      <hr className="border-gray-400 mt-20"></hr>

      <p className="text-left text-gray-500 mt-11 mb-24 font-inter">
        © Swervpay LLC 2024.
      </p>
    </div>
  );
}
