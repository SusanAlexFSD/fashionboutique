export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  colors: string[];
  sizes: string[];
};

export const products: Product[] = [
  {
    id: "boho-maxi-dress",
    name: "Boho Maxi Dress",
    price: 79.99,
    category: "Dresses",
    image: "/images/Dress.png",
    description:
      "A flowing boho-inspired maxi dress with soft fabrics and a relaxed fit, perfect for warm days and effortless style.",
    colors: ["Cream Floral", "Sunset Rose"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "linen-shirt",
    name: "Linen Button-Up Shirt",
    price: 38.99,
    category: "Tops",
    image: "/images/Shirt.png",
    description:
      "A breathable linen shirt designed for comfort and versatility, ideal for both casual and smart looks.",
    colors: ["White", "Sky Blue", "Sand"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "classic-bag",
    name: "Classic Bag",
    price: 79.99,
    category: "Accessories",
    image: "/images/Bag.png",
    description:
      "A timeless everyday bag with a structured design, combining practicality with understated elegance.",
    colors: ["Tan", "Espresso"],
    sizes: ["One Size"],
  },
  {
    id: "vintage-hat",
    name: "Vintage Hat",
    price: 29.99,
    category: "Accessories",
    image: "/images/Hat.png",
    description:
      "A vintage-style hat that adds character and charm to any outfit, perfect for elevating your look.",
    colors: ["Natural", "Camel"],
    sizes: ["S", "M", "L"],
  },
];