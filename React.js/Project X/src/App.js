import "./css/style.css";
import "./css/style.css.map";

function App() {
  return (
    <>
      {/*HEADER*/}
      <header class="header">
        <div class="logo">
          <img src="logo.png" alt="" />
        </div>
        <button class="btn btn-large btn-open">Create new X</button>
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
function CategoryFilter() {
  return <aside>Category Filter</aside>;
}
function XList() {
  return <section>X List</section>;
}

export default App;
