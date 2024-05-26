// slider 1 code from swiper js
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        loop: true,
      },
    });



    // slider 2 code from swiper js
    document.addEventListener('DOMContentLoaded', function () {
        var swiper = new Swiper(".mySwiper2", {
            slidesPerView: 4,
            spaceBetween: 0,
            loop: true,
            autoplay:{
              delay:3000,
            },
            navigation: {
                nextEl: ".x1free",
                prevEl: ".x2free",
            },
            breakpoints:{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 8,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                }
              }
      
        });

        swiper.on('breakpoint', function () {
            console.log('Breakpoint changed');
        });
    });

// slider 3 code from swiper js
    var swiper = new Swiper(".mySwiper3", {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          loop: true,
        },
      });

 // swiper code 1 from swiper js
    var swiper = new Swiper('.mySwiper', {
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
          loop: true,
      },
      on: {
          slideChange: function () {
              let bullets = document.querySelectorAll('.swiper-pagination-bullet');
              bullets.forEach((bullet, index) => {
                  if (index <= swiper.activeIndex) {
                      bullet.classList.add('swiper-pagination-bullet-active');
                  } else {
                      bullet.classList.remove('swiper-pagination-bullet-active');
                  }
              });
          },
      },
  });


  // adding the bullets with the first one active as shows 
  document.addEventListener('DOMContentLoaded', (event) => {
    let bullets = document.querySelectorAll('.swiper-pagination-bullet');
    bullets.forEach((bullet, index) => {
        if (index === 0) {
            bullet.classList.add('swiper-pagination-bullet-active');
        }
    });
});

// code for the side bar 
document.addEventListener('DOMContentLoaded', function() {
  const toggleSidebarBtn = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');
  const sidebarContent = document.getElementById('sidebarContent');
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const closeIcon = document.getElementById('closeIcon');
  const sidebarSignature = document.getElementById('sidebarSignature');

  toggleSidebarBtn.addEventListener('click', function() {
      sidebar.classList.toggle('translate-x-0');
      sidebar.classList.toggle('sidebar-open'); // Toggle border when sidebar is open
      sidebarContent.classList.toggle('hidden');
      hamburgerIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
      sidebarSignature.classList.toggle('hidden');
  });

  // this if value is for making the signature show and hide
  if (!sidebar.classList.contains('translate-x-0')) {
      sidebarSignature.classList.remove('hidden');
  }
});