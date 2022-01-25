//TODO change into static type checking

import { formatRupiah } from "../../hooks/useFormatIDR";

export const OrderSummaryProduct = (props: any) => {
  const product = props.product;

  const price = formatRupiah(product.product_price);
  return (
    <li key={product.id} className="flex items-start py-6 space-x-4">
      <img
        src={product.product_image || "/logo192.png"}
        alt={product.imageAlt}
        className="flex-none w-20 h-20 rounded-md object-center object-cover"
      />
      <div className="flex-auto space-y-1">
        <h3 className="font-bold">{product.product_name}</h3>
        <p className="text-gray-500">{product.color}</p>
        <p className="text-gray-500">Qty {product.quantity}</p>
      </div>
      <div className="justify-between">
        <p className="text-base font-medium">{price}</p>
        <br />
        {/* TODO change to total */}
        <p className="text-base font-medium text-mint">{product.price}</p>
      </div>
    </li>
  );
};
