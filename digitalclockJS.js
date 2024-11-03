//document.getElementById('clock')
//both are same statement to select a id or class

const clock=document.querySelector('#clock')



setInterval( function(){
    let date= new Date()
//console.log(date.toLocaleDateString());

clock.innerHTML=date.toLocaleTimeString();

}, 1000)
