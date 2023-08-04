var audiolist=["crash","kick-bass","snare","tom-1","tom-2","tom-3","tom-4"];

for(var i=0;i<7;i++)
{  
   document.getElementsByTagName("button")[i].addEventListener("mousedown",function(){makesound(this.innerText); buttonAnimation(this.innerText);});
   
}
for(var i=0;i<7;i++)
{  
   document.getElementsByTagName("button")[i].addEventListener("mouseup",function(){ buttonAnimationclose(this.innerText);});
   
}
document.addEventListener("keydown",function(){makesound(event.key); buttonAnimation(event.key);});
document.addEventListener("keyup",function(){ buttonAnimationclose(event.key);});

function makesound(letter){
    switch (letter) {
        case "w":
            var audio=new Audio("./sounds/"+audiolist[0]+".mp3")
            audio.play();
            break;
        case "a":
            var audio=new Audio("./sounds/"+audiolist[1]+".mp3")
            audio.play();
            break;
        case "s":
            var audio=new Audio("./sounds/"+audiolist[2]+".mp3")
            audio.play();
            break;
        case "d":
            var audio=new Audio("./sounds/"+audiolist[3]+".mp3")
            audio.play();
            break;
        case "j":
            var audio=new Audio("./sounds/"+audiolist[4]+".mp3")
            audio.play();
            break;
        case "k":
            var audio=new Audio("./sounds/"+audiolist[5]+".mp3")
            audio.play();
            break;
        case "l":
            var audio=new Audio("./sounds/"+audiolist[6]+".mp3")
            audio.play();
            break;
        default:
            alert("wrong choice");
            break;
    }


}

function buttonAnimation(letter){
   var target=document.querySelector("."+letter);
   target.classList.add("pressed");
  
}
function buttonAnimationclose(letter){
    var target=document.querySelector("."+letter);
    target.classList.remove("pressed");
   
 }