import PageHero from "@/components/PageHero";
import CartContent from "@/components/CartContent";

export const metadata = {
  title: "Cart",
};

export default function CartPage() {
  return (
    <main className="min-h-screen bg-[#f7f1ea]">
      <PageHero
        title="Your Cart"
        subtitle="Review your items before continuing to checkout."
      />
      <CartContent />
    </main>
  );
}