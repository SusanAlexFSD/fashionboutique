import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f1ea]">
      <PageHero
        title="About Us"
        subtitle="Discover the story behind our brand, our values, and the inspiration behind every collection."
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            {/* STORY */}
            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
                Our Story
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-stone-900">
                A Modern Approach to Everyday Style
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
                <p>
                  Our brand was created with a simple idea — to make everyday
                  dressing feel effortless, refined, and personal. We wanted to
                  move away from fast-changing trends and instead focus on pieces
                  that feel timeless, wearable, and easy to style.
                </p>

                <p>
                  Designed with modern lifestyles in mind, our collections bring
                  together relaxed silhouettes, warm earthy tones, and carefully
                  considered details. Each piece is chosen to work seamlessly
                  within your wardrobe — not just for one moment, but across
                  seasons.
                </p>

                <p>
                  Based in the UK, we curate small seasonal collections that
                  balance comfort, quality, and versatility. Our aim is to create
                  a calm, enjoyable shopping experience that helps you find
                  pieces you’ll genuinely love to wear.
                </p>
              </div>
            </div>

            {/* VALUES */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-stone-900">
                  Quality First
                </h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  We prioritise well-made pieces that feel good to wear and are
                  designed to last beyond a single season.
                </p>
              </div>

              <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-stone-900">
                  Thoughtful Design
                </h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  Every collection focuses on simplicity, balance, and subtle
                  details that elevate everyday outfits.
                </p>
              </div>

              <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-stone-900">
                  Modern Essentials
                </h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  We create and curate versatile wardrobe staples that fit
                  naturally into real, everyday life.
                </p>
              </div>
            </div>

            {/* MISSION */}
            <div className="rounded-3xl border border-stone-200 bg-[#efe4d6] p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
                Our Mission
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-stone-900">
                To Make Style Feel Effortless and Personal
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-stone-700">
                We believe great style doesn’t need to be complicated. Our goal
                is to help you build a wardrobe of pieces that feel comfortable,
                versatile, and easy to wear — so you can focus on feeling
                confident, not overwhelmed.
              </p>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-8">
            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-stone-900">
                What We Value
              </h2>

              <ul className="mt-5 space-y-4 text-sm leading-6 text-stone-700">
                <li>• Timeless style over short-lived trends</li>
                <li>• Comfort and confidence in every piece</li>
                <li>• Carefully curated seasonal collections</li>
                <li>• Simple, enjoyable shopping experiences</li>
                <li>• Quality details that make a difference</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-stone-900">
                Why Shop With Us?
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-6 text-stone-700">
                <p>
                  We combine modern styling with a calm, thoughtful approach to
                  fashion. Our collections are designed to help you build a
                  wardrobe that feels cohesive, versatile, and easy to wear.
                </p>

                <p>
                  From curated edits to helpful sizing support, we aim to make
                  every part of your shopping experience simple, clear, and
                  enjoyable.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-[#efe4d6] p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-stone-900">
                Explore More
              </h2>

              <p className="mt-3 text-sm leading-6 text-stone-700">
                Discover our latest collections or get in touch if you have any
                questions about our products.
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/collections"
                  className="rounded-xl bg-stone-900 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-stone-800"
                >
                  Shop Collection
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl border border-stone-300 px-5 py-3 text-center text-sm font-medium text-stone-800 transition hover:bg-stone-100"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}