import { useState } from "react";
import { Form, redirect, useNavigate, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

// Regular expression to validate phone numbers
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

// Sample data for the cart
const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // Getting the navigate function from react-router-dom for navigation.
  const navigation = useNavigate();
  // Checking if the form is currently submitting.
  const isSubmitting = navigation.state === "submitting";

  // Getting form errors from useActionData hook.
  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false); // State for tracking the priority option.

  // Assigning the fakeCart data to the 'cart' variable.
  const cart = fakeCart;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" name="customer" required />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs font-semibold text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6  accent-yellow-400  focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-semibold" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting ? "Placing order..." : "Order Now!"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

// The action function is called when the form is submitted
export async function action({ request }) {
  const formData = await request.formData(); // Getting the form data from the request
  const data = Object.fromEntries(formData); // Converting form data to a plain object

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on", // Converting the priority checkbox value to a boolean
  };

  console.log(order); // Logging the order data to the console

  const newOrder = await createOrder(order); // Creating the order using the createOrder function from the API

  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = "Invalid phone number"; // Validating the phone number and setting an error message if it's invalid
  }
  if (Object.keys(errors).length > 0) {
    return errors; // Returning the error object if there are any validation errors
  }

  return redirect(`/order/${newOrder.id}`); // Redirecting to the order confirmation page after successful order creation
}

export default CreateOrder; // Exporting the CreateOrder component as the default export.
