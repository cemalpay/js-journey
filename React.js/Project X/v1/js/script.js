const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "development",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
];
// Dom Elements
const btn = document.querySelector(".btn-open");
const xForm = document.querySelector(".x-form");
const xList = document.querySelector(".x-list");

// FUNCTIONS

//Render x in list
xList.innerHTML = "";

//Load data from supabase
loadData();

async function loadData() {
  const res = await fetch(
    "https://nkfrsvaqfwhdrscsccqj.supabase.co/rest/v1/x-list",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rZnJzdmFxZndoZHJzY3NjY3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIwMTI1MDcsImV4cCI6MTk4NzU4ODUwN30.48a_RYFtgAAjqdZKu9LQq5lhRdyu5WzdQXPMQNBE5dI",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rZnJzdmFxZndoZHJzY3NjY3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIwMTI1MDcsImV4cCI6MTk4NzU4ODUwN30.48a_RYFtgAAjqdZKu9LQq5lhRdyu5WzdQXPMQNBE5dI",
      },
    }
  );
  const data = await res.json();

  createXList(data);
}

function createXList(dataArray) {
  const htmlArr = dataArray.map(
    (x) =>
      `<li class="x-text">
        <p>
          ${x.text}
          <a class="source" href="${x.source}" target="_blank">(Source)</a>
        </p>
        <span class="tag" style="background-color: #e0e0e0">${x.category}</span>
        </li>`
  );
  const html = htmlArr.join("");
  xList.insertAdjacentHTML("beforeend", html);
}

//Toggle Form visibility
btn.addEventListener("click", () => {
  if (xForm.classList.contains("hidden")) {
    xForm.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    xForm.classList.add("hidden");
    btn.textContent = "Create New X";
  }
});
