"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const links = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/#a-propos" },
    { name: "Notre aventure", href: "/#notre-aventure" },
    { name: "Sponsors", href: "/#sponsors" },
    { name: "Contact", href: "/#contact" },
  ];

  // Disable scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu with fade-out
  const closeMenu = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setIsMenuOpen(false);
    }, 100); // duration matches the transition in tailwind
  };

  return (
    <>
      {/* Mobile Menu */}
      <nav
        className={`
          fixed top-0 left-0 w-full h-[75%] z-60 bg-white backdrop-blur-lg flex flex-col items-center justify-start pt-8 px-4 transform transition-all duration-300 border-b-2 border-black
          ${
            isMenuOpen || isAnimating
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
      >
        <button
          onClick={closeMenu}
          className="absolute top-6 left-6 text-black"
        >
          <FiX size={"2rem"} />
        </button>

        <div className="absolute top-24 right-10 text-right">
          {links.map((link) => (
            <div key={link.name} className="mt-6">
              <Link href={link.href} onClick={closeMenu}>
                <p className="text-2xl font-medium hover:underline transition-all duration-200">
                  {link.name}
                </p>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 absolute bottom-10">
          <Link href="https://instagram.com/lamlarctic" target="_blank">
            <FaInstagram size={"2rem"} />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61582230016401" target="_blank">
            <FaFacebook size={"2rem"} />
          </Link>
          <Link href="https://gofund.me/e8f116bc7" target="_blank">
            <BiDonateHeart size={"2rem"} />
          </Link>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90vw] md:w-[80vw] h-16 border-[1.5px] border-black rounded-full flex items-center justify-between px-5 bg-white/40 backdrop-blur-lg z-50">
        {/* Logo placeholder */}

        <Link href="/" className="-ml-5">
          <Image
          src="/assets/logo.png"
          alt="Logo"
          width={62}
          height={62}
          className="object-contain rounded-full"
        />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="mx-4">
              <p className="relative inline-block group text-black text-lg">
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-3xl"
          aria-label="Toggle Menu"
        >
          <FiMenu />
        </button>
      </nav>
    </>
  );
}
