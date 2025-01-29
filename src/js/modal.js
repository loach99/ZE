import { data } from '../data.js';
const ratingBtn = document.querySelector('.rating-btn');
const ratingInner = document.getElementById("rating-inner");
const closeModalBtn = document.querySelector('.rating-close');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const tabs = document.querySelectorAll('.tab');
const {rating, friends} = data;

ratingBtn.addEventListener('click', () => {
    modal.style.top = '0';
    overlay.style.display = 'block';
    setTimeout(() => overlay.style.opacity = '1', 10);
});

closeModalBtn.addEventListener('click', () => {
    modal.style.top = '-100%';
    overlay.style.opacity = '0';
    setTimeout(() => overlay.style.display = 'none', 300); 
});

overlay.addEventListener('click', () => {
    modal.style.top = '-100%';
    overlay.style.opacity = '0';
    setTimeout(() => overlay.style.display = 'none', 300);
});

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(e => e.classList.remove('active'))
        tab.classList.add('active')
    })
});
rating.slice().sort((a, b) => b.points - a.points).forEach((item, i) => {
    const node = document.createElement('li');
    node.innerHTML = `
        <span class="place">${i + 1}</span>
        <span class="name">${item.name}</span>
        <span class="experience">${item.points}</span>
    `;
    if (friends.some(e => e.id == item.id)) node.classList.add('friend');
    ratingInner.appendChild(node);
});