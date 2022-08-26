import Link from "next/link";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";

function NavLinks() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </>
  );
}

export default function Header() {
  return (
    <header className="flex items-center w-full py-6 text-white">
      <div className="w-14">
        <Link href="/" title="Home">
          LOGO
        </Link>
      </div>
      <div className="justify-end flex-grow w-full text-right md:block">
        <div className="md:hidden">
          <MobileNav />
        </div>
        <nav className="justify-end hidden w-full space-x-6 text-2xl font-extrabold text-right md:flex">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}

function MobileNav() {
  const hamburgerSize = 36;
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  const iconHeightandWidth = {
    height: hamburgerSize,
    width: hamburgerSize,
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        {isOpen ? <Cross1Icon {...iconHeightandWidth} /> : <HamburgerMenuIcon {...iconHeightandWidth} />}
      </button>
      {isOpen && (
        <nav className="flex flex-col justify-end w-full space-y-6 text-2xl font-extrabold text-right">
          <NavLinks />
        </nav>
      )}
    </>
  );
}
