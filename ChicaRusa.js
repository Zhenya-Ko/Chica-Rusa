
console.log("Hello!");

// Popup code
const popupLink =document.querySelector('.popup_link');
const body = document.querySelector('body'); // чтобы потом блокировать скрол(to block scroll later)
const lockPadding =document.querySelectorAll(".lock-padding");

let  unlock = true; // чтобы не было двойных нажатий(no double clicking)

const timeout = 500;

    popupLink.addEventListener("click", function(e) {
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const currentPopup =document.getElementById(popupName);
        popupOpen(currentPopup);
        // не делаем перезагрузку, потому что это ссылка(Remove page reload)
        e.preventDefault();
    })


const popupCloseIcon =document.querySelector('.close_popup');
    popupCloseIcon.addEventListener('click', function(e){ 
        popupClose(popupCloseIcon.closest('.popup'));
        e.preventDefault();
    })

function popupOpen(currentPopup) {
    if(currentPopup && unlock) {
        const popupActive =document.querySelector('.popup.open');
        if(popupActive) {
            popupClose(popupActive,false);
        } else{
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', function(e){
            if(!e.target.closest('.registration')){
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose (popupActive, doUnlock = true){
    if(unlock){
        popupActive.classList.remove('open');
        if(doUnlock){
            bodyUnLock();
        }
    }
}

//Блокируем скрол, потому что скрол пропадает и контент сдвинется(Scroll block, so the content doesn't move)
function bodyLock() {
    //высчитываем разницу (Difference= width of scroll)
    const lockPaddingValue =window.innerWidth - body.offsetWidth + 'px';
    // if we have fixed objects:
//     if(lockPadding.length > 0){
//     for(let index =0; index<lockPadding.length;index++){
//         const el = lockPadding[index];
//         el.style.paddingRight = lockPaddingValue;
//     }
// }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
//Нужно для того, чтобы не было двойного нажатия и скол нормально убирался(NO double clicking)
    unlock = false;
    setTimeout(function(){
        unlock=true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function() {
        // For fixed objects
        //     if(lockPadding.length > 0){
        // for(let index =0; index<lockPadding.length;index++){
        //             const el = lockPadding[index];
        //             el.style.paddingRight = '0px';
        //         }}
        body.style.paddingRight = '0px';
        body.classList.remove('lock'); 
    }, timeout);
    unlock = false;
    setTimeout(function(){
        unlock=true;
    }, timeout); 
}

// Close with Esc
document.addEventListener('keydown',function(e){
    if(e.which === 27){
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
})



// Show more pictures code 
// document.addEventListener("DOMContentLoaded", listen); one way to change the place of JS Link

var visibility = document.getElementsByClassName("openwithclick");
var arr = Array.from(visibility);
var photo = arr[0];
var button = document.getElementById("getmorepics");

button.addEventListener("click", showpic);

function showpic() {
    var compstyle =  window.getComputedStyle(photo).display;
    if (compstyle =="none"){
    arr.forEach(photo => {photo.style.display = "inline-block"});
    button.innerText = "Показать меньше";
    }
    else{
        arr.forEach(photo => {photo.style.display = "none"});
        button.innerText = "Все работы";
    }
}

