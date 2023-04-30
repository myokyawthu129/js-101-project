function changeColor(){
    console.log(Math.round(Math.random()*255));
    document.body.style.backgroundColor=
    'rgb('+Math.round(Math.random()*255) + 
    ',' + Math.round(Math.random()*255) +
    ',' + Math.round(Math.random()*255) + ')';
}
