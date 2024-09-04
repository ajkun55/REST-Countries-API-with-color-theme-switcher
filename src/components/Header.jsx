import DarkModeSwitch from "./DarkModeSwitch";

function Header() {
  return (
    <div className="py-6 bg-White dark:bg-Dark-Mode-Elements shadow">
      <div className="flex items-center justify-between w-5/6 max-w-[1280px] mx-auto text-sm md:text-base">
        <h1 className="font-extrabold text-xl">Where in the world?</h1>
        <DarkModeSwitch />
      </div>
    </div>
  );
}

export default Header;
