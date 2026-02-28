const loveCard = document.querySelectorAll(".love");

loveCard.forEach((card) => {
  card.addEventListener("click", function (e) {
    e.preventDefault();
    location.href = "./pages/love-form.html";
  });
});
