

// `
//      <div class="slide">
//         <img src="./${imgs}" alt="spiderman">
//      </div>
//  `


{/* <div class="sliderthumb">
            <div class="row d-flex flex-column align-items-center">
                <div class="col-6 ">
                    <div class="thumbox">
                        <img src="./img/01.webp" alt="">
                    </div>
                </div>
                <div class="col-6 ">
                    <div class="thumbox">
                        <img src="./img/02.webp" alt="">
                    </div>
                </div>
                <div class="col-12 ">
                    <div class="thumbox">
                        <img src="./img/03.webp" alt="">
                    </div>
                </div>
                <div class="col-12 ">
                    <div class="thumbox">
                        <img src="./img/04.webp" alt="">
                    </div>
                </div>
                <div class="col-6 ">
                    <div class="thumbox">
                        <img src="./img/05.webp" alt="">
                    </div>
                </div>
            </div>

        </div> */}





        
const imgs = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
]



 const slideThumb = document.getElementById('thumbnails');
 let thumBox = '';
 for (let i = 0 ; i < imgs.length ; i++){
     thumBox = `
     <div class="sliderthumb">
         <div class="row d-flex flex-column align-items-center">
             <div class="col-6 ">
                 <div class="thumbox light-border">
                     <img src="./img/01.webp" alt="">
                 </div>
             </div>
             <div class="col-6 ">
                 <div class="thumbox">
                     <img src="./img/02.webp" alt="">
                 </div>
             </div>
             <div class="col-12 ">
                 <div class="thumbox">
                     <img src="./img/03.webp" alt="">
                 </div>
             </div>
             <div class="col-12 ">
                 <div class="thumbox">
                     <img src="./img/04.webp" alt="">
                 </div>
             </div>
             <div class="col-6 ">
                 <div class="thumbox">
                     <img src="./img/05.webp" alt="">
             </div>
             <div>
                <button class="up"><i class="fa fa-chevron-circle-up" ></i></i></button>
                <button class="down"><i class="fa fa-chevron-circle-down" ></i></button>
            </div>
        </div>
     </div>
  
  
     `
 }

 slideThumb.innerHTML = thumBox;








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
    document.querySelectorAll('.thumbox')[imgsCounter].classList.remove('light-border');
    
    if (imgsCounter === imgs.length -1){
        imgsCounter = 0;
    } else {
        imgsCounter++;
    }
  
    document.querySelectorAll('.slide')[imgsCounter].classList.add('active');
    document.querySelectorAll('.thumbox')[imgsCounter].classList.add('light-border');

}

prev.addEventListener('click', prevImg);


function prevImg (){
    document.querySelectorAll('.slide')[imgsCounter].classList.remove('active');
    document.querySelectorAll('.thumbox')[imgsCounter].classList.remove('light-border');
    if (imgsCounter === 0){
        imgsCounter = imgs.length -1;
        
    } else {
        imgsCounter--;
    }
  
    document.querySelectorAll('.slide')[imgsCounter].classList.add('active');
    document.querySelectorAll('.thumbox')[imgsCounter].classList.add('light-border');

}



































