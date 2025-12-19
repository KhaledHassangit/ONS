"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Links from "@/components/header/links";
import Logo from "@/components/header/logo";
import HeaderButton from "@/components/header/header-button";
import { usePathname, useRouter } from "next/navigation";

function Header({bgColor ="#fff"}) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    console.log(pathname);
  } , [pathname])

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={pathname == "/who-we-are" ?{backgroundColor:"rgba(0,0,0,0.2)"} : {backgroundColor:"white"}}
      className={`fixed w-full ${pathname == "/who-we-are" ? " border-b border-[rgba(0,0,0,0.02)]" : "bg-white border-b border-[#D1D1DB]"} top-0 left-0 right-0 z-50    py-[14.29px] px-4 md:px-[120px]`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-[32px]">
          <Logo />
          <div className="hidden md:block">
            <Links />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-[8px]">


          <HeaderButton
            bgColor="transparent"
            color={pathname=="/who-we-are" ?"#ffffff" :"#1D2939"}
            cursor="pointer"
            padding="8px 20px"
            rounded="8px"
            fontSize="16px"
            fontWeight="500"
            onClick={() => router.push("/register")}

          >
            Sign up
          </HeaderButton>
          <HeaderButton
            bgColor="#F59331"
            color="#ffffff"
            cursor="pointer"
            padding="8px 20px"
            rounded="8px"
            fontSize="16px"
            fontWeight="500"
            onClick={() => router.push("/login")}
          >
            Login
          </HeaderButton>
        </div>

        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-[#D1D1DB] "
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Links />
              <div className="flex flex-col gap-2">
                <HeaderButton
                  bgColor="transparent"
                  color={"#1D2939"}
                  cursor="pointer"
                  padding="12px 42px"
                  rounded="8px"
                  fontSize="16px"
                  fontWeight="500"
                  onClick={() => router.push("/register")}
                >
                  Sign up
                </HeaderButton>
                <HeaderButton
                  bgColor="#F59331"
                  color="#ffffff"
                  cursor="pointer"
                  padding="12px 42px"
                  rounded="8px"
                  fontSize="16px"
                  fontWeight="500"
                  onClick={() => router.push("/login")}
                >
                  Login
                </HeaderButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
