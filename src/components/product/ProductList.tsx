import { ProductItem, Skeleton } from './ProductItem';

export const ProductsList = ({ products, isLoading }: any) => {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-2 xl:grid-cols-5">
      {isLoading &&
        Array(12)
          .fill('')
          .map((_, index) => <Skeleton key={index} />)}
      {products &&
        products.map((product: any) => (
          <div key={product.id}>
            <ProductItem {...product} />
          </div>
        ))}
    </div>
  );
};
