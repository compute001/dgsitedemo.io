console.log('working');

let firstPhotoBtns = document.querySelectorAll('.firstbackphoto');
let secondPhotoBtns = document.querySelectorAll('.secondbackphoto');
console.log(firstPhotoBtns[0]);

let header = document.querySelector('.header');



firstPhotoBtns.forEach(function(item){
item.addEventListener('click',function(){
  header.style.backgroundImage = 'url("https://images.unsplash.com/photo-1522973717924-b10fe4e185cc?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
 
  firstPhotoBtns[1].textContent = '01';
})
})


secondPhotoBtns.forEach(function(item){
  item.addEventListener('click',function(){
   
    header.style.backgroundImage = 'url("https://images.unsplash.com/photo-1664860506216-9718e10670c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    firstPhotoBtns[1].textContent = '02';
  })
  })

  // DIAMOND GALLERY
  let images = document.querySelectorAll(".diamondgallery img");
      console.log(images);
      images.forEach(function (item) {
        item.addEventListener("mouseenter", function () {
          item.classList.add("activediamond");
          images.forEach(function (item1) {
            if (!(item1.className == "activediamond")) {
              console.log("no active class");
              item1.style.filter = "grayscale(0.6)";
            }
          });
        });
        item.addEventListener("mouseleave", function () {
          item.classList.remove("activediamond");
          images.forEach(function (item1) {
            if (!(item1.className == "activediamond")) {
              console.log("no active class");
              item1.style.filter = "grayscale(0)";
            }
          });
        });
      });

      //Different Locations
      let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click',function(){
    let items = document.querySelectorAll('.item');
    
    document.querySelector('.slide').appendChild(items[0]);
})

prev.addEventListener('click',function(){
    let items = document.querySelectorAll('.item');
    
    document.querySelector('.slide').prepend(items[items.length - 1]);
})

// MULTIPLE IMAGE SLIDER

const initSlider = () =>{
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".containerwrap .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  //Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) =>{
     const startX = e.clientX;
     const thumbPosition = scrollbarThumb.offsetLeft;

     //Update thumb position on mouse move
     const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

      const boundedPosition = Math.max(0,Math.min(maxThumbPosition, newThumbPosition));

      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;

     }

     //Remove event listeners on mouse up
     const handleMouseUp = () => {
      document.removeEventListener("mousemove",handleMouseMove);
      document.removeEventListener("mouseup",handleMouseUp);;
     }

     //Add event listeners for drag interaction
     document.addEventListener("mousemove",handleMouseMove);
     document.addEventListener("mouseup",handleMouseUp);
  });

  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
      button.addEventListener('click',()=>{
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({left:scrollAmount, behavior:"smooth"});
      })
  })

  const  handleSlideButtons = () =>{
  slideButtons[0].style.display = imageList.scrollLeft <=0 ? "none" : "block";

  slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  }

   // update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = ()=>{
  const scrollPosition = imageList.scrollLeft;
  const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
  scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  imageList.addEventListener("scroll", ()=>{
      handleSlideButtons();
      updateScrollThumbPosition();
  })

  const maintext = document.querySelector('.header .maintext h1');
  maintext.classList.add('anims');

  const navbar = document.querySelector(".navbar");
  navbar.classList.add('anim2');

  const logo = document.querySelector(".logo");
  logo.classList.add('anim1');

}

window.addEventListener("load", initSlider);

