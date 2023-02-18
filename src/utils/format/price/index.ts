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
  let formattedPrice: string = String(price);
  const revertPriceFormat = Number(formattedPrice?.replace(',', '.'));

  const convertPrice = (priceParam: number) =>
    String(priceParam).replace('.', ',');

  const verifyIsDecimalPrice = (priceParam: string) =>
    priceParam?.includes('.') || priceParam?.includes(',');

  if (!verifyIsDecimalPrice(formattedPrice))
    formattedPrice = `${price},00`;

  const countDiscount = (price * discountPercentage) / 100;

  const formatFinalDiscount = (): string => {
    const divisionResult = revertPriceFormat - countDiscount;
    const divisionFormatted = String(divisionResult).replace('.', '');

    const formatBiggestResult =
      `${divisionFormatted[0]}${divisionFormatted[1]}` +
      `,${divisionFormatted[3] || 0}${divisionFormatted[4] || 0}`;

    return formatBiggestResult.trim();
  };

  let countInstallment = revertPriceFormat / installment;

  const formatCountInstallment = (
    installmentPrice: number,
  ): string => {
    const installmentFormatted = convertPrice(installmentPrice);
    const formatBiggestResult =
      `${installmentFormatted[0]}${installmentFormatted[1]}` +
      `,${installmentFormatted[3] || 0}${
        installmentFormatted[4] || 0
      }`;

    return !verifyIsDecimalPrice(String(installmentPrice))
      ? `${installmentPrice},00`
      : formatBiggestResult.trim();
  };
  if (isPromotion) {
    countInstallment =
      (revertPriceFormat - countDiscount) / installment;

    return {
      price: formattedPrice,
      newPriceDiscount: formatFinalDiscount(),
      priceInstallment: formatCountInstallment(countInstallment),
    };
  } else {
    return {
      price: formattedPrice,
      newPriceDiscount: '',
      priceInstallment: formatCountInstallment(countInstallment),
    };
  }
};

export { handleFormatPrice };
