// console.log("hi");
const newyears = "1 Jan 2022";
const daysid=document.getElementById('days');
const hourid=document.getElementById('hours');
const minid=document.getElementById('mins');
const secondid=document.getElementById('seconds');


function cdnewyear(){
    const newyear = new Date(newyears);
    const currentdate = new Date();


    const totalsecond = Math.floor((newyear-currentdate)/ 1000);
    const mins = Math.floor((totalsecond/60)%60);
    const hour = Math.floor((totalsecond/3600)%24);
    const days = Math.floor((totalsecond/3600)/24);
    const second = Math.floor(totalsecond%60);

    console.log(days, hour, mins, second);

    daysid.innerHTML = days;
    hourid.innerHTML = hour;     
    minid.innerHTML = mins;       
    secondid.innerHTML = second;    
}


cdnewyear()
setInterval(cdnewyear, 1000);
