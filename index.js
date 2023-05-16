// Lấy các phần tử từ DOM
const slideElement = document.getElementById('slide'); // Lấy phần tử img 
const previousBtn = document.getElementsByClassName('prev-btn')[0]; // lấy nút quay lại
const nextBtn = document.getElementsByClassName('next-btn')[0];     // lấy nút chuyển tiếp

// Mảng chứa đường dẫn tới các hình ảnh của slideshow
const images = ['images/dom1.jpg', 'images/dom2.jpg', 'images/dom3.jpg'];
let currentSlide = 0; // biến để random ảnh

// Hàm chuyển đổi slide tiếp theo
function nextSlide() {
  currentSlide = (currentSlide + 1) % images.length;
  slideElement.src = images[currentSlide];
}

// Hàm chuyển đổi slide trước đó
function previousSlide() {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  slideElement.src = images[currentSlide]; 
}

// Xử lý sự kiện khi nhấp vào nút previous và next
previousBtn.addEventListener('click', previousSlide);
nextBtn.addEventListener('click', nextSlide);
setInterval(nextSlide,1000);

console.log(previousBtn);
console.log(nextBtn);