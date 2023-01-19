function Header({ showForm, setShowForm }) {
  return (
    <header className="header">
      <div className="logo">X.COMMON</div>
      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Create new X"}
      </button>
    </header>
  );
}

export default Header;
