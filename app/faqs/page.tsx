import FaqAccordion from '@/components/FaqAccordion';

const faqs = [
  {
    question: 'What sizes do you offer?',
    answer:
      'We offer a range of sizes depending on the item. Please check each product page for detailed sizing information before ordering.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Standard shipping usually takes 3–7 business days. Delivery times may vary depending on your location.',
  },
  {
    question: 'Do you accept returns?',
    answer:
      'Yes, we accept returns on eligible items within 14 days of delivery, provided they are unworn, unwashed, and in original condition.',
  },
  {
    question: 'Can I track my order?',
    answer:
      'Yes. Once your order has shipped, you will receive a tracking link by email.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'At the moment, we primarily ship locally, but international shipping options may be added soon.',
  },
  {
    question: 'How can I contact customer support?',
    answer:
      'You can reach us through the Contact page and we’ll get back to you as soon as possible.',
  },
];

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ed] px-6 py-16 text-stone-800">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900">
          Frequently Asked Questions
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-600">
          Find answers to common questions about orders, shipping, returns, and
          more.
        </p>

        <FaqAccordion items={faqs} />
      </div>
    </main>
  );
}