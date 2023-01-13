const Categories = [
  { name: "development" },
  { name: "general" },
  { name: "wordpress" },
  { name: "design" },
  { name: "github" },
  { name: "vscode" },
  { name: "javascript" },
  { name: "google cloud" },
  { name: "docker" },
  { name: "starters" },
];

function CategoryFilter({ setCurrentCategory }) {
  return (
    <aside>
      <ul>
        <li>
          <button
            className="btn btn-all"
            onClick={() => setCurrentCategory("all")}
          >
            All
          </button>
        </li>
        {Categories.map((category) => (
          <li className="category" key={category.name}>
            <button
              className="btn btn-category"
              onClick={() => setCurrentCategory(category.name)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryFilter;
