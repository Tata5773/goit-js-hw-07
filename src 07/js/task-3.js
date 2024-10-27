const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", () => {
  const trimedInput = inputEl.value.trim();
  outputEl.textContent = trimedInput ? trimedInput : "Anonymous";
});
