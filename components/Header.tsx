import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/sizing-chart", label: "Sizing Chart" },
];

const basePath = process.env.NODE_ENV === "production" ? "/fashionboutique" : "";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#f7f1ea]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center">
          <Image
            src={`${basePath}/images/logo.png`}
            alt="Logo"
            width={180}
            height={60}
            className="h-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-700 transition hover:text-stone-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/search"
            className="text-sm font-medium text-stone-700 transition hover:text-stone-950"
          >
            Search
          </Link>

          <Link
            href="/cart"
            className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-100"
          >
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
}