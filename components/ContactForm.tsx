"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
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
              placeholder="Susan"
              required
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
              placeholder="Smith"
              required
              className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-500"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
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
              placeholder="you@example.com"
              required
              className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-500"
            />
          </div>

          <div>
            <label
              htmlFor="orderNumber"
              className="mb-2 block text-sm font-medium text-stone-800"
            >
              Order Number <span className="text-stone-400">(optional)</span>
            </label>
            <input
              id="orderNumber"
              name="orderNumber"
              type="text"
              placeholder="#100234"
              className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-stone-800"
          >
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none focus:border-stone-500"
          >
            <option>Order Update</option>
            <option>Delivery Issue</option>
            <option>Returns & Exchanges</option>
            <option>Sizing Advice</option>
            <option>Product Question</option>
            <option>General Enquiry</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-stone-800"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Tell us how we can help..."
            required
            className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-500"
          />
        </div>

        <div className="space-y-3">
          <button
            type="submit"
            className="rounded-2xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
          >
            Send Message
          </button>

          <p className="text-xs leading-5 text-stone-500">
            By submitting this form, you agree that we may use your details to
            respond to your enquiry.
          </p>
        </div>
      </form>

      {submitted ? (
        <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-800 shadow-sm">
          <p className="font-semibold">Message sent successfully</p>
          <p className="mt-1">
            Thanks for getting in touch. Our customer care team will reply within
            1–2 business days.
          </p>
        </div>
      ) : null}
    </>
  );
}