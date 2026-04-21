"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type OrderItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type OrderData = {
  orderNumber: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  deliveryMethod: "standard" | "express";
  customer: {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    apartment?: string;
    city: string;
    postcode: string;
    country: string;
    phone?: string;
  };
  payment: {
    cardName: string;
    cardLast4: string;
  };
};

export default function OrderConfirmationContent() {
  const [order, setOrder] = useState<OrderData | null>(null);

  useEffect(() => {
    const savedOrder = sessionStorage.getItem("latestOrder");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  if (!order) {
    return (
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-3xl border border-dashed border-stone-300 bg-white p-12 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-stone-900">
            No recent order found
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-stone-600">
            Complete checkout first to see your order confirmation details.
          </p>

          <Link
            href="/checkout"
            className="mt-6 inline-block rounded-xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
          >
            Go to Checkout
          </Link>
        </div>
      </section>
    );
  }

  const deliveryText =
    order.deliveryMethod === "express"
      ? "1–2 Business Days"
      : "3–5 Business Days";

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 text-lg font-semibold text-white">
                ✓
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                  Order Confirmed
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-stone-900">
                  Order #{order.orderNumber}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-600">
                  A confirmation email has been sent to {order.customer.email}.
                  We&apos;ll let you know as soon as your order has been dispatched.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#f7f1ea] p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                  Estimated Delivery
                </p>
                <p className="mt-2 text-lg font-semibold text-stone-900">
                  {deliveryText}
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f1ea] p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                  Shipping Address
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-700">
                  {order.customer.firstName} {order.customer.lastName}
                  <br />
                  {order.customer.address}
                  {order.customer.apartment ? (
                    <>
                      <br />
                      {order.customer.apartment}
                    </>
                  ) : null}
                  <br />
                  {order.customer.city}, {order.customer.postcode}
                  <br />
                  {order.customer.country}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/collections"
                className="rounded-xl bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-stone-800"
              >
                Continue Shopping
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-stone-300 px-6 py-3 text-center text-sm font-medium text-stone-800 transition hover:bg-stone-100"
              >
                Contact Support
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">
              Order Items
            </h2>

            <div className="mt-6 space-y-5">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-2xl border border-stone-200 p-4 sm:flex-row sm:items-center"
                >
                  <div className="h-28 w-full overflow-hidden rounded-2xl bg-stone-100 sm:w-24">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="mt-1 text-lg font-semibold text-stone-900">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-stone-600">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <div className="text-base font-medium text-stone-900">
                    £{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-[#efe4d6] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">
              What Happens Next?
            </h2>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm font-semibold text-stone-900">
                  1. Order Received
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  We&apos;ve received your order and sent your confirmation email.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm font-semibold text-stone-900">
                  2. Preparing Your Items
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Your items are being packed carefully and prepared for dispatch.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm font-semibold text-stone-900">
                  3. On the Way
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  You&apos;ll receive tracking details once your parcel has shipped.
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4 text-sm text-stone-700">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>£{order.subtotal.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>£{order.shipping.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Discount</span>
                <span>- £0.00</span>
              </div>

              <div className="border-t border-stone-200 pt-4">
                <div className="flex items-center justify-between text-base font-semibold text-stone-900">
                  <span>Total</span>
                  <span>£{order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">
              Payment Method
            </h2>
            <p className="mt-4 text-sm leading-6 text-stone-600">
              Card ending in {order.payment.cardLast4 || "0000"}
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">
              Need Help?
            </h2>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              If you have any questions about your order, our support team is
              here to help.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-stone-900 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-stone-800"
              >
                Contact Support
              </Link>

              <Link
                href="/sizing-chart"
                className="rounded-xl border border-stone-300 px-5 py-3 text-center text-sm font-medium text-stone-800 transition hover:bg-stone-100"
              >
                View Sizing Guide
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}