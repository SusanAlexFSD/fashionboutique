import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { getProducts } from "@/lib/api";

type CollectionsPageProps = {
  searchParams: Promise<{
    category?: string;
  }>;
};

function mapToMainCategory(value?: string) {
  if (!value) return "";

  const category = value.toLowerCase().trim();

  if (category === "women") return "women";
  if (category === "men") return "men";
  if (category === "accessories") return "accessories";

  if (category.startsWith("mens-")) {
    return "men";
  }

  if (
    category === "tops" ||
    category.startsWith("womens-dresses") ||
    category.startsWith("womens-shoes")
  ) {
    return "women";
  }

  if (
    category === "sunglasses" ||
    category.startsWith("mens-watches") ||
    category.startsWith("womens-watches") ||
    category.startsWith("womens-jewellery") ||
    category.startsWith("womens-bags")
  ) {
    return "accessories";
  }

  return "";
}

export default async function CollectionsPage({
  searchParams,
}: CollectionsPageProps) {
  const { category } = await searchParams;
  const products = await getProducts();

  const selectedCategory = mapToMainCategory(category);

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => mapToMainCategory(product.category) === selectedCategory
      )
    : products;

  const pageTitle = selectedCategory
    ? `${selectedCategory.charAt(0).toUpperCase()}${selectedCategory.slice(1)} Products`
    : "All Products";

  return (
    <main className="min-h-screen bg-[#f7f1ea]">
      <PageHero
        title="Collections"
        subtitle="Browse our latest pieces curated for timeless style and everyday elegance."
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-stone-900">Filters</h3>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-sm font-medium text-stone-900">Category</p>
                <div className="mt-3 space-y-2 text-sm text-stone-700">
                  <Link
                    href="/collections"
                    className={`block rounded px-2 py-1 ${
                      !selectedCategory ? "bg-stone-100 font-medium" : ""
                    }`}
                  >
                    All
                  </Link>

                  <Link
                    href="/collections?category=women"
                    className={`block rounded px-2 py-1 ${
                      selectedCategory === "women"
                        ? "bg-stone-100 font-medium"
                        : ""
                    }`}
                  >
                    Women
                  </Link>

                  <Link
                    href="/collections?category=men"
                    className={`block rounded px-2 py-1 ${
                      selectedCategory === "men"
                        ? "bg-stone-100 font-medium"
                        : ""
                    }`}
                  >
                    Men
                  </Link>

                  <Link
                    href="/collections?category=accessories"
                    className={`block rounded px-2 py-1 ${
                      selectedCategory === "accessories"
                        ? "bg-stone-100 font-medium"
                        : ""
                    }`}
                  >
                    Accessories
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-stone-900">Size</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      className="rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-700 hover:bg-stone-100"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-stone-900">Price</p>
                <p className="mt-2 text-sm text-stone-600">£20 — £100</p>
              </div>
            </div>
          </aside>

          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <SectionTitle
                title={pageTitle}
                subtitle={`${filteredProducts.length} items available`}
              />

              <select className="rounded-xl border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}