import discover from "./data.js";
const ideasGrid = document.getElementById("ideas");
const pillTabs = document.getElementsByName("category");
const searchValue = document.getElementById("search");
const paginationContainer = document.getElementById("pagination");

let currentPage = 1;
const itemsPerPage = 10;
let currentFilteredData = [...discover];


async function loadDiscover() {
  localStorage.clear();

  updateDisplay()

  document
    .querySelector(".search-bar form")
    ?.addEventListener("submit", (e) => {
      e.preventDefault();
    });

  searchValue.addEventListener("change", (e) => {
    const searchedValue = e.target.value.toLowerCase();
    currentFilteredData =
      searchedValue === ""
        ? discover
        : discover.filter((cat) => cat.blub.includes(searchedValue));
    ((currentPage = 1), updateDisplay());
  });

  pillTabs.forEach((tab) => {
    tab.addEventListener("change", (e) => {
      const selectedCategory = e.target.value.toLowerCase();
      currentFilteredData =
        selectedCategory === "all"
          ? discover
          : discover.filter((cat) => cat.hashtags.includes(selectedCategory));

      ((currentPage = 1), updateDisplay());
    });
  });
}

function updateDisplay() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = currentFilteredData.slice(startIndex, endIndex);

  populateDiscover(paginatedItems);
  renderPagination();

  const ideaCards = document.querySelectorAll(".idea-card");

ideaCards.forEach(card => {
  card.addEventListener('click', function () {
    const id = card.dataset.id;
    const selectedIdea = discover.find(item => item.id == id);
    localStorage.setItem('previousPage', JSON.stringify('discover'))
    localStorage.setItem('ideaData', JSON.stringify(selectedIdea));
    location.href = "idea-details.html";
  });
});
}

function populateDiscover(discoverData) {
  ideasGrid.innerHTML = discoverData
    .map(
      (data) =>
        `<div class="idea-card" data-id="${data.id}">
        <div class="idea-img">
          <img src="${data.image}" alt="${data.title}">
          <p class="time">${data.time}</p>
        </div>
        <div class="idea-txt">
          <h3 class="card-title">${data.title}</h3>
          <p class="hashtags">${data.hashtags.join(" ")}</p>
        </div>
      </div>`
    )
    .join("");
}

function renderPagination() {
  const totalPages = Math.ceil(currentFilteredData.length / itemsPerPage);
  paginationContainer.innerHTML = "";

  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.className = i === currentPage ? "page-btn active" : "page-btn";

    btn.addEventListener("click", () => {
      currentPage = i;
      updateDisplay();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    paginationContainer.appendChild(btn);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadDiscover();
});
