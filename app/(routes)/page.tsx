import Billboard from "@/components/Billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/ProductList";

import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("a588e75e-7d1d-4458-b67d-7f961dc42396");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
