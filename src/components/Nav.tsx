export default function Nav() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex item-center justify-between">
        <div className="text-white text-2xl font-bold">Swyft Pay</div>

        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Service
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
