const details = document.querySelector('.details-container')
const detailsCard = document.querySelector('.details-card')

const pageValue = localStorage.getItem('previousPage')
const page = JSON.parse(pageValue)

async function loadDetailsPage() {
  let choice;

  if (page === 'discover') {
    const clickedCard = localStorage.getItem('ideaData');
    choice = JSON.parse(clickedCard);
  } else {
    const matches = JSON.parse(localStorage.getItem('matches'));
    choice = matches[Math.floor(Math.random() * matches.length)];
  }

  renderDetailsPage(choice);

  detailsCard.addEventListener('click', function (event) {
    if (event.target.id === 'complete-btn') {
      alert("Activity Completed");
      window.history.back();
    }

    if (event.target.id === 'another-btn') {
      const data = JSON.parse(localStorage.getItem('matches'));
      if (data.length <= 1) {
        alert("No more matches found! Try a new search.");
        window.history.back();
      }
      const currentIndex = data.findIndex(item => item.id === choice.id);
      if (currentIndex !== -1) {
        data.splice(currentIndex, 1);
      }
      localStorage.setItem('matches', JSON.stringify(data));
      const newChoice = data[Math.floor(Math.random() * data.length)];
      choice = newChoice;
      renderDetailsPage(newChoice);
    }
  });

  const back = document.querySelector('.back-circle');
  back.addEventListener('click', () => window.history.back());
}

function renderDetailsPage(data) {
  const isFromForm = page === 'form';

  detailsCard.innerHTML = `
    <div class="details-image-wrapper">
      <img src="${data.image}" alt="${data.title}" class="details-img">
    </div>

    <h1>${data.title}</h1>

    <div class="details-content">
      <div class="content-section">
        <h2 class="section-label">THE ESSENCE</h2>
        <p>${data.content}</p>
      </div>

      <div class="content-section">
        <p class="time">${data.time}</p>
        <p class="hashtags">${data.hashtags.join(" ")}</p>
      </div>
    </div>

    <div class="details-actions">
      <button class="btn-primary" id="complete-btn">Complete</button>
      ${isFromForm ? `<button class="btn-secondary" id="another-btn">Try Another</button>` : ''}
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  loadDetailsPage();
});