const randomizer = document.querySelector(".randomizer");
const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");

const fetchData = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  const { slip } = data;
  adviceId.innerHTML = `#${slip.id}`;
  adviceText.innerHTML = slip.advice;
};

fetchData();
randomizer.addEventListener("click", fetchData);
