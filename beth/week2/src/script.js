//지도 열고 닫는 함수
const openMap = () => {
  document.querySelector(".map").classList.remove("hidden");
};

const closeMap = () => {
  document.querySelector(".map").classList.add("hidden");
};

document.getElementById("mapCloser").addEventListener("click", closeMap);
document.getElementById("mapOpener").addEventListener("click", openMap);

//모달창 열고 닫는 함수
const open = () => {
  document.querySelector(".modal").classList.remove("hidden");
};

const close = () => {
  document.querySelector(".modal").classList.add("hidden");
};

document.querySelector(".likesBtn").addEventListener("click", open);
document.querySelector(".close-box").addEventListener("click", close);
document.querySelector(".bg").addEventListener("click", close);

//모달 인풋창에 값 입력시 버튼 활성화 && 값 지울시 버튼 비활성화
const inputForm = document.querySelector(".name-input");
const makeBtn = document.querySelector(".make-btn");
const likes1 = document.getElementById("likes1");

inputForm.addEventListener("keyup", activeEvent);
makeBtn.addEventListener("click", changeColor);

function activeEvent() {
  switch (!inputForm.value) {
    case true:
      makeBtn.disabled = true;
      break;
    case false:
      makeBtn.disabled = false;
      break;
  }
}
function changeColor() {
  document.getElementById("likes1").style.fill = "#FF385C";
  close();
}

//숙소 사진 옆으로 넘기는 기능
const slides = document.querySelector(".slides");
const slideImg = document.querySelectorAll(".slides li");
let currentIdx = 0;
const slideCount = 5;
const prev = document.querySelector(".prevBtn");
const next = document.querySelector(".nextBtn");
const slidewidth = 310;

slides.style.width = slidewidth * 5 + "px";

function moveSlide(num) {
  slides.style.left = -num * 310 + "px";
  currentIdx = num;
}

prev.addEventListener("click", function () {
  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener("click", function () {
  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});
