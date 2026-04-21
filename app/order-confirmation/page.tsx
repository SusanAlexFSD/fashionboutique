import PageHero from "@/components/PageHero";
import OrderConfirmationContent from "@/components/OrderConfirmationContent";

export const metadata = {
  title: "Order Confirmation",
};

export default function OrderConfirmationPage() {
  return (
    <main className="min-h-screen bg-[#f7f1ea]">
      <PageHero
        title="Thank You for Your Order"
        subtitle="Your order has been placed successfully and is now being prepared."
      />
      <OrderConfirmationContent />
    </main>
  );
}