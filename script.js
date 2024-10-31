const images = [
    'assets/img/own/slider3.jpg',
    'assets/img/own/service1.jpeg',  // Add paths to more images
    'assets/img/own/slider-2.jpg'
  ];
  
  let currentIndex = 0;
  
  function changeBackgroundImage() {
    const mainSection = document.querySelector('.main');
    mainSection.style.backgroundImage = `url('${images[currentIndex]}')`;
  
    // Update index to show the next image
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  // Change image every 5 seconds
  setInterval(changeBackgroundImage, 5000);
  
  // Set initial background image
  changeBackgroundImage();
  
  document.addEventListener("wheel", (event) => {
    event.preventDefault();
    const scrollAmount = event.deltaY > 0 ? window.innerHeight : -window.innerHeight;
    window.scrollBy({
      top: scrollAmount,
      behavior: "smooth",
    });
  }, { passive: false });
  