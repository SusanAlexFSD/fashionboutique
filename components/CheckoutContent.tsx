"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/components/providers/CartProvider";

type DeliveryMethod = "standard" | "express";

export default function CheckoutContent() {
  const router = useRouter();
  const { cart, clearCart } = useCart();

  const [deliveryMethod, setDeliveryMethod] =
    useState<DeliveryMethod>("standard");

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping =
    cart.length === 0 ? 0 : deliveryMethod === "express" ? 9.99 : 4.99;

  const total = subtotal + shipping;

  function generateOrderNumber() {
    return `FB${Date.now()}`;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const order = {
      orderNumber: generateOrderNumber(),
      items: cart,
      subtotal,
      shipping,
      total,
      deliveryMethod,
      customer: {
        email: formData.get("email"),
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        address: formData.get("address"),
        apartment: formData.get("apartment"),
        city: formData.get("city"),
        postcode: formData.get("postcode"),
        country: formData.get("country"),
        phone: formData.get("phone"),
      },
      payment: {
        cardName: formData.get("cardName"),
        cardLast4: String(formData.get("cardNumber") || "")
          .replace(/\s/g, "")
          .slice(-4),
      },
    };

    sessionStorage.setItem("latestOrder", JSON.stringify(order));
    clearCart();
    router.push("/order-confirmation");
  }

  if (cart.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl border border-dashed border-stone-300 bg-white p-12 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-stone-900">
            Your checkout is empty
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-stone-600">
            Add something to your cart before continuing to checkout.
          </p>

          <Link
            href="/collections"
            className="mt-6 inline-block rounded-xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
          >
            Browse Collection
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-stone-900">
                  Contact Information
                </h2>
                <p className="mt-2 text-sm text-stone-600">
                  Demo details are prefilled so the full checkout journey can be
                  viewed quickly.
                </p>
              </div>

              <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                Portfolio Demo
              </span>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="md:col-span-2">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-stone-800"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue="susan@example.com"
                  className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-500"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">
              Shipping Address
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-medium text-stone-800"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  defaultValue="Susan"
                  className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-500"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-medium text-stone-800"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  defaultValue="Smith"
                  className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-500"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-medium text-stone-800"
                >
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  defaultValue="24 Willow Lane"
                  className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-500"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="apartment"
                  className="mb-2 block text-sm font-medium text-stone-800"
                >
                  Apartment, suite, etc. (optional)
                </label>
                <input
                  id="apartment"
                  name="apartment"
                  type="text"
                  defaultValue="Apartment 4B"
                  className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-500"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="mb-2 block text-sm font-medium text-stone-800"
                >
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  defaultValue="Manchester"
                  className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-500"
                />
              </div>

              <div>
                <label
                  htmlFor="postcode"
                  className="mb-2 block text-sm font-medium text-stone-800"
                >
                  Postcode
                </label>
                <input
                  id="postcode"
                  name="postcode"
                  type="text"
                  defaultValue="M1 4AB"
                  className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-500"
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="mb-2 block text-sm font-medium text-stone-800"
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  defaultValue="United Kingdom"
                  className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none focus:border-stone-500"
                >
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-stone-800"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  defaultValue="+44 7000 000000"
                  className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-500"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">
              Delivery Method
            </h2>

            <div className="mt-6 space-y-4">
              <label className="flex cursor-pointer items-start gap-4 rounded-2xl border border-stone-300 p-4 hover:bg-stone-50">
                <input
                  type="radio"
                  name="delivery"
                  checked={deliveryMethod === "standard"}
                  onChange={() => setDeliveryMethod("standard")}
                  className="mt-1"
                />
                <div>
                  <p className="font-medium text-stone-900">Standard Delivery</p>
                  <p className="mt-1 text-sm text-stone-600">3–5 business days</p>
                </div>
                <span className="ml-auto text-sm font-medium text-stone-900">
                  £4.99
                </span>
              </label>

              <label className="flex cursor-pointer items-start gap-4 rounded-2xl border border-stone-300 p-4 hover:bg-stone-50">
                <input
                  type="radio"
                  name="delivery"
                  checked={deliveryMethod === "express"}
                  onChange={() => setDeliveryMethod("express")}
                  className="mt-1"
                />
                <div>
                  <p className="font-medium text-stone-900">Express Delivery</p>
                  <p className="mt-1 text-sm text-stone-600">1–2 business days</p>
                </div>
                <span className="ml-auto text-sm font-medium text-stone-900">
                  £9.99
                </span>
              </label>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">Payment</h2>

            <div className="mt-6 space-y-6">
              <div>
                <label
                  htmlFor="cardName"
                  className="mb-2 block text-sm font-medium text-stone-800"
                >
                  Name on Card
                </label>
                <input
                  id="cardName"
                  name="cardName"
                  type="text"
                  defaultValue="Susan Smith"
                  className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-500"
                />
              </div>

              <div>
                <label
                  htmlFor="cardNumber"
                  className="mb-2 block text-sm font-medium text-stone-800"
                >
                  Card Number
                </label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  defaultValue="4242 4242 4242 4242"
                  className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-500"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="expiry"
                    className="mb-2 block text-sm font-medium text-stone-800"
                  >
                    Expiry Date
                  </label>
                  <input
                    id="expiry"
                    name="expiry"
                    type="text"
                    defaultValue="12 / 28"
                    className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cvc"
                    className="mb-2 block text-sm font-medium text-stone-800"
                  >
                    CVC
                  </label>
                  <input
                    id="cvc"
                    name="cvc"
                    type="text"
                    defaultValue="123"
                    className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-500"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/cart"
                className="rounded-2xl border border-stone-300 px-6 py-3 text-center text-sm font-medium text-stone-800 transition hover:bg-stone-100"
              >
                Return to Cart
              </Link>

              <button
                type="submit"
                className="rounded-2xl bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-stone-800"
              >
                Place Order
              </button>
            </div>

            <p className="mt-4 text-xs leading-5 text-stone-500">
              Demo checkout for portfolio purposes. No real payment is processed.
            </p>
          </div>
        </form>

        <aside className="space-y-8">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-5">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-2xl border border-stone-200 p-4"
                >
                  <div className="h-20 w-20 overflow-hidden rounded-2xl bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-stone-900">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-stone-600">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <div className="text-sm font-medium text-stone-900">
                    £{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4 text-sm text-stone-700">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>£{subtotal.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>£{shipping.toFixed(2)}</span>
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
          </div>

          <div className="rounded-3xl border border-stone-200 bg-[#efe4d6] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">
              Secure Checkout
            </h2>
            <p className="mt-3 text-sm leading-6 text-stone-700">
              Your payment details are protected and your order is handled
              securely from checkout to delivery.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-stone-700">
              <li>• Secure payment processing</li>
              <li>• 30-day returns on eligible items</li>
              <li>• Customer support available Monday to Friday</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
