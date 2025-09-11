import { Menu } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b">
      <nav className="container mx-auto py-5 flex justify-between items-center">
        <Link href={"/"}>IT_ESCAPE</Link>
        <Menu className="md:hidden" />
        <ul className="hidden md:flex justify-between items-center gap-10">
          <li>
            <Link href={"/rooms"}>ROOMS</Link>
          </li>
          <li>
            <Link href={"/books"}>BOOKS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
