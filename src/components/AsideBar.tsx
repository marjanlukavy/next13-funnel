import Image from "next/image";
import NavLink from "./HomePage/NavLink";

import Stepper from "./Steps/Stepper";

const AsideBar = () => {
  return (
    <aside className="md:shadow-aside z-40 w-full md:w-64 md:h-screen">
      <div className="h-full md:pt-[42px] pb-5 md:py-4 pt-[72px] md:overflow-y-auto bg-[#101313] relative">
        <div className="md:ml-[26px] flex flex-col gap-3 items-center md:items-start">
          <NavLink href="/">Home</NavLink>
          <Stepper />
        </div>
        <div className="absolute bottom-0 hidden md:block">
          <Image src="/gradient.svg" alt="me" width="260" height="160" />
        </div>
      </div>
    </aside>
  );
};

export default AsideBar;
