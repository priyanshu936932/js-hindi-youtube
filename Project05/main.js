const body=document.querySelector('body');

const color=["red","yellow","pink","blue","white","cyan","purple"]

const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color="#";
    for(let i=0;i<6;i++){
       const value=parseInt(Math.random()*16);
       color+=hex[value];
    }
    return color;
}

const sayDate= function(str){
        console.log(str,Date.now().toLocaleString())
        body.style.background=randomColor();

    }
let startPrinting;

document.querySelector("#start").addEventListener("click",function(){
    if(startPrinting==null)startPrinting = setInterval(sayDate,1000,"Priyanshu");
    console.log("STARTED");

})

document.querySelector("#stop").addEventListener("click",function(){
    clearInterval(startPrinting)
    // startPrinting=null;
    console.log("STOPPED");
    
})
