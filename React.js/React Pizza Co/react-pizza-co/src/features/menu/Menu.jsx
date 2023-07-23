import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  // Getting the menu data using the useLoaderData hook provided by react-router-dom.
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        // Rendering the MenuItem component for each pizza in the menu with a unique 'key' prop.
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// The loader function is used to fetch the menu data from the API before rendering the component.
export async function loader() {
  const menu = await getMenu(); // Fetching the menu data using the getMenu function from the API.
  return menu; // Returning the menu data to be used by the Menu component.
}

export default Menu; // Exporting the Menu component as the default export.
