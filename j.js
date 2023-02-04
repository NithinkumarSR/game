'use strict'
let s=document.querySelector('#score').textContent;
let ran=Math.trunc(Math.random()*20)+1;
console.log(ran);
document.querySelector('.check').addEventListener('click',function(){
    let a=document.querySelector('.input').value;
    if(a==ran){
        document.querySelector('.dis').textContent=''
        document.querySelector('.s').innerHTML='win the game';
        let n1=document.querySelector('#high').textContent;
        if(Number(n1)<Number(s)){
            document.querySelector('#high').innerHTML=s;
        }
    }
    else if(s==0){
        document.querySelector('.dis').textContent=''
        document.querySelector('.s').innerHTML='Lose the game';
    }
    else if(a>ran){
        document.querySelector('.dis').textContent='very large input' 
    }
    else {
        document.querySelector('.dis').textContent='very small input'
    }
    if(ran==a){
        document.querySelector('#ans').value=ran;
       

}
    else{
        document.querySelector('#ans').value='-?-';
        document.querySelector('#score').innerHTML=s--;
    }
  x=s;
});

document.querySelector('#again').addEventListener('click',function(){
     ran=Math.trunc(Math.random()*20)+1;
     document.querySelector('#score').innerHTML='20';
     console.log("hi"+ran);
    // s=document.querySelector('#score').textContent;
     document.querySelector('.input').value=0;
     document.querySelector('.s').innerHTML=''
     document.querySelector('#ans').value='-?-';
    }
    
)


