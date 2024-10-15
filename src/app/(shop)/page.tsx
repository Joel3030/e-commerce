import { ProductGris, Title } from "@/components";
import { initialData } from "../../seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title title="Store" subTitle="All products" className="mb-2" />

      <ProductGris products={products} />
    </>
  );
}
