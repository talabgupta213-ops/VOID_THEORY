

document.addEventListener("mousemove",e=>{


let p=document.createElement("div");


p.className="particle";


p.style.left=e.pageX+"px";


p.style.top=e.pageY+"px";


document.body.appendChild(p);



setTimeout(()=>{


p.remove();


},1000);



});




window.addEventListener("touchmove",e=>{


let touch=e.touches[0];


let p=document.createElement("div");


p.className="particle";


p.style.left=touch.pageX+"px";


p.style.top=touch.pageY+"px";


document.body.appendChild(p);



setTimeout(()=>{


p.remove();


},1000);



});

