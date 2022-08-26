import Link from "next/link";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="py-24 text-white bg-black">
      <Container>
        <div className="text-7xl md:text-[5vw] uppercase font-heading text-center mb-12 md:mb-6">Antlur</div>
        <nav className="flex flex-col items-center justify-center w-full space-y-6 text-2xl font-extrabold text-right md:space-y-0 md:space-x-6 md:flex-row">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="pt-12 text-center">&copy; {new Date().getFullYear()} Antlur, LLC. All rights reserved.</div>
      </Container>
    </footer>
  );
}
