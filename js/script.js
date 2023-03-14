

// `
//      <div class="slide">
//         <img src="./${imgs}" alt="spiderman">
//      </div>
//  `


const imgs = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
]


const slider = document.querySelector('.slider');
let imgsCounter = 0;
let slides = '';

for (let i = 0 ; i < imgs.length ; i++){

    slides += `
        <div class="slide">
            <img src="./${imgs[i]}" alt="spiderman">
        </div>
    
    `;
}


slider.innerHTML += slides;

document.querySelectorAll('.slide')[imgsCounter].classList.add('active');


const next = document.querySelector('.down');
const prev = document.querySelector('.up')

next.addEventListener('click', nextImg);


function nextImg (){
    document.querySelectorAll('.slide')[imgsCounter].classList.remove('active');
    if (imgsCounter === imgs.length -1){
        imgsCounter = 0;
    } else {
        imgsCounter++;
    }
  
    document.querySelectorAll('.slide')[imgsCounter].classList.add('active');

}

prev.addEventListener('click', prevImg);


function prevImg (){
    document.querySelectorAll('.slide')[imgsCounter].classList.remove('active');
    if (imgsCounter === 0){
        imgsCounter = imgs.length -1;
        
    } else {
        imgsCounter--;
    }
  
    document.querySelectorAll('.slide')[imgsCounter].classList.add('active');

}



































