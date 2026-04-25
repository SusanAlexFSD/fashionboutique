import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import SearchContent from "@/components/SearchContent";

function SearchFallback() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-stone-900">
          Start your search
        </h2>
        <p className="mt-2 text-sm leading-6 text-stone-600">
          Loading search...
        </p>
      </div>
    </section>
  );
}

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-[#f7f1ea]">
      <PageHero
        title="Search"
        subtitle="Find the pieces that match your style."
      />

      <Suspense fallback={<SearchFallback />}>
        <SearchContent />
      </Suspense>
    </main>
  );
}