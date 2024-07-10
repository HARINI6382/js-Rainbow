const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["green","red","black","pink","yellow","purple","skyblue","gold","brown","#261a49","blue","aqua"]
document.addEventListener('click',function(){
    body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
});