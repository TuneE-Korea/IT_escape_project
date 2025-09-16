"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  return (
    <header>
      <nav className="container mx-auto py-5 flex justify-between items-center">
        <motion.div whileTap={{ scale: 0.8 }}>
          <Link href={"/"} className="font-vitroInspire">
            IT_ESCAPE
          </Link>
        </motion.div>
        <Menu className="md:hidden" />
        <ul className="hidden md:flex justify-between items-center gap-10">
          <li>
            <motion.div whileTap={{ scale: 0.8 }}>
              <Link className="font-vitroInspre" href={"/rooms"}>
                ROOMS
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div whileTap={{ scale: 0.8 }}>
              <Link href={"/books"}>BOOKS</Link>
            </motion.div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
