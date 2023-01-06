import { useState } from "react";
import "./css/style.css";
import "./css/style.css.map";

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "general",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
];

function Counter() {
  const [count, setCount] = useState(8);
  return (
    <div>
      <span style={{ fonstSize: "40px" }}>{count}</span>
      <button
        className="btn btn-large"
        onClick={() => setCount((count) => count + 1)}
      >
        +1
      </button>
    </div>
  );
}

function App() {
  const [showForm, setShowForm] = useState(false);
  const [xItems, setX] = useState(initialFacts);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />

      {showForm ? <NewXForm setX={setX} setShowForm={setShowForm} /> : null}

      {/*MAIN*/}
      <main className="main">
        <CategoryFilter />
        <XList xItems={xItems} />
      </main>
    </>
  );
}

function Header({ showForm, setShowForm }) {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="" />
      </div>
      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Create new X"}
      </button>
    </header>
  );
}
const CATEGORIES = [
  { name: "development", color: "#f0fdfa" },
  { name: "general", color: "#ccfbf1" },
  { name: "wordpress", color: "#99f6e4" },
  { name: "design", color: "#5eead4" },
  { name: "github", color: "#2dd4bf" },
  { name: "vscode", color: "#14b8a6" },
  { name: "javascript", color: "#0d9488" },
  { name: "google cloud", color: "#0f766e" },
  { name: "docker", color: "#115e59" },
  { name: "starters", color: "#134e4a" },
];

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function NewXForm({ setX, setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(event) {
    // 1. prevent browser from reloading
    event.preventDefault();
    console.log(text, source, category);

    // 2. check if data valid. if so add to list
    if (text && isValidHttpUrl(source) && category) {
      // 3. create new x item
      const newXItem = {
        id: Math.round(Math.random() * 1000000),
        text,
        source,
        category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),
      };
      // 4. add the new x item to the ui
      setX((xItems) => [newXItem, ...xItems]);
      // 5. clear the form
      setText("");
      setSource("");
      setCategory("");
      // 6. close the form
      setShowForm(false);
    }
  }

  return (
    <form className="x-form" onSubmit={handleSubmit}>
      {" "}
      <input
        type="text"
        placeholder="Write here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        value={source}
        type="text"
        placeholder="Source"
        onChange={(e) => setSource(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Choose category:</option>
        {CATEGORIES.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-post">Post</button>
    </form>
  );
}

function CategoryFilter() {
  return (
    <aside>
      <ul>
        <li>
          <button class="btn btn-all">All</button>
        </li>
        {CATEGORIES.map((category) => (
          <li className="category" key={category.name}>
            <button className="btn btn-category">{category.name}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
function XList({ xItems }) {
  return (
    <section>
      <ul className="x-list">
        {xItems.map((xItem) => (
          <XContent key={xItem.id} xItem={xItem} />
        ))}
      </ul>
    </section>
  );
}

function XContent({ xItem }) {
  return (
    <li className="x-text">
      {xItem.text}
      <a className="source" href={xItem.source}>
        (Source)
      </a>
      <span className="tag">{xItem.category}</span>
      <div className="vote-buttons">
        <button className="btn-vote">⛔ 9</button>
        <button className="btn-vote">🦄 4</button>
      </div>
    </li>
  );
}

export default App;
