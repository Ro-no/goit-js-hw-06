
const categoriesEl = document.getElementById("categories");
const elItems = [...categoriesEl.children];
const totalEl = elItems.length;
console.log(`Number of categories: ${totalEl}`);

elItems.forEach((element) => {
  const elTitle = element.firstElementChild;
  const totalElItems = elTitle.nextElementSibling.children;
  console.log("Category: ", elTitle.textContent);
  console.log("Elements: ", totalElItems.length);
});