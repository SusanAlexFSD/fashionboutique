"use client";

import Link from "next/link";
import { useCart } from "@/components/providers/CartProvider";

export default function CartContent() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  function decreaseQuantity(id: string) {
    const item = cart.find((cartItem) => cartItem.id === id);
    if (!item) return;

    updateQuantity(id, item.quantity - 1);
  }

  function increaseQuantity(id: string) {
    const item = cart.find((cartItem) => cartItem.id === id);
    if (!item) return;

    updateQuantity(id, item.quantity + 1);
  }

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 100 ? 0 : cart.length > 0 ? 4.99 : 0;
  const total = subtotal + shipping;

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      {cart.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-stone-300 bg-white p-12 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-stone-900">
            Your cart is empty
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-stone-600">
            Looks like you haven&apos;t added anything yet. Explore the collection
            and find something you love.
          </p>

          <Link
            href="/collections"
            className="mt-6 inline-block rounded-xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
          >
            Browse Collection
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="h-36 w-full overflow-hidden rounded-2xl bg-stone-100 sm:w-28">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-sm text-stone-500">Cart Item</p>
                      <h2 className="mt-1 text-xl font-semibold text-stone-900">
                        {item.name}
                      </h2>
                    </div>

                    <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="inline-flex items-center overflow-hidden rounded-xl border border-stone-300">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-4 py-2 text-stone-700 transition hover:bg-stone-100"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          -
                        </button>

                        <span className="px-5 py-2 text-sm font-medium text-stone-900">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => increaseQuantity(item.id)}
                          className="px-4 py-2 text-stone-700 transition hover:bg-stone-100"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm font-medium text-stone-500 transition hover:text-stone-900"
                        >
                          Remove
                        </button>

                        <p className="text-lg font-semibold text-stone-900">
                          £{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-stone-200 bg-[#efe4d6] p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-stone-900">
                Continue Shopping
              </h2>
              <p className="mt-2 text-sm leading-6 text-stone-700">
                Explore more styles and add more favourites to your basket.
              </p>

              <Link
                href="/collections"
                className="mt-4 inline-block rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-100"
              >
                Browse Collection
              </Link>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-stone-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4 text-sm text-stone-700">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `£${shipping.toFixed(2)}`}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Discount</span>
                  <span>- £0.00</span>
                </div>

                <div className="border-t border-stone-200 pt-4">
                  <div className="flex items-center justify-between text-base font-semibold text-stone-900">
                    <span>Total</span>
                    <span>£{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-[#f7f1ea] p-4">
                <label
                  htmlFor="promo"
                  className="mb-2 block text-sm font-medium text-stone-800"
                >
                  Promo Code
                </label>

                <div className="flex gap-3">
                  <input
                    id="promo"
                    type="text"
                    placeholder="Enter code"
                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400"
                  />
                  <button
                    type="button"
                    className="rounded-xl bg-stone-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
                  >
                    Apply
                  </button>
                </div>
              </div>

              <Link
                href="/checkout"
                className="mt-6 block rounded-2xl bg-stone-900 px-6 py-4 text-center text-sm font-medium text-white transition hover:bg-stone-800"
              >
                Proceed to Checkout
              </Link>

              <p className="mt-4 text-center text-xs leading-5 text-stone-500">
                Secure checkout and 30-day returns on eligible items.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-stone-900">
                Delivery Info
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-stone-700">
                <li>• Standard delivery in 3–5 business days</li>
                <li>• Free shipping on orders over £100</li>
                <li>• Easy returns within 30 days</li>
              </ul>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}