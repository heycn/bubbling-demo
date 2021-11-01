const level1 = document.querySelector(".level1");
const level2 = document.querySelector(".level2");
const level3 = document.querySelector(".level3");
const level4 = document.querySelector(".level4");
const level5 = document.querySelector(".level5");
const level6 = document.querySelector(".level6");
const level7 = document.querySelector(".level7");

let n = 1;

// 模拟冒泡
const removeX = (e) => {
  const t = e.currentTarget;
  setTimeout(() => {
    t.classList.remove("x");
  }, n * 1000);
  n += 1;
};

level1.addEventListener("click", removeX);
level2.addEventListener("click", removeX);
level3.addEventListener("click", removeX);
level4.addEventListener("click", removeX);
level5.addEventListener("click", removeX);
level6.addEventListener("click", removeX);
level7.addEventListener("click", removeX);
