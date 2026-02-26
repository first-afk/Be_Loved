import discover from "./data.js";
const ideasGrid = document.getElementById("ideas");
const pillTabs = document.getElementsByName("category");

/*
step 1. get ideas section
step 2. inside ideas section, create idea-card div
step 3. inside idea-card div, create 2 divs: idea-img div and idea-txt div
step 4. inside idea-img div, create img tag and p tag with class 'time'
step 5. inside idea-txt div, create h3 tag, p tag and button tag

user filter
step 6. get category filters
step 7. add event listener to radio input
step 8. check value of radio input. display cards that contain value of radio input
*/
async function loadDiscover() {
  populateDiscover(discover);

  pillTabs.forEach((tab) => {
    tab.addEventListener("change", (e) => {
      const selectedCategory = e.target.value.toLowerCase();
      const filteredCat =
        selectedCategory === "all"
          ? discover
          : discover.filter((cat) => cat.hashtags.includes(selectedCategory));

      populateDiscover(filteredCat);
    });
  });
}

function populateDiscover(discoverData) {
  ideasGrid.innerHTML = discoverData
    .map(
      (data) =>
        `<div class="idea-card">
        <div class="idea-img">
        <img src=${data.image} alt="${data.title}">
        <p class="time">${data.time}</p>
        </div>
        <div class="idea-txt">
        <h3 class="card-title">${data.title}</h3>
        <p class="hashtags">${data.hashtags.join(" ")}</p>
        </div>
    </div>
    `,
    )
    .join("");
}

loadDiscover();
