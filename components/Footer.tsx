'use client';

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [message, setMessage] = useState<string | null>(null);

  function handleSocialClick(platform: string) {
    setMessage(`${platform} coming soon`);

    setTimeout(() => {
      setMessage(null);
    }, 2000);
  }

  return (
    <>
      <footer className="mt-20 border-t border-stone-200 bg-[#efe4d6]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-10 md:grid-cols-3">
            
            {/* Brand */}
            <div>
              <h3 className="text-lg font-semibold text-stone-900">
                Mialokito
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-stone-600">
                Timeless fashion, warm earthy tones, and elegant essentials for
                everyday style.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-stone-900">
                Quick Links
              </h4>
              <div className="mt-4 flex flex-col gap-3 text-sm text-stone-700">
                <Link href="/about" className="transition hover:text-stone-950">
                  About
                </Link>
                <Link href="/faqs" className="transition hover:text-stone-950">
                  FAQs
                </Link>
                <Link href="/contact" className="transition hover:text-stone-950">
                  Contact
                </Link>
                <Link
                  href="/privacy-policy"
                  className="transition hover:text-stone-950"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-stone-900">
                Follow Us
              </h4>

              <div className="mt-4 flex gap-4 text-sm text-stone-700">
                {["Instagram", "Pinterest", "Facebook"].map((platform) => (
                  <button
                    key={platform}
                    type="button"
                    onClick={() => handleSocialClick(platform)}
                    className="opacity-70 transition hover:text-stone-950 hover:opacity-100"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-stone-300 pt-6 text-sm text-stone-600">
            © 2026 Mialokito. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ✨ Toast Popup */}
      {message && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-stone-300 bg-white px-6 py-3 text-sm text-stone-800 shadow-lg animate-fadeIn">
          {message}
        </div>
      )}
    </>
  );
}