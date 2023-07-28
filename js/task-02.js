const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// --------------1

const ulEl = document.querySelector ("#ingredients");
for (const ingredient of ingredients) {
    const liEl = document.createElement('li');
    liEl.textContent = ingredient;
    liEl.classList.add('item');
    ulEl.appendChild(liEl);
    document.body.appendChild(ulEl);
}

// --------------2

const markup = ingredients
    .map((ingredient) => `<li class ='item'>${ ingredient}</li>`)
    .join("")

document.body.insertAdjacentHTML('afterbegin', `<ul>${markup} </ul>`);

// --------------3

const ulElement = document.querySelector ("#ingredients");
ingredients.forEach(function (ingredient, index) {
  const liElement = document.createElement("li");
  liElement.textContent = ingredient;
  liElement.classList.add("item");
  ulElement.appendChild(liElement);
  document.body.appendChild(ulElement);
});
