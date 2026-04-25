export type ProductCategory = "men" | "women" | "accessories";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  image: string;
  description: string;
};

type DummyProduct = {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  description: string;
};

type DummyResponse = {
  products: DummyProduct[];
};

const FASHION_CATEGORIES = [
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "tops",
  "sunglasses",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];

function mapToMainCategory(category: string): ProductCategory {
  const value = category.toLowerCase().trim();

  if (value.startsWith("mens-shirts") || value.startsWith("mens-shoes")) {
    return "men";
  }

  if (
    value === "tops" ||
    value.startsWith("womens-dresses") ||
    value.startsWith("womens-shoes")
  ) {
    return "women";
  }

  return "accessories";
}

function mapProduct(product: DummyProduct): Product {
  return {
    id: String(product.id),
    name: product.title,
    price: product.price,
    category: mapToMainCategory(product.category),
    image: product.thumbnail,
    description: product.description,
  };
}

export async function getProducts(): Promise<Product[]> {
  const responses = await Promise.all(
    FASHION_CATEGORIES.map(async (category) => {
      const res = await fetch(
        `https://dummyjson.com/products/category/${category}?limit=20`,
        {
          cache: "force-cache",
        }
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch category: ${category}`);
      }

      const data: DummyResponse = await res.json();
      return data.products.map(mapProduct);
    })
  );

  return responses.flat();
}