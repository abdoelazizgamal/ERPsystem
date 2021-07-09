    window.addEventListener("load",function(){
        document.querySelector(".preloader").classList.add('opacity-0');
    })


$(document).ready(function(){
    $(".menu-toggle").click(function(){
        $(".menu-toggle").toggleClass("active");
        $(".navbar nav").toggleClass("active");
    });
    $("nav ul li a").click(function(){
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });
    $(".menu-toggle").click(function(){
        $(".header-content").toggleClass("zzz");
    });
     //show hidden items from Services
   
    $('.services button').click(function (){
        $(".services-card.show").toggleClass("hidden");
    });
    $(".navbar nav li.lang").click(function(){
        $(".navbar nav li.lang ul").toggleClass("sh");
    });
});

//type writing
const texts =["مُطورين","مُصممين","خُبراء ","مُسوقين"];
let count =0;
let index=0;
let currentText="";
let letter="";
(function type(){
    if(count === texts.length)
    {
        count=0;
    }
    currentText =texts[count];
    letter=currentText.slice(0,++index);
    document.querySelector(".typing").textContent=letter;
    if(letter.length===currentText.length)
    {
        count++;
        index=0;
    }
    setTimeout(type,400);
}());

//portfolio item filter
const filterContainer = document.querySelector(".portfolio-filter"),
      filterBtns=filterContainer.children,
      totalfilterBtn=filterBtns.length,
      portfolioItems=document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem=portfolioItems.length;

      for (let i=0;i<totalfilterBtn;i++)
      {
            filterBtns[i].addEventListener("click" , function()
            {
                filterContainer.querySelector(".active").classList.remove("active");
                this.classList.add("active");

                const filterValue=this.getAttribute("data-filter");
               for(let k=0 ; k<totalPortfolioItem;k++)
               {
                   if(filterValue===portfolioItems[k].getAttribute("data-category"))
                   {
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                   }
                   else
                   {
                    portfolioItems[k].classList.remove("show");
                    portfolioItems[k].classList.add("hide");
                   }
                   if(filterValue==="all")
                   {
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");    
                   }
               }
            })
      }
// light box  
const lightbox=document.querySelector(".lightbox"),
      lightboxImg=document.querySelector(".lightbox-img"),
      lightboxClose=document.querySelector(".lightbox-close"),
      lightboxText=document.querySelector(".caption-text"),
      lightboxCounter=document.querySelector(".caption-counter");
let itemIndex=0;
for(let i=0; i<totalPortfolioItem;i++)
{
    portfolioItems[i].addEventListener("click" , function()
    {
        itemIndex=i;
        chageItem();
        toggleLightbox();  
    })
}
function nextItem()
{
    if(itemIndex===totalPortfolioItem-1)
    {
        itemIndex=0;
    }
    else
    {
        itemIndex++;
    }
    chageItem();
}
function prevItem()
{
    if(itemIndex===0)
    {
        itemIndex=totalPortfolioItem-1;
    }
    else
    {
        itemIndex--;
    }
    chageItem();
}
function toggleLightbox()
{
    lightbox.classList.toggle("open");
}
function chageItem()
{
    imgsrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightboxImg.src=imgsrc; 
    lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML=(itemIndex+1) + " of " + totalPortfolioItem;
}
//close lightbox
lightbox.addEventListener("click", function(event)
{
    if(event.target ===lightboxClose || event.target ===lightbox)
    {
        toggleLightbox();
    }
})

 //check  testi
 var leftArrow=$('.teste .fa-chevron-left'),
 righArrow=$('.teste .fa-chevron-right');
//check  testi
function checkClient(){
 if($('.client:first').hasClass('active')){
     leftArrow.fadeOut();
 }else{
     leftArrow.fadeIn();
 }
 if($('.client:last').hasClass('active')){
     righArrow.fadeOut();
 }else{
     righArrow.fadeIn();
 }
}

checkClient();

$('.teste i').click(function(){
if ($(this).hasClass('fa-chevron-right')) {
  $('.teste .active').fadeOut(500, function(){
         $(this).removeClass('active').next('.client').addClass('active').fadeIn(); 
         checkClient();
  });
}else{
    $('.teste .active').fadeOut(500, function(){
         $(this).removeClass('active').prev('.client').addClass('active').fadeIn(); 
         checkClient();
  });
}
});


//scroll top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
//Smooth scroll
// All animations will take exactly 1000ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});
   

///PlaceHolder
let input1 =document.getElementById('input1');
let input2 =document.getElementById('input2');
Placeholder = (input)=>
{
    input.onfocus = ()=>
    {
        input.setAttribute('data-place',input.getAttribute('placeholder'));
        input.setAttribute('placeholder','');
    }
    input.onblur = ()=>
    {
        input.setAttribute('placeholder',input.getAttribute('data-place'));
        input.setAttribute('data-place','');
    }
}
Placeholder(input1);
Placeholder(input2);