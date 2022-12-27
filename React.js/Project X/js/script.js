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
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "javascript",
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

// Dom Elements
const btnOpen = document.querySelector(".btn-open");
const xForm = document.querySelector(".x-form");
const xList = document.querySelector(".x-list");

// FUNCTIONS

//Render x in list
xList.innerHTML = "";
createXList(initialFacts);
function createXList() {
  initialFacts.forEach((x) => {
    const xItem = document.createElement("li");
    xItem.classList.add("x-text");
    xItem.innerHTML = `
        <p>
          ${x.text}
          <a class="source" href="${x.source}" target="_blank">(Source)</a>
        </p>
        <span class="tag">${x.category}</span>
      `;
    xList.appendChild(xItem);
  });
}
const html = htmlArr.join("");
xList.insertAdjacentHTML("beforeend", html);

//Toggle Form visibility
btnOpen.addEventListener("click", () => {
  if (xForm.classList.contains("hidden")) {
    xForm.classList.remove("hidden");
    btnOpen.textContent = "Close";
  } else {
    xForm.classList.add("hidden");
    btnOpen.textContent = "Create New X";
  }
});
