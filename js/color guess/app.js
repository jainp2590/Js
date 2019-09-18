 var numSquares=6;
 var color=generateColor(numSquares);
 var squares=document.querySelectorAll(".square");
 var pickedColor=color[parseInt(Math.random() *color.length )];
 var colorDisplay=document.getElementById("colorDisplay");
 colorDisplay.textContent=pickedColor;
 var messageDisplay=document.getElementById("messageDisplay");
 var h1=document.querySelector("h1");
 var reset=document.getElementById("reset");
 var easyBtn=document.getElementById("easyBtn");
 var hardBtn=document.getElementById("hardBtn");
 easyBtn.addEventListener('click',function(){
     easyBtn.classList.add("selector");
     hardBtn.classList.remove("selector");
     numSquares=3;
     color=generateColor(numSquares);
     pickedColor=color[parseInt(Math.random() *color.length )];
     for (var j=0;j<squares.length;j++){
         if(color[j]){
        squares[j].style.background=color[j];
         }else{
        squares[j].style.display="none";
         }
     }
  
     h1.style.background="steelblue";
     reset.textContent="New Color";
     messageDisplay.textContent="";
 });
 hardBtn.addEventListener('click',function(){
    easyBtn.classList.remove("selector");
    hardBtn.classList.add("selector");
    numSquares=6;
    color=generateColor(numSquares);
     pickedColor=color[parseInt(Math.random() *color.length )];
     for (var j=0;j<squares.length;j++){
         squares[j].style.background=color[j];
        squares[j].style.display="block";
     
     }
     h1.style.background="steelblue";
     reset.textContent="New Color";
     messageDisplay.textContent="";
});
 reset.addEventListener("click",function(){
     color=generateColor(numSquares);
     pickedColor=color[parseInt(Math.random() *color.length )];
     colorDisplay.textContent=pickedColor;
     for (var j=0;j<squares.length;j++){
        squares[j].style.background=color[j];
     }
     h1.style.background="steelblue";
     reset.textContent="New Color";
     messageDisplay.textContent="";
 });
 for(var i=0;i<squares.length;i++){
     squares[i].style.background=color[i];
     squares[i].addEventListener('click',function(){
       var clickedColor=this.style.background;
       console.log(clickedColor,pickedColor);
       if(clickedColor === pickedColor)
       {
           messageDisplay.textContent="Correct!";
           changeColor(clickedColor);
           h1.style.background=clickedColor;
           reset.textContent="Play Again?";

       }else{
           this.style.background="#232323";
           messageDisplay.textContent="Try Again";
       }

     });
 }
  
 function changeColor(color){
     for (var j=0;j<squares.length;j++){
         squares[j].style.background=color;
     }
 }

 function generateColor(num){
     var arr=[];
     for (var i=0;i<num;i++){
         var a=Math.floor(Math.random() *256);
         var b=Math.floor(Math.random() *256);
         var c=Math.floor(Math.random() *256);
         arr[i]="rgb("+a+", "+b+", "+c+")";
     }
     return arr;
 }

 function restart(){

 }