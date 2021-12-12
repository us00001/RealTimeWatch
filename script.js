


function callt (){
    let obj = new Date();
    let d = document.getElementById('date');
    let t= document.getElementById("time");
    let date = obj.toLocaleDateString();
    let time = obj.toLocaleTimeString();
    d.innerHTML=date;
    t.innerHTML=time;
}
 setInterval(callt,100);