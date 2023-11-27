/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { Form, redirect, useNavigation, useActionData } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useSelector } from 'react-redux';
import { getCart } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: any) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );


function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const username = useSelector((state: any) => state.user.username);

  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false);

  const cart = useSelector(getCart)
  if(!cart.length) return <EmptyCart />

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={username}
            required
            className="input grow"
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="mt-2 w-fit rounded-md bg-red-100 p-1 text-xs text-red-500">
                {(formErrors as any)?.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}></input>
          <Button isSubmitting={isSubmitting} type="primary">
            {isSubmitting ? 'Placing order' : 'Order Now'}
          </Button>

          {/* </button> */}
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }: any) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
    phone: data.phone,
  };
  console.log(order);

  const newOrder = await createOrder(order);

  const errors = {
    phone: '',
  };
  if (!isValidPhone(order.phone)) {
    errors.phone = 'Please provide correct phone number';
  }

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order, redirect
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
