"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/components/providers/CartProvider";
import { useWishlist } from "@/components/providers/WishlistProvider";

type ProductActionsProps = {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
};

export default function ProductActions({ product }: ProductActionsProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const [quantity, setQuantity] = useState(1);
  const [showCartToast, setShowCartToast] = useState(false);
  const [showWishlistToast, setShowWishlistToast] = useState(false);
  const [wishlistMessage, setWishlistMessage] = useState("");

  const inWishlist = isInWishlist(product.id);

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }

    setShowCartToast(true);
  }

  function handleWishlistToggle() {
    if (inWishlist) {
      removeFromWishlist(product.id);
      setWishlistMessage("Removed from wishlist");
      setShowWishlistToast(true);
      return;
    }

    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    setWishlistMessage("Added to wishlist");
    setShowWishlistToast(true);
  }

  useEffect(() => {
    if (!showCartToast) return;

    const timer = window.setTimeout(() => {
      setShowCartToast(false);
    }, 2200);

    return () => window.clearTimeout(timer);
  }, [showCartToast]);

  useEffect(() => {
    if (!showWishlistToast) return;

    const timer = window.setTimeout(() => {
      setShowWishlistToast(false);
    }, 2200);

    return () => window.clearTimeout(timer);
  }, [showWishlistToast]);

  return (
    <>
      <div className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-900">
          Quantity
        </h2>

        <div className="mt-3 inline-flex items-center overflow-hidden rounded-xl border border-stone-300 bg-white">
          <button
            type="button"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="px-4 py-2 text-stone-700 transition hover:bg-stone-100"
            aria-label="Decrease quantity"
          >
            −
          </button>

          <span className="px-5 py-2 text-sm font-medium text-stone-900">
            {quantity}
          </span>

          <button
            type="button"
            onClick={() => setQuantity((prev) => prev + 1)}
            className="px-4 py-2 text-stone-700 transition hover:bg-stone-100"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <button
          type="button"
          onClick={handleAddToCart}
          className="rounded-xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
        >
          Add to Cart
        </button>

        <button
          type="button"
          onClick={handleWishlistToggle}
          className="rounded-xl border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-100"
        >
          {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      </div>

      {showCartToast ? (
        <div className="fixed bottom-6 right-6 z-50 rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-lg">
          <p className="text-sm font-semibold text-stone-900">
            Added to cart
          </p>
          <p className="mt-1 text-sm text-stone-600">
            {quantity} × {product.name}
          </p>
        </div>
      ) : null}

      {showWishlistToast ? (
        <div className="fixed bottom-24 right-6 z-50 rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-lg">
          <p className="text-sm font-semibold text-stone-900">
            {wishlistMessage}
          </p>
          <p className="mt-1 text-sm text-stone-600">{product.name}</p>
        </div>
      ) : null}
    </>
  );
}