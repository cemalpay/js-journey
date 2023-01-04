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
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "general",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "github",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function App() {
  return (
    <>
      {/*HEADER*/}
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="" />
        </div>
        <button className="btn btn-large btn-open">Create new X</button>
      </header>
      <NewXForm />
      {/*MAIN*/}
      <main className="main">
        <CategoryFilter />
        <XList />
      </main>
    </>
  );
}
function NewXForm() {
  return <form className="x-form">New X Form</form>;
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
function XList() {
  const xItems = initialFacts;
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
      <a className="source" href={xItem.source} target="_blank">
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
