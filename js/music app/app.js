   window.addEventListener('load',() =>{
       const sounds=document.querySelectorAll('.sound');
       const pads=document.querySelectorAll('.pads div');
       const visual=document.querySelector('.visual');
       const color =['#c7d360','#73d360','#d39860','#d36082','#6b60d3','#d3c760'];

         pads.forEach((pad,index)=>{
          pad.addEventListener('click',function(){
              
              sounds[index].currentTime=0;
              sounds[index].play();
              createBubbles(index);
          });
       });
       const createBubbles= (index)=>{
          const bubble = document.createElement('div');
          visual.appendChild(bubble);
          bubble.style.backgroundColor=color[index];
          bubble.style.animation="jump 1s ease";
          bubble.addEventListener('animationend',function(){
              visual.removeChild(this); 
          });

       };


   });
