import XContent from "./XContent";

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

export default XList;
