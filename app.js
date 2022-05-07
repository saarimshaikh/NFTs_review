const arrows = document.querySelectorAll(".arrow");
const nftsList = document.querySelectorAll(".NFTs-list");

arrows.forEach((arrow, i) => {
  const itemNumber = nftsList[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      nftsList[i].style.transform = `translateX(${
        nftsList[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      nftsList[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.NFTs-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
