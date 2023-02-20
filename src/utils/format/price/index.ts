interface IHandleFormatPrice {
  price: number;
  isPromotion?: boolean;
  installment?: number;
  discountPercentage?: number;
}

interface IHandleFormatPriceResult {
  price: string;
  newPriceDiscount?: string;
  priceInstallment?: string;
}

const handleFormatPrice = ({
  price,
  isPromotion,
  installment,
  discountPercentage,
}: IHandleFormatPrice): IHandleFormatPriceResult => {
  const formattedPrice = (param: number) =>
    Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(param);

  const countDiscount = (price * discountPercentage) / 100;

  const formatFinalDiscount = (): string => {
    const divisionResult = price - countDiscount;
    const divisionFormatted = formattedPrice(divisionResult);

    return divisionFormatted;
  };

  let countInstallment = price / installment;

  if (isPromotion) {
    countInstallment = (price - countDiscount) / installment;

    return {
      price: formattedPrice(price),
      newPriceDiscount: formatFinalDiscount(),
      priceInstallment: formattedPrice(countInstallment),
    };
  } else {
    return {
      price: formattedPrice(price),
      priceInstallment: formattedPrice(countInstallment),
    };
  }
};

export { handleFormatPrice };
