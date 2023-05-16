import React from "react";
import Link from "next/link"; // Import the Link component from next/link

const NavLink = ({ href, children }: { href: string; children: string }) => {
  return (
    <Link
      href={href}
      className={`mt-2 font-medium rounded-[10px] text-[16px] leading-[22px] py-1 px-4 text-center border border-white hover:bg-white hover:text-black hover:border-white text-white focus:outline-none`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
