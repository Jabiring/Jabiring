import Link from "next/link";
import { Button } from "./ui/button";

// Custom Components
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";


export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-semibold">
          Jabir Saidali
        </h1>
        <div className="hidden md:flex items-center gap-8">
          <Navbar/>
          <Link href={"/contact"}>
            <Button>Contact Me</Button>
          </Link>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}