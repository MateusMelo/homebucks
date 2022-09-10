import NavBar from "./NavBar"
import Social from "./Social"
import Policies from "./Policies"
import Copyright from "./Copyright"

export default function Footer() {
  return (
    <footer className="py-[2.4rem] shadow-[0_0_0.2em_rgba(0,0,0,0.4)]">
      <nav className="2xl:px-0 sm:px-[1.6rem] md:px-12 mx-auto max-w-[1440px]">
        <NavBar></NavBar>
        <hr className="h-[2px] border-0 bg-black opacity-5 my-12" />
        <Social></Social>
        <Policies></Policies>
        <Copyright></Copyright>
      </nav>
    </footer>
  );
}
