
///////////////////////////////////////////
////////////////////////////////////////////////////////////
              ///////////////////////////
////////////// <--- Creat Tabs  ----->/////////////////////
              /////////////////////////
let tabs = $('.tabs li')
let arryTabs = Array.from(tabs)
let text = $('.text div')
let arryText = Array.from(text)
arryTabs.forEach((elemant) =>
{
  elemant.addEventListener('click', (e)=>
  {
    arryTabs.forEach((elemant) =>
    {
      elemant.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
    arryText.forEach((texts) =>
    {
      texts.style.display = 'none'
    })
    let ev = e.currentTarget.dataset.cont
    $(ev).css ('display' , 'block')
  })
})      
//////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////

var swiper = new Swiper(".slider", {
  autoplay: {
    delay: 3000,
  },
  freeMode: {
    enabled: true,
    sticky: true,
  },
  slidesPerView:"auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

  }

});
/////////////////////////////////////////////////////////
////////////////////////////////////////
$(".static").mouseleave(
  function () {
    $(this).removeClass("static");
  }
);
