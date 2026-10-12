const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const loginModal = document.getElementById("loginModal");

// 1. Open modal
openModalBtn.addEventListener("click", () => {
  loginModal.showModal();
});

// 2. Close modal by button
closeModalBtn.addEventListener("click", () => {
  loginModal.close();
});

// 3. Restore focus when modal closes
loginModal.addEventListener("close", () => {
  openModalBtn.focus();
});
