import { formatCurrency } from "../../utils/helpers";

type Props = {
  item: {
    name: string;
    quantity: number;
    totalPrice: number;
  }

  // isLoadingIngredients: boolean;
  // ingredients: string[];
};

function OrderItem({ item }: Props) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 px-6">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
