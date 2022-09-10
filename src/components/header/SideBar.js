export default function SideBar() {
  return (
    <div className="ml-auto">
      <div className="md:hidden sm:mr-[1rem]">
        <svg
          className="sm:w-[24px] sm:h-[24px]"
          focusable="false"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path d="M21,12.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,12.9,21,12.9z"></path>
          <path d="M21,6.9H3C2.5,6.9,2.1,6.5,2.1,6S2.5,5.1,3,5.1h18c0.5,0,0.9,0.4,0.9,0.9S21.5,6.9,21,6.9z"></path>
          <path d="M21,18.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,18.9,21,18.9z"></path>
          <circle cx="50%" cy="50%" fill="transparent" r="75%"></circle>
        </svg>
      </div>
      <div className="items-center sm:hidden md:flex">
        <a
          className="mr-[4rem] font-semibold text-slate-700 dark:text-slate-200 hover:text-[#00754a]"
          href="/"
        >
          <svg
            viewBox="0 0 24 24"
            className="align-middle w-[32px] h-[32px] pr-3 inline-block hover:text-[#00754a] overflow-visible fill-current"
          >
            <path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path>
          </svg>
          Find a store
        </a>
        <a
          href="/"
          className="mr-6 bg-transparent font-semibold py-2 px-6 border border-black rounded-full hover:bg-black/[.06]"
        >
          Sign in
        </a>
        <a
          href="/"
          className="bg-transparent font-semibold py-2 px-6 border text-white border-black bg-black rounded-full hover:bg-black/[.7] hover:border-black/[.7]"
        >
          Join now
        </a>
      </div>
    </div>
  );
}
