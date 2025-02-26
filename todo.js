const DATA = [
    { text: "running", completed: false },
    { text: "reading book", completed: false }
];
  
const btn = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
  
const handleAddTodo = () => {
    const value = input.value.trim();
    if (value === '') {
      alert("You must write something!");
      return;
    }
    DATA.push({ text: value, completed: false });
    render();
    input.value = "";
};
  
const handleDelete = (itemIndex) => {
    DATA.splice(itemIndex, 1);
    render();
};
  
const render = () => {
    const template = DATA.map((todo, index) => {
      return `
        <li class="${todo.completed ? 'checked' : ''}" data-index="${index}">
          ${todo.text}
          <span onclick='handleDelete(${index})'>&times;</span>
        </li>
      `;
    });
    ul.innerHTML = template.join("");
};
ul.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const li = e.target;
      const index = li.dataset.index;
      DATA[index].completed = !DATA[index].completed;  
      render();
    }
});
btn.addEventListener("click", handleAddTodo);
window.addEventListener("load", render);
  
