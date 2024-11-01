const images = [
    'https://res.cloudinary.com/df2fe2yzk/image/upload/w_1500,h_800/v1730428890/20230629_145910_jckkdj.webp',
    'https://res.cloudinary.com/df2fe2yzk/image/upload/w_1500,h_800/v1730428878/20230629_144422_zntkr9.webp',  // Add paths to more images
    'https://res.cloudinary.com/df2fe2yzk/image/upload/w_1500,h_800/v1730428889/20230629_142704_e0r8kj.webp'
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

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
  }
  document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger');
    
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
    