"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useWishlist } from "@/components/providers/WishlistProvider";
import { useCart } from "@/components/providers/CartProvider";
import { getProducts } from "@/lib/api";

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

export default function WishlistContent() {
  const { wishlist, removeFromWishlist, addToWishlist, isInWishlist } =
    useWishlist();
  const { addToCart } = useCart();

  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [showShareToast, setShowShareToast] = useState(false);
  const [showCartToast, setShowCartToast] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const products = await getProducts();
      setRecommendedProducts(products.slice(0, 4));
    }

    loadProducts();
  }, []);

  function handleShareWishlist() {
    const ids = wishlist.map((item) => item.id).join(",");

    const baseUrl =
      typeof window !== "undefined" ? window.location.origin : "";

    const shareUrl = `${baseUrl}/fashionboutique/wishlist?items=${ids}`;

    navigator.clipboard.writeText(shareUrl);

    setShowShareToast(true);

    window.setTimeout(() => {
      setShowShareToast(false);
    }, 2500);
  }

  function handleAddToCart(product: {
    id: string;
    name: string;
    price: number;
    image: string;
  }) {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    setShowCartToast(true);

    window.setTimeout(() => {
      setShowCartToast(false);
    }, 2200);
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-stone-900">
              Saved Items
            </h2>
            <p className="mt-1 text-sm text-stone-600">
              You have {wishlist.length} item{wishlist.length !== 1 ? "s" : ""}{" "}
              in your wishlist.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/collections"
              className="rounded-xl border border-stone-300 px-5 py-3 text-center text-sm font-medium text-stone-800 transition hover:bg-stone-100"
            >
              Continue Shopping
            </Link>

            <button
              type="button"
              onClick={handleShareWishlist}
              className="rounded-xl bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Share Wishlist
            </button>
          </div>
        </div>

        {wishlist.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-stone-300 bg-white p-12 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">
              Your wishlist is empty
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-stone-600">
              Start exploring our latest collection and save the pieces you love.
            </p>
            <Link
              href="/collections"
              className="mt-6 inline-block rounded-xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Browse Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[4/5] bg-stone-100">
                  <Link href={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </Link>

                  <button
                    type="button"
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-stone-700 shadow-sm hover:bg-white"
                  >
                    Remove
                  </button>
                </div>

                <div className="p-5">
                  <p className="text-sm text-stone-500">Wishlist Item</p>

                  <Link href={`/product/${product.id}`}>
                    <h3 className="mt-1 text-lg font-semibold text-stone-900 hover:text-stone-700">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="mt-2 text-base font-medium text-stone-800">
                    £{product.price.toFixed(2)}
                  </p>

                  <div className="mt-5 flex flex-col gap-3">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className="rounded-xl bg-stone-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
                    >
                      Add to Cart
                    </button>

                    <Link
                      href={`/product/${product.id}`}
                      className="rounded-xl border border-stone-300 px-4 py-3 text-center text-sm font-medium text-stone-800 transition hover:bg-stone-100"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-stone-900">
            You May Also Like
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            Explore more timeless pieces you might want to save.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recommendedProducts.map((product) => {
              const saved = isInWishlist(product.id);

              return (
                <div
                  key={`recommended-${product.id}`}
                  className="overflow-hidden rounded-2xl border border-stone-200 bg-[#f7f1ea]"
                >
                  <Link href={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-64 w-full object-cover"
                    />
                  </Link>

                  <div className="p-4">
                    <p className="text-sm text-stone-500 capitalize">
                      {product.category}
                    </p>

                    <Link href={`/product/${product.id}`}>
                      <h3 className="mt-1 text-lg font-semibold text-stone-900 hover:text-stone-700">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="mt-2 text-base font-medium text-stone-800">
                      £{product.price.toFixed(2)}
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        if (!saved) {
                          addToWishlist({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                          });
                        }
                      }}
                      className="mt-4 rounded-xl border border-stone-300 px-4 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-100"
                    >
                      {saved ? "Saved" : "Save Item"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {showShareToast ? (
        <div className="fixed bottom-6 right-6 z-50 rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-lg">
          <p className="text-sm font-semibold text-stone-900">
            Wishlist link copied
          </p>
          <p className="mt-1 text-sm text-stone-600">
            You can now share your saved items.
          </p>
        </div>
      ) : null}

      {showCartToast ? (
        <div className="fixed bottom-24 right-6 z-50 rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-lg">
          <p className="text-sm font-semibold text-stone-900">Added to cart</p>
          <p className="mt-1 text-sm text-stone-600">
            Item added successfully.
          </p>
        </div>
      ) : null}
    </>
  );
}