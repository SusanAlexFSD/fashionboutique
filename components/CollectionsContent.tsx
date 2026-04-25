"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/components/providers/CartProvider";
import type { Product } from "@/lib/api";

type CollectionsContentProps = {
  products: Product[];
};

type SortOption = "popular" | "newest" | "price-low" | "price-high";

function mapToMainCategory(value?: string) {
  if (!value) return "";

  const category = value.toLowerCase().trim();

  if (category === "women") return "women";
  if (category === "men") return "men";
  if (category === "accessories") return "accessories";

  if (category.startsWith("mens-")) return "men";

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

export default function CollectionsContent({
  products,
}: CollectionsContentProps) {
  const searchParams = useSearchParams();
  const { addToCart } = useCart();

  const category = searchParams.get("category") ?? undefined;
  const selectedCategory = mapToMainCategory(category);

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showCartToast, setShowCartToast] = useState(false);
  const [cartToastProduct, setCartToastProduct] = useState("");

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((item) => item !== size)
        : [...prev, size]
    );
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    setCartToastProduct(product.name);
    setShowCartToast(true);

    window.setTimeout(() => {
      setShowCartToast(false);
    }, 2200);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter(
        (product) => mapToMainCategory(product.category) === selectedCategory
      );
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, selectedCategory, sortBy]);

  const pageTitle = selectedCategory
    ? `${selectedCategory.charAt(0).toUpperCase()}${selectedCategory.slice(
        1
      )} Products`
    : "All Products";

  const filterContent = (
    <div className="mt-6 space-y-6">
      <div>
        <p className="text-sm font-medium text-stone-900">Category</p>

        <div className="mt-3 space-y-2 text-sm text-stone-700">
          <Link
            href="/collections"
            onClick={() => setShowMobileFilters(false)}
            className={`block rounded px-2 py-1 transition ${
              !selectedCategory
                ? "bg-stone-100 font-medium"
                : "hover:bg-stone-50"
            }`}
          >
            All
          </Link>

          <Link
            href="/collections?category=women"
            onClick={() => setShowMobileFilters(false)}
            className={`block rounded px-2 py-1 transition ${
              selectedCategory === "women"
                ? "bg-stone-100 font-medium"
                : "hover:bg-stone-50"
            }`}
          >
            Women
          </Link>

          <Link
            href="/collections?category=men"
            onClick={() => setShowMobileFilters(false)}
            className={`block rounded px-2 py-1 transition ${
              selectedCategory === "men"
                ? "bg-stone-100 font-medium"
                : "hover:bg-stone-50"
            }`}
          >
            Men
          </Link>

          <Link
            href="/collections?category=accessories"
            onClick={() => setShowMobileFilters(false)}
            className={`block rounded px-2 py-1 transition ${
              selectedCategory === "accessories"
                ? "bg-stone-100 font-medium"
                : "hover:bg-stone-50"
            }`}
          >
            Accessories
          </Link>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-stone-900">Size</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {["XS", "S", "M", "L", "XL"].map((size) => {
            const isActive = selectedSizes.includes(size);

            return (
              <button
                key={size}
                type="button"
                onClick={() => toggleSize(size)}
                className={`rounded-lg border px-3 py-2 text-sm transition ${
                  isActive
                    ? "border-stone-900 bg-stone-900 text-white"
                    : "border-stone-300 text-stone-700 hover:bg-stone-100"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>

        <p className="mt-2 text-xs text-stone-500">
          Size buttons are visual for now unless your product data includes
          sizes.
        </p>
      </div>

      <div>
        <p className="text-sm font-medium text-stone-900">Price</p>
        <p className="mt-2 text-sm text-stone-600">£20 — £100</p>
      </div>
    </div>
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="hidden rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:block">
          <h3 className="text-lg font-semibold text-stone-900">Filters</h3>
          {filterContent}
        </aside>

        <div>
          <div className="mb-6 lg:hidden">
            <button
              type="button"
              onClick={() => setShowMobileFilters((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-2xl border border-stone-200 bg-white px-5 py-4 text-sm font-medium text-stone-900 shadow-sm"
            >
              <span>Filters</span>
              <span className="text-lg">{showMobileFilters ? "−" : "+"}</span>
            </button>

            {showMobileFilters ? (
              <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-stone-900">
                  Filters
                </h3>
                {filterContent}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-stone-900 sm:text-3xl">
                {pageTitle}
              </h2>
              <p className="mt-2 text-sm text-stone-600">
                {filteredProducts.length} items available
              </p>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="w-full rounded-xl border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700 outline-none sm:w-auto"
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 sm:rounded-3xl sm:p-4"
              >
                <Link href={`/product/${product.id}`} className="block">
                  <div className="overflow-hidden rounded-xl bg-stone-100 sm:rounded-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-44 w-full object-cover sm:h-80"
                    />
                  </div>

                  <div className="mt-3 sm:mt-4">
                    <p className="text-xs text-stone-500 capitalize sm:text-sm">
                      {product.category}
                    </p>

                    <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-stone-900 sm:text-lg">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-stone-900 sm:text-base">
                      £{product.price.toFixed(2)}
                    </p>
                  </div>
                </Link>

                <div className="mt-4 flex flex-col gap-2 sm:mt-5 sm:flex-row sm:gap-3">
                  <Link
                    href={`/product/${product.id}`}
                    className="flex-1 rounded-xl border border-stone-300 px-3 py-2 text-center text-xs font-medium text-stone-800 transition hover:bg-stone-100 sm:px-4 sm:py-3 sm:text-sm"
                  >
                    View Item
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 rounded-xl bg-stone-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-stone-800 sm:px-4 sm:py-3 sm:text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="mt-6 rounded-3xl border border-dashed border-stone-300 bg-white p-12 text-center shadow-sm">
              <h2 className="text-2xl font-semibold text-stone-900">
                No products found
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-stone-600">
                Try a different category or browse the full collection.
              </p>

              <Link
                href="/collections"
                className="mt-6 inline-block rounded-xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
              >
                View All Products
              </Link>
            </div>
          ) : null}
        </div>
      </div>

      {showCartToast ? (
        <div className="fixed bottom-6 right-4 z-50 rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-lg sm:right-6">
          <p className="text-sm font-semibold text-stone-900">Added to cart</p>
          <p className="mt-1 text-sm text-stone-600">{cartToastProduct}</p>
        </div>
      ) : null}
    </section>
  );
}