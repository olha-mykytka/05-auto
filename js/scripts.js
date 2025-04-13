import { reviews } from './ratings.js';

const reviewCards = document.querySelector('.reviewCards');

for (let i = 0; i < reviews.length; i++) {
  const card = document.createElement('section');
  const name = document.createElement('h5');
  const stars = document.createElement('div');
  stars.classList.add('stars'); // ✨ important for styling
  const text = document.createElement('p');

  // Add star SVGs
  for (let j = 0; j < reviews[i].stars; j++) {
    const starImg = document.createElement('img');
    starImg.src = './svg/star.svg';
    starImg.alt = 'star';
    stars.appendChild(starImg);
  }

  name.textContent = reviews[i].name;
  text.textContent = reviews[i].text;

  card.appendChild(name);
  card.appendChild(stars);
  card.appendChild(text);
  reviewCards.appendChild(card);
}
const button = document.querySelector("#hamb");
const nav = document.querySelector("#mainNav");

button.addEventListener("click", () => {
  button.classList.toggle("open");
  nav.classList.toggle("open");
});