"use client";

import { useState } from "react";
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
  }

  function handleWishlistToggle() {
    if (inWishlist) {
      removeFromWishlist(product.id);
      return;
    }

    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  }

  return (
    <>
      <div className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-900">
          Quantity
        </h2>

        <div className="mt-3 inline-flex items-center overflow-hidden rounded-xl border border-stone-300">
          <button
            type="button"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="px-4 py-2 text-stone-700 hover:bg-stone-100"
          >
            -
          </button>

          <span className="px-5 py-2 text-sm font-medium text-stone-900">
            {quantity}
          </span>

          <button
            type="button"
            onClick={() => setQuantity((prev) => prev + 1)}
            className="px-4 py-2 text-stone-700 hover:bg-stone-100"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <button
          type="button"
          onClick={handleAddToCart}
          className="rounded-xl bg-stone-900 px-6 py-3 text-sm font-medium text-white hover:bg-stone-800"
        >
          Add to Cart
        </button>

        <button
          type="button"
          onClick={handleWishlistToggle}
          className="rounded-xl border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 hover:bg-stone-100"
        >
          {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </>
  );
}