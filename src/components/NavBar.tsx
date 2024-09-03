import Logo from "../assets/logo.png";

export default function App() {
  return (
    <div className="flex items-stretch w-auto">
      <nav className="flex mt-3 flex-row">
        <div className="basis-1/3">
          <img src={Logo} alt="logo" className="h-16 items-start"></img>
        </div>

        <div>
          <ul className="  flex gap-3 pt-3 mx-auto items-center basis-1/3">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Product</a>
            </li>
          </ul>
        </div>

        <div className="items-end basis-1/3">
          <button className="mr-3 text-slate-900">Sign In</button>
          <button className="bg-violet-500 text-white h-11 w-28 rounded-md">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}
