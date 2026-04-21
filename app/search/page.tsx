import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/api";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q?.trim().toLowerCase() || "";

  const products = await getProducts();

  const filteredProducts = query
    ? products.filter((product) => {
        const searchableText = [
          product.name,
          product.category,
          product.description,
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(query);
      })
    : [];

  return (
    <main className="min-h-screen bg-[#f7f1ea]">
      <PageHero
        title="Search"
        subtitle="Find the pieces that match your style."
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <form action="/search" method="GET" className="mb-8">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="text"
              name="q"
              defaultValue={params.q || ""}
              placeholder="Search for dresses, bags, watches..."
              className="w-full rounded-2xl border border-stone-300 bg-white px-5 py-4 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-500"
            />

            <button
              type="submit"
              className="rounded-2xl bg-stone-900 px-6 py-4 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Search
            </button>
          </div>
        </form>

        {query ? (
          <div className="mb-8 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">
              Search Results
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              {filteredProducts.length} result
              {filteredProducts.length !== 1 ? "s" : ""} for "{params.q}"
            </p>
          </div>
        ) : (
          <div className="mb-8 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">
              Start your search
            </h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              Try searching by product name, category, or style.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {["dress", "shirt", "bag", "watch", "accessories"].map((term) => (
                <Link
                  key={term}
                  href={`/search?q=${term}`}
                  className="rounded-xl border border-stone-300 px-4 py-2 text-sm text-stone-700 transition hover:bg-stone-100"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        )}

        {query && filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : null}

        {query && filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-stone-300 bg-white p-12 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">
              No results found
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-stone-600">
              We couldn’t find anything matching "{params.q}". Try a different
              word or browse the full collection.
            </p>

            <Link
              href="/collections"
              className="mt-6 inline-block rounded-xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Browse Collection
            </Link>
          </div>
        ) : null}
      </section>
    </main>
  );
}
