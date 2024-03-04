const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")
buttons.forEach(function(btn){
   console.log(btn);
btn.addEventListener('click',function(ename){
console.log(ename.target)
if (ename.target.id==='grey'){
    body.style.backgroundColor=ename.target.id;
}
if (ename.target.id==='white'){
    body.style.backgroundColor=ename.target.id;
}
if (ename.target.id==='blue'){
    body.style.backgroundColor=ename.target.id;
}
if (ename.target.id==='yellow'){
    body.style.backgroundColor=ename.target.id;
}
})


})

