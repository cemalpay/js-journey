import supabase from "../supabase";
import { useState } from "react";

function XContent({ xItem, setX }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isBigger140, setIsBigger140] = useState(false);
  const [isActive, setIsActive] = useState(false);
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
  const handleToggle = () => {
    setIsActive(!isActive);
  };
  function ReadMoreButton() {
    if (xItem.text.length > 140) {
      setIsBigger140(true);
      return (
        <>
          <div className="read-more">
            <button onClick={handleToggle} className="read-more__btn">
              READ MORE
            </button>
          </div>
        </>
      );
    }
  }
  return (
    <li className={`x-text ${isActive ? "active" : ""}`}>
      {isBigger140 ? (
        <div>
          <h3 className="title" style={{ opacity: 1 }}>
            {" "}
            {xItem.title}
          </h3>
          <p style={{ opacity: 0.2 }}>{xItem.text}</p>
        </div>
      ) : (
        <p>
          {" "}
          <h3 className="title"> {xItem.title}</h3> {xItem.text}{" "}
        </p>
      )}
      <div className="x-secondary">
        <div className="x-secondary__top">
          <a className="source" href={xItem.source} target="_blank">
            (Source)
          </a>
          <span className="tag">{xItem.category}</span>
        </div>
        <div className="x-secondary__bottom">
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
        </div>
        {isDisputed ? <span className="disputed"> [⛔Disputed]</span> : null}
      </div>
      <ReadMoreButton />
    </li>
  );
}

export default XContent;
