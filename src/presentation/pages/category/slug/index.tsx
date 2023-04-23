import { ImagesStructure } from '@/presentation/components/core/ProductStructure/Images';
import { MainInfos } from '@/presentation/components/core/ProductStructure/MainInfos';
import { IProduct } from '@/domain/api/product/entities';
import { Button } from '@/presentation/components/core/Button';
import { useCart } from '@/presentation/hooks/cart';
import { MaxContainer } from '@/presentation/components/ui/Container';

interface ICategorySlugPresentation {
  product: IProduct;
}

const CategorySlugPresentation: React.FC<
  ICategorySlugPresentation
> = ({ product }) => {
  const { handleAddProductInCart } = useCart();

  return product?.id ? (
    <MaxContainer className="bg-white1000 rounded-2 p-8">
      <div className="relative w-full flex flex-row items-top sm:flex-col">
        <ImagesStructure images={product.images} />

        <div className="relative w-full flex flex-col gap-8 p-6 mt-6">
          <MainInfos {...product} />

          <Button
            fullWidth
            onClick={() => handleAddProductInCart(product.id)}
          >
            ADICIONAR AO CARRINHO
          </Button>
        </div>
      </div>
    </MaxContainer>
  ) : null;
};

export { CategorySlugPresentation };
