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

const cardProjekty = document.getElementById("card-projekty");
const cardWizualizacje = document.getElementById("card-wizualizacje");
const cardRealizacje = document.getElementById("card-realizacje");

const modalProjekty = document.getElementById("modal-projekty");
const modalWizualizacje = document.getElementById("modal-wizualizacje");
const modalRealizacje = document.getElementById("modal-realizacje");

const openProjektyModal = () => {
  modal.classList.remove("hidden");
  modalProjekty.classList.remove("hidden");
  modalWizualizacje.classList.add("hidden");
  modalRealizacje.classList.add("hidden");
};

const openWizualizacjeModal = () => {
  modal.classList.remove("hidden");
  modalProjekty.classList.add("hidden");
  modalWizualizacje.classList.remove("hidden");
  modalRealizacje.classList.add("hidden");
};

const openRealizacjeModal = () => {
  modal.classList.remove("hidden");
  modalProjekty.classList.add("hidden");
  modalWizualizacje.classList.add("hidden");
  modalRealizacje.classList.remove("hidden");
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
    src = e.target.src;
    modal.classList.remove("hidden");
    const modalC = document.getElementById("modal-content");
    const newImg = document.createElement("img");
    newImg.setAttribute("src", src);
    modalC.replaceChildren(newImg);
  });
});
