import PageHero from "@/components/PageHero";
import CheckoutContent from "@/components/CheckoutContent";

export const metadata = {
  title: "Checkout",
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#f7f1ea]">
      <PageHero
        title="Checkout"
        subtitle="Complete your order securely and review your details before payment."
      />
      <CheckoutContent />
    </main>
  );
}