import { useState } from "react";
import supabase from "../supabase";

const CATEGORIES = [
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

function NewXForm({ setX, setShowForm }) {
  const [title, setTitle] = useState("");
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
        .insert([{ title, text, source, category }])
        .select();
      setIsUploading(false);

      // 4. add the new x item to the ui
      if (!error) setX((xItems) => [newXItem[0], ...xItems]);
      /*5. clear the form*/
      setTitle("");
      setText("");
      setSource("");
      setCategory("");
      // 6. close the form
      setShowForm(false);
    }
  }

  return (
    <form className="x-form" onSubmit={handleSubmit}>
      <input
        id="title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isUploading}
      />
      <div className="input-group">
        <input
          id="text"
          className="inputText"
          type="text"
          placeholder="Write here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={isUploading}
        />
      </div>
      <button className="btn-input" type="button" onClick={() => addNewInput()}>
        +
      </button>
      <input
        id="source"
        value={source}
        type="text"
        placeholder="Source"
        onChange={(e) => setSource(e.target.value)}
        disabled={isUploading}
      />
      <select
        id="category"
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

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}
let inputCount = 2;
function addNewInput() {
  const i = inputCount;
  let input = document.createElement("input");
  console.log("input ekledim");
  input.type = "text";
  input.placeholder = "Step" + i + "...";
  input.id = "text" + i;
  input.className = "inputText";
  document.querySelector(".input-group").appendChild(input);
  inputCount++;
}

export default NewXForm;
