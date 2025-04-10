import { reviews } from './ratings.js';

// inject current year to footer
const rightNow = new Date();
const year = rightNow.getFullYear();
document.querySelector('#year').textContent = year;



function toggleMenu() {
    document.querySelector("nav").classList.toggle("open");
    document.querySelector("#hamb").classList.toggle("open");
}
  
  const ham = document.querySelector("#hamb").addEventListener("click", () => {
    toggleMenu();
  });


  // making review cards from json
  const reviewCards = document.querySelector('.reviewCards');

  for (let i = 0; i < reviews.length; i++) {
    const card = document.createElement('section');
    const name = document.createElement('h5');
    const stars = document.createElement('div');
    const text = document.createElement('p');
    
    
    for (let j = 0; j < reviews[i].stars; j++) {
      const starImg = document.createElement('img');
      starImg.src = './svg/star.svg';
      stars.appendChild(starImg);
    }

    name.textContent = reviews[i].name;
    text.textContent = reviews[i].text;

    card.appendChild(name);
    card.appendChild(stars);
    card.appendChild(text);
    reviewCards.appendChild(card);
  }