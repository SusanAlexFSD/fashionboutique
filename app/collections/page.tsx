import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import CollectionsContent from "@/components/CollectionsContent";
import { getProducts } from "@/lib/api";
import Link from "next/link";

function CollectionsFallback() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-stone-600">Loading collection...</p>
      </div>
    </section>
  );
}

export default async function CollectionsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-[#f7f1ea]">
      <PageHero
        title="Collections"
        subtitle="Browse our latest pieces curated for timeless style and everyday elegance."
      />

      <section className="mx-auto max-w-7xl px-6 pt-8">
        <div className="flex flex-col gap-4 rounded-3xl bg-[#efe4d6] p-6 shadow-sm sm:flex-row sm:items-center sm:justify-center">
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
      </section>

      <Suspense fallback={<CollectionsFallback />}>
        <CollectionsContent products={products} />
      </Suspense>
    </main>
  );
}