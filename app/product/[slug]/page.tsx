import { notFound } from "next/navigation";
import { getProducts } from "@/lib/api";
import ProductActions from "@/components/ProductActions";
import ProductCard from "@/components/ProductCard";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const products = await getProducts();

  const product = products.find((item) => item.id === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-[#f7f1ea]">
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 text-sm text-stone-500">
          Home / Collections / {product.name}
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-2xl border border-stone-200 bg-white"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-900">
              {product.name}
            </h1>

            <p className="mt-4 text-2xl font-medium text-stone-800">
              £{product.price.toFixed(2)}
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-700">
              {product.description}
            </p>

            <ProductActions
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              }}
            />

            <div className="mt-10 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-stone-900">
                Product Details
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-stone-700">
                <li>Soft premium fabric for everyday comfort</li>
                <li>Thoughtfully designed for a flattering fit</li>
                <li>Easy to style across seasons</li>
                <li>30-day returns on all orders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-stone-900">
            You May Also Like
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}