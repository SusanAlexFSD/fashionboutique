"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/components/providers/CartProvider";

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  function handleAddToCart() {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    setShowToast(true);
  }

  useEffect(() => {
    if (!showToast) return;

    const timer = window.setTimeout(() => {
      setShowToast(false);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [showToast]);

  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <Link href={`/product/${product.id}`}>
          <div className="aspect-[4/5] overflow-hidden bg-stone-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
        </Link>

        <div className="p-5">
          <p className="text-sm text-stone-500">{product.category}</p>

          <Link href={`/product/${product.id}`}>
            <h3 className="mt-1 text-lg font-semibold text-stone-900 hover:text-stone-700">
              {product.name}
            </h3>
          </Link>

          <p className="mt-2 text-base font-medium text-stone-800">
            £{product.price.toFixed(2)}
          </p>

          <p className="mt-3 line-clamp-2 text-sm leading-6 text-stone-600">
            {product.description}
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full rounded-xl bg-stone-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Add to Cart
            </button>

            <Link
              href={`/product/${product.id}`}
              className="w-full rounded-xl border border-stone-300 px-4 py-3 text-center text-sm font-medium text-stone-800 transition hover:bg-stone-100"
            >
              View Product
            </Link>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-6 right-6 z-[9999] rounded-xl bg-stone-900 px-4 py-3 text-sm font-medium text-white shadow-xl">
          Added to cart
        </div>
      )}
    </>
  );
}