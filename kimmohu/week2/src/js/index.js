const modal = document.getElementById('modal');
const btnModal = document.getElementById('btn-modal');
const btnModal2 = document.getElementById('btn-modal2');

btnModal.addEventListener('click', (e) => {
  modal.style.display = 'flex';
});
btnModal2.addEventListener('click', (e) => {
  modal.style.display = 'flex';
});

const closeBtn = document.querySelector('.close-area');
closeBtn.addEventListener('click', (e) => {
  modal.style.display = 'none';
});

const closeOverlay = document.querySelector('.modal-overlay');
closeOverlay.addEventListener('click', (e) => {
  modal.style.display = 'none';
});
