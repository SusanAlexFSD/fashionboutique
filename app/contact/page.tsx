import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f1ea]">
      <PageHero
        title="Contact Us"
        subtitle="We’re here to help with orders, sizing, delivery, returns, and anything else you need."
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">
              Send Us a Message
            </h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              Fill in the form below and our customer care team will get back to
              you within 1–2 business days.
            </p>

            <form className="mt-8 space-y-6">
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
                    className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="orderNumber"
                    className="mb-2 block text-sm font-medium text-stone-800"
                  >
                    Order Number{" "}
                    <span className="text-stone-400">(optional)</span>
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
                  By submitting this form, you agree that we may use your
                  details to respond to your enquiry.
                </p>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-stone-900">
                Customer Support
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-6 text-stone-700">
                <div>
                  <p className="font-semibold text-stone-900">Email</p>
                  <p className="mt-1">support@yourbrand.com</p>
                </div>

                <div>
                  <p className="font-semibold text-stone-900">Phone</p>
                  <p className="mt-1">+44 (0)20 1234 5678</p>
                </div>

                <div>
                  <p className="font-semibold text-stone-900">Support Hours</p>
                  <p className="mt-1">
                    Monday – Friday
                    <br />
                    9:00 AM – 5:30 PM
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-stone-900">Address</p>
                  <p className="mt-1">
                    24 Willow Lane
                    <br />
                    Manchester, M1 4AB
                    <br />
                    United Kingdom
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-stone-900">Response Time</p>
                  <p className="mt-1">
                    We aim to reply to all enquiries within 1–2 business days.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-[#efe4d6] p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-stone-900">
                Need Quick Help?
              </h2>
              <p className="mt-3 text-sm leading-6 text-stone-700">
                You may find the answer you need in our support pages before
                contacting us.
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/sizing-chart"
                  className="rounded-xl bg-stone-900 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-stone-800"
                >
                  View Sizing Guide
                </Link>

                <Link
                  href="/collections"
                  className="rounded-xl border border-stone-300 px-5 py-3 text-center text-sm font-medium text-stone-800 transition hover:bg-stone-100"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-stone-900">
                Frequently Asked Questions
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-6 text-stone-700">
                <div>
                  <p className="font-semibold text-stone-900">
                    Where is my order?
                  </p>
                  <p className="mt-1">
                    Standard delivery usually takes 3–5 business days. If your
                    order is delayed, contact us with your order number and we’ll
                    be happy to help.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-stone-900">
                    Can I return an item?
                  </p>
                  <p className="mt-1">
                    Yes, we offer 30-day returns on eligible items. Please get in
                    touch if you need help starting a return.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-stone-900">
                    Can you help me choose the right size?
                  </p>
                  <p className="mt-1">
                    Yes. You can check our sizing chart or contact our team for
                    extra guidance before placing your order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}