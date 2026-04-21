import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { getProducts } from "@/lib/api";

export default async function HomePage() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#f7f1ea]">
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-3xl bg-[#d9b08c] px-6 py-12 md:px-10 md:py-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-700">
            New Season Collection
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
            Discover Your Style
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-800 md:text-lg">
            Elegant fashion, warm earthy tones, and timeless pieces for modern
            living.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/collections?category=women"
              className="rounded-xl bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Shop Women
            </Link>

            <Link
              href="/collections?category=men"
              className="rounded-xl bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Shop Men
            </Link>

            <Link
              href="/collections?category=accessories"
              className="rounded-xl bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Shop Accessories
            </Link>
          </div>
        </div>

        <section className="mt-14 md:mt-16">
          <SectionTitle
            title="Featured Products"
            subtitle="A curated selection of our most-loved pieces."
          />

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}