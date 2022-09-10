import Logo from "./Logo";
import SideBar from "./SideBar";

export default function NavBar() {
  return (
    <div className="sm:px-[1.6rem] md:px-[2.4rem] lg:px-[4rem] xl:px-0 flex items-center">
      <Logo></Logo>
      <nav>
        <ul className="sm:hidden md:flex tracking-[.1em] uppercase font-semibold">
          <li>
            <a
              className="md:py-[3.2rem] lg:py-[4rem] inline-block hover:text-[#00754a]"
              href="/"
            >
              Menu
            </a>
          </li>
          <li className="pl-8">
            <a
              className="md:py-[3.2rem] lg:py-[4rem] inline-block hover:text-[#00754a]"
              href="/"
            >
              Rewards
            </a>
          </li>
          <li className="pl-8">
            <a
              className="md:py-[3.2rem] lg:py-[4rem] inline-block hover:text-[#00754a]"
              href="/"
            >
              Gift Cards
            </a>
          </li>
        </ul>
      </nav>
      <SideBar></SideBar>
    </div>
  );
}
