$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

const hamburger = document.querySelector(".hamburger")
const closeBtn = document.querySelector(".closeMenu")
const mainMenu = document.querySelector(".mainMenu")
const product = document.querySelector(".product")
const dropdown = document.querySelector(".dropdown-content")
const colHeading = document.querySelectorAll(".col-heading")

colHeading.forEach(heading=>{
    heading.addEventListener("click",()=>{
        heading.classList.toggle("hidden")
    })
})

closeBtn.addEventListener("click",()=>{
    mainMenu.classList.toggle("active")
})

hamburger.addEventListener("click",()=>{
    mainMenu.classList.toggle("active")
})

product.addEventListener("click",()=>{
    dropdown.classList.toggle("show")
    product.classList.toggle("show")
})


