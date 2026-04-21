import PageHero from "@/components/PageHero";
import Link from "next/link";

const womensSizes = [
  { size: "XS", bust: '31-32"', waist: '24-25"', hips: '34-35"' },
  { size: "S", bust: '33-34"', waist: '26-27"', hips: '36-37"' },
  { size: "M", bust: '35-36"', waist: '28-29"', hips: '38-39"' },
  { size: "L", bust: '37-39"', waist: '30-32"', hips: '40-42"' },
  { size: "XL", bust: '40-42"', waist: '33-35"', hips: '43-45"' },
];

const mensSizes = [
  { size: "S", chest: '36-38"', waist: '30-32"', hips: '36-38"' },
  { size: "M", chest: '39-41"', waist: '33-35"', hips: '39-41"' },
  { size: "L", chest: '42-44"', waist: '36-38"', hips: '42-44"' },
  { size: "XL", chest: '45-47"', waist: '39-41"', hips: '45-47"' },
];

const shoeSizes = [
  { uk: "3", eu: "36", us: "5" },
  { uk: "4", eu: "37", us: "6" },
  { uk: "5", eu: "38", us: "7" },
  { uk: "6", eu: "39", us: "8" },
  { uk: "7", eu: "40-41", us: "9" },
  { uk: "8", eu: "42", us: "10" },
  { uk: "9", eu: "43", us: "11" },
  { uk: "10", eu: "44-45", us: "12" },
];

export default function SizingChartPage() {
  return (
    <main className="min-h-screen bg-[#f7f1ea]">
      <PageHero
        title="Sizing Chart"
        subtitle="Use our guide to find your best fit across clothing and footwear."
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-stone-900">
            Find Your Best Fit
          </h2>
          <p className="mt-3 text-sm leading-6 text-stone-600">
            Measurements are shown in inches and are intended as a general
            guide. Fit may vary slightly depending on fabric, cut, and style, so
            we recommend comparing your measurements with a similar garment you
            already own.
          </p>
          <p className="mt-3 text-xs uppercase tracking-wide text-stone-500">
            Updated for current collection
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
              <div className="border-b border-stone-200 px-6 py-5">
                <h2 className="text-2xl font-semibold text-stone-900">
                  Women’s Clothing
                </h2>
                <p className="mt-1 text-sm text-stone-600">
                  Use these body measurements as a general guide when choosing
                  dresses, tops, and other women’s styles.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm text-stone-700">
                  <thead className="bg-[#efe4d6] text-stone-900">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Size</th>
                      <th className="px-6 py-4 font-semibold">Bust (in)</th>
                      <th className="px-6 py-4 font-semibold">Waist (in)</th>
                      <th className="px-6 py-4 font-semibold">Hips (in)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {womensSizes.map((row) => (
                      <tr key={row.size} className="border-t border-stone-200">
                        <td className="px-6 py-4 font-medium">{row.size}</td>
                        <td className="px-6 py-4">{row.bust}</td>
                        <td className="px-6 py-4">{row.waist}</td>
                        <td className="px-6 py-4">{row.hips}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
              <div className="border-b border-stone-200 px-6 py-5">
                <h2 className="text-2xl font-semibold text-stone-900">
                  Men’s Clothing
                </h2>
                <p className="mt-1 text-sm text-stone-600">
                  Compare chest, waist, and hip measurements to find the most
                  comfortable fit for shirts, trousers, and everyday essentials.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm text-stone-700">
                  <thead className="bg-[#efe4d6] text-stone-900">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Size</th>
                      <th className="px-6 py-4 font-semibold">Chest (in)</th>
                      <th className="px-6 py-4 font-semibold">Waist (in)</th>
                      <th className="px-6 py-4 font-semibold">Hips (in)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mensSizes.map((row) => (
                      <tr key={row.size} className="border-t border-stone-200">
                        <td className="px-6 py-4 font-medium">{row.size}</td>
                        <td className="px-6 py-4">{row.chest}</td>
                        <td className="px-6 py-4">{row.waist}</td>
                        <td className="px-6 py-4">{row.hips}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
              <div className="border-b border-stone-200 px-6 py-5">
                <h2 className="text-2xl font-semibold text-stone-900">
                  Shoe Size Conversion
                </h2>
                <p className="mt-1 text-sm text-stone-600">
                  Use this chart to compare UK, EU, and US shoe sizing across
                  our footwear range.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm text-stone-700">
                  <thead className="bg-[#efe4d6] text-stone-900">
                    <tr>
                      <th className="px-6 py-4 font-semibold">UK</th>
                      <th className="px-6 py-4 font-semibold">EU</th>
                      <th className="px-6 py-4 font-semibold">US</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shoeSizes.map((row) => (
                      <tr key={row.uk} className="border-t border-stone-200">
                        <td className="px-6 py-4 font-medium">{row.uk}</td>
                        <td className="px-6 py-4">{row.eu}</td>
                        <td className="px-6 py-4">{row.us}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-stone-900">
                How to Measure
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-stone-700">
                <div>
                  <h3 className="font-semibold text-stone-900">Bust / Chest</h3>
                  <p className="mt-1">
                    Measure around the fullest part of your bust or chest while
                    keeping the tape comfortably level and close to the body.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-stone-900">Waist</h3>
                  <p className="mt-1">
                    Measure around the narrowest part of your waist, usually
                    just above the belly button, without pulling the tape too
                    tightly.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-stone-900">Hips</h3>
                  <p className="mt-1">
                    Measure around the fullest part of your hips while standing
                    naturally with your feet together.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-stone-900">Shoes</h3>
                  <p className="mt-1">
                    Measure your foot from heel to toe and compare the result
                    with the shoe conversion table above for the closest match.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-[#efe4d6] p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-stone-900">
                Fit Tips
              </h2>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-700">
                <li>
                  • Between sizes? Choose the larger size for a more relaxed fit.
                </li>
                <li>
                  • Natural fabrics may soften and loosen slightly with wear.
                </li>
                <li>
                  • Structured pieces are designed for a closer silhouette.
                </li>
                <li>
                  • Check product pages for any item-specific fit notes before
                  ordering.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-stone-900">
                Product Fit Notes
              </h2>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-700">
                <li>
                  • Tailored pieces may fit closer through the waist, chest, or
                  shoulders.
                </li>
                <li>
                  • Knitwear and softer fabrics may offer a little more stretch.
                </li>
                <li>
                  • Oversized styles are intentionally cut for a looser fit.
                </li>
                <li>
                  • Footwear may fit differently depending on shape, heel height,
                  and material.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-stone-900">
                Need More Help?
              </h2>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                Our team is happy to help with sizing advice before you place an
                order. Get in touch and we’ll help you choose the best fit.
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-stone-900 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-stone-800"
                >
                  Contact Support
                </Link>

                <Link
                  href="/collections"
                  className="rounded-xl border border-stone-300 px-5 py-3 text-center text-sm font-medium text-stone-800 transition hover:bg-stone-100"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}