import discover from "./data.js";
const loveForm = document.getElementById('love-form');
localStorage.clear();


loveForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(loveForm);
  const selectedRecipient = formData.get('recipient');
  const selectedTime = parseInt(formData.get('time'));
  const selectedMood = formData.get('mood');

  const recipientMap = {
    'myself': '#selflove',
    'partner': '#partner',
    'community': '#community'
  };
  const targetHashtag = recipientMap[selectedRecipient];

  const matches = discover.filter(item => {
    const itemTime = parseInt(item.time);
    const isRightWho = item.hashtags[0].toLowerCase() === targetHashtag.toLowerCase();
    const isRightMood = item.mood.toLowerCase() === selectedMood.toLowerCase();

    let isInTimeBucket = false;
    if (selectedTime === 5) {
      isInTimeBucket = itemTime >= 0 && itemTime <= 29;
    } else if (selectedTime === 30) {
      isInTimeBucket = itemTime >= 30 && itemTime <= 59;
    } else if (selectedTime === 60) {
      isInTimeBucket = itemTime >= 60;
    }

    return isRightWho && isRightMood && isInTimeBucket;
  });

  if (matches.length > 0) {
    localStorage.setItem('matches', JSON.stringify(matches));
    localStorage.setItem('previousPage', JSON.stringify('form'))
    location.href = "idea-details.html";
  } else {
    alert("No activities found in this time range. Try a different mood!");
  }
});
