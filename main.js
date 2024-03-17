let toog =document.getElementById('toogle');
let basic = document.getElementById('changeone');
let Professional = document.getElementById('changetwo');
let master = document.getElementById('changethree');
toog.addEventListener('click',(e)=>{
    if(e.target.checked){
        basic.innerHTML = 19;
        Professional.innerHTML = 24;
        master.innerHTML = 39;
    }
    else{
        basic.innerHTML = 199;
        Professional.innerHTML = 249;
        master.innerHTML = 399;

    }
})