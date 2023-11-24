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
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
