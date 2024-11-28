const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too! 😘";
  gif.src =
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3BtcDNwOXRoNHd1ZzYxZ2pvamZkNndnZDlmNnBkc3B1aXFreWM3ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1fgl4fkw0azQH2lAcJ/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});