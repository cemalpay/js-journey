import { useEffect, useState } from "react";
import supabase from "./supabase";
import "./css/style.css";
import "./css/style.css.map";

import Header from "./components/Header";
import XContent from "./components/XContent";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [xItems, setX] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(
    function () {
      async function getX() {
        setIsLoading(true);

        let query = supabase.from("xList").select("*");

        if (currentCategory !== "all") {
          query = query.eq("category", currentCategory);
        }

        const { data: xList, error } = await query
          .order("votesFalse", { ascending: true })
          .limit(1000);
        if (!error) setX(xList);
        else alert("There was a problem getting data");
        setIsLoading(false);
      }
      getX();
    },
    [currentCategory]
  );

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />

      {showForm ? <NewXForm setX={setX} setShowForm={setShowForm} /> : null}

      {/*MAIN*/}
      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory} />
        {isLoading ? <Loader /> : <XList xItems={xItems} setX={setX} />}
      </main>
    </>
  );
}

function Loader() {
  return <p className="loader">Loading...</p>;
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
  const [isUploading, setIsUploading] = useState(false);
  const [category, setCategory] = useState("");

  async function handleSubmit(event) {
    // 1. prevent browser from reloading
    event.preventDefault();

    // 2. check if data valid. if so add to list
    if (text && isValidHttpUrl(source) && category) {
      // 3. Upload new x to db
      setIsUploading(true);
      const { data: newXItem, error } = await supabase
        .from("xList")
        .insert([{ text, source, category }])
        .select();
      setIsUploading(false);

      // 4. add the new x item to the ui
      if (!error) setX((xItems) => [newXItem[0], ...xItems]);
      /*5. clear the form*/
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
        disabled={isUploading}
      />
      <input
        value={source}
        type="text"
        placeholder="Source"
        onChange={(e) => setSource(e.target.value)}
        disabled={isUploading}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
      >
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
        {CATEGORIES.map((category) => (
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
function XList({ xItems, setX }) {
  if (xItems.length === 0) {
    return <p className="no-x">No X found</p>;
  }
  return (
    <section>
      <ul className="x-list">
        {xItems.map((xItem) => (
          <XContent key={xItem.id} xItem={xItem} setX={setX} />
        ))}
      </ul>
    </section>
  );
}

export default App;
