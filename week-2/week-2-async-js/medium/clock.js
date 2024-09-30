function time(){
    console.clear();
    let hour=new Date().getHours();
    let min=new Date().getMinutes();
    let sec = new Date().getSeconds();
    let am_pm=new Date().toLocaleTimeString();


    console.log(hour +":"+ min+":"+sec);

    console.log(am_pm );

}

setInterval(time,1000);