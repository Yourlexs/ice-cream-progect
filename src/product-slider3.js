var slides=document.querySelector('.milkshake-product').children;
var nextSlide=document.querySelector(".product-button-forward");
var prevSlide=document.querySelector(".product-button-backward");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
    next("next");
}
prevSlide.onclick=function () {
    next("prev");
}

function next(direction){
    if(direction=="next"){
        index++;
         if(index==totalSlides){
             index=0;
         }
    }
    else{
        if(index==0){
            index=totalSlides-1;
        }
        else{
            index--;
        }
    }

    for(i=0;i<slides.length;i++){
        slides[i].classList.remove("active");
    }

    slides[index].classList.add("active");

}