// let chat =  document.querySelector(".chats");


// chat.addEventListener("click",()=>{
//      chat.style.display="block";

//     chat.classList.add("size");

//          setTimeout(function(){
//             chat.classList.toggle("size");
//          },5000); 
// });  
  
let chat =  Array.from(document.getElementsByClassName('chats'));

chat.forEach(chatBox)
  
function chatBox(element){
   

   element.addEventListener("click",()=>{
      element.style.display="block";
 
     element.classList.add("size");
 
          setTimeout(function(){
             element.classList.toggle("size");
          },5000); 
 });  

}
