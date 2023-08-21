window.onload = () => {
  const grid = document.getElementById("my-grid");

  const masonry = new Masonry(grid, {
    itemSelector: ".my-grid-item",
    gutter: 35,
  });
};

const toggleSearch = () => {
  document.getElementById("searchInput").classList.toggle("hidden");
  document.getElementById("searchIcon").classList.toggle("bg-[#F5F0EC]");
};

const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-button");
const modalContent = document.getElementById("modal-content");
const modalWidth = document.getElementById("modal-width");

const cardProjekty = document.getElementById("card-projekty");
const cardWizualizacje = document.getElementById("card-wizualizacje");
const cardRealizacje = document.getElementById("card-realizacje");

const openProjektyModal = () => {
  modal.classList.remove("hidden");
  modalWidth.classList.add('w-full')

  const paragraphTitle = document.createElement("p");
  paragraphTitle.innerText = "Przykładowe projekty:";
  paragraphTitle.classList.add("leading-8");

  const div = document.createElement("div");
  div.classList.add("flex");
  div.classList.add("gap-[30px]");

  const firstImage = document.createElement("img");
  const secondImage = document.createElement("img");
  const thirdImage = document.createElement("img");

  firstImage.setAttribute("src", "./media/img/Photo-7.png");
  secondImage.setAttribute("src", "./media/img/Photo-9.png");
  thirdImage.setAttribute("src", "./media/img/Photo-3.png");

  firstImage.classList.add("w-[30%]");
  secondImage.classList.add("w-[30%]");
  thirdImage.classList.add("w-[30%]");

  modalContent.replaceChildren(paragraphTitle);
  modalContent.appendChild(div);
  div.appendChild(firstImage);
  div.appendChild(secondImage);
  div.appendChild(thirdImage);
};

const openWizualizacjeModal = () => {
  modal.classList.remove("hidden");
modalWidth.classList.add('w-full')

  const paragraphTitle = document.createElement("p");
  paragraphTitle.innerText = "Przykładowe wizualizacje:";
  paragraphTitle.classList.add("leading-8");

  const div = document.createElement("div");
  div.classList.add("flex");
  div.classList.add("gap-[30px]");

  const firstImage = document.createElement("img");
  const secondImage = document.createElement("img");
  const thirdImage = document.createElement("img");

  firstImage.setAttribute("src", "./media/img/Photo-4.png");
  secondImage.setAttribute("src", "./media/img/Photo-5.png");
  thirdImage.setAttribute("src", "./media/img/Photo-6.png");

  firstImage.classList.add("w-[30%]");
  secondImage.classList.add("w-[30%]");
  thirdImage.classList.add("w-[30%]");

  modalContent.replaceChildren(paragraphTitle);
  modalContent.appendChild(div);
  div.appendChild(firstImage);
  div.appendChild(secondImage);
  div.appendChild(thirdImage);
};

const openRealizacjeModal = () => {
  modal.classList.remove("hidden");
  modalWidth.classList.add('w-full')

  const paragraphTitle = document.createElement("p");
  paragraphTitle.innerText = "Przykładowe wizualizacje:";
  paragraphTitle.classList.add("leading-8");

  const div = document.createElement("div");
  div.classList.add("flex");
  div.classList.add("gap-[30px]");

  const firstImage = document.createElement("img");
  const secondImage = document.createElement("img");
  const thirdImage = document.createElement("img");

  firstImage.setAttribute("src", "./media/img/Photo-1.png");
  secondImage.setAttribute("src", "./media/img/Photo-2.png");
  thirdImage.setAttribute("src", "./media/img/Photo-8.png");

  firstImage.classList.add("w-[30%]");
  secondImage.classList.add("w-[30%]");
  thirdImage.classList.add("w-[30%]");

  modalContent.replaceChildren(paragraphTitle);
  modalContent.appendChild(div);
  div.appendChild(firstImage);
  div.appendChild(secondImage);
  div.appendChild(thirdImage);
};

const closeModal = () => {
  modal.classList.add("hidden");
};

cardProjekty.onclick = () => openProjektyModal();
cardWizualizacje.onclick = () => openWizualizacjeModal();
cardRealizacje.onclick = () => openRealizacjeModal();
closeButton.onclick = () => closeModal();

// close modal when clicking on window
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.classList.add("hidden");
  }
};

// Photo Gallery
const photoCollection = document.querySelectorAll(".photo");

Array.from(photoCollection).forEach((item) => {
  item.addEventListener("click", (e) => {
    src = `./media/img/${e.target.id}.png`;
    modal.classList.remove("hidden");

    const newImg = document.createElement("img");
    newImg.setAttribute("src", src);

    modalWidth.classList.add('w-fit')
    modalContent.replaceChildren(newImg);
  });
});
