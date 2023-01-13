import supabase from "../supabase";
import { useState } from "react";

function XContent({ xItem, setX }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const isDisputed = xItem.votesUnicorn < xItem.votesFalse;
  async function handleVote(columnName) {
    setIsUpdating(true);
    const { data: updatedXList, error } = await supabase
      .from("xList")
      .update({ [columnName]: xItem[columnName] + 1 })
      .eq("id", xItem.id)
      .select();
    setIsUpdating(false);
    if (!error)
      setX((xItems) =>
        xItems.map((f) => (f.id === xItem.id ? updatedXList[0] : f))
      );
  }

  return (
    <li className="x-text">
      {isDisputed ? <span className="disputed"> [⛔Disputed]</span> : null}
      {xItem.text}
      <a className="source" href={xItem.source}>
        (Source)
      </a>
      <span className="tag">{xItem.category}</span>
      <div className="vote-buttons">
        <button
          className="btn-vote"
          onClick={() => handleVote("votesFalse")}
          disabled={isUpdating}
        >
          ⛔ {xItem.votesFalse}
        </button>
        <button
          className="btn-vote"
          onClick={() => handleVote("votesUnicorn")}
          disabled={isUpdating}
        >
          🦄 {xItem.votesUnicorn}
        </button>
      </div>
    </li>
  );
}

export default XContent;
