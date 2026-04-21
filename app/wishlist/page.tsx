import PageHero from "@/components/PageHero";
import WishlistContent from "@/components/WishlistContent";

export default function WishlistPage() {
  return (
    <main className="min-h-screen bg-[#f7f1ea]">
      <PageHero
        title="My Wishlist"
        subtitle="Save your favourite pieces for later and come back anytime."
      />

      <WishlistContent />
    </main>
  );
}