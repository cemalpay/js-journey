import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  // Base styles shared among all button types.
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300  hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  // Styles for different button types.
  const styles = {
    primary: base + "px-4 py-3 md:px-5 md:py-4",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block text-sm rounded-full font-semibold border-2 border-stone-300 uppercase tracking-wide text-stone-800 transition-colors duration-300  hover:bg-stone-800 hover:text-white focus:bg-stone-800 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-5 md:py-3.5",
  };

  // If 'to' prop is provided, render the button as a Link component.
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  // If 'to' prop is not provided, render a regular button.
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button; // Exporting the Button component as the default export.
