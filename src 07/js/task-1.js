const categoriesNum = document.querySelector("ul");

const categoriesList = categoriesNum.querySelectorAll("ul");

console.log(`Number of categories: ${categoriesList.length}`);

const categoriesItems = document.querySelectorAll("#categories .item");

categoriesItems.forEach((item) => {
  const categoriesTitle = item.querySelector("h2").textContent;
  console.log(`Category: ${categoriesTitle}`);

  const categoriesElements = item.querySelectorAll("li").length;
  console.log(`Elements: ${categoriesElements}`);
});
