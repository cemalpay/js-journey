import { useEffect, useState } from "react";
import supabase from "./supabase";
import "./css/style.css";
import "./css/style.css.map";

import Header from "./components/Header";
import NewXForm from "./components/NewXForm";
import XList from "./components/XList";
import CategoryFilter from "./components/CategoryFilter";
import Loader from "./components/Loader";

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

export default App;
