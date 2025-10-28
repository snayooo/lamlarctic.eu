import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-black w-full flex justify-center py-4">
      <div className="text-center w-full max-w-screen-lg px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-2 md:gap-4 mb-2 pb-2 text-lg underline">
          <Link
            href="/mentions-legales"
          >
            Mentions Légales
          </Link>
          <Link
            href="/politique-de-confidentialite"
          >
            Politique de Confidentialité
          </Link>
          <Link
            href="/#contact"
          >
            Contact
          </Link>
        </div>
        <p className="text-sm md:text-base">Copyright &copy; 2025-2026</p>
      </div>
    </footer>
  );
}
