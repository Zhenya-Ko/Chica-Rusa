
console.log("Hello!");
visibility = document.getElementsByClassName("openwithclick");

var showpic = () =>{
   if (visibility[0].style.display ="none"){
       for (const n of visibility){
        n.style.display="inline-block";      
}
document.getElementById("getmorepics").innerText = "Показать меньше";}
else {
   for (const n of visibility){
      n.style.display="none";      
}
document.getElementById("getmorepics").innerText ="Все работы";
}
};



    // For loop works, but badly with this action
    // visibility[0].className ="open";

    // visivility.forEach(e => visibility[e].className="close");


// const buttonMorePics = document.getElementById("getmorepics");
// buttonMorePics.addEventListener("click", () => {
//    visibility[].style.display="inline-block";});