let x;
mytimer();

const stopbtn=document.getElementById('stopbtn');
const startbtn=document.getElementById('startbtn');

stopbtn.addEventListener('click',function (){
    clearInterval(x);
    x="";
});

startbtn.addEventListener('click',function (){
    mytimer();
});


function mytimer(){
    x=setInterval(function (){
        let now=new Date();
        let hour=now.getHours();
        let minute=now.getMinutes();
        let second=now.getSeconds();
        if(hour<10){
            hour="0"+hour
        }
        if(minute<10){
            minute="0"+minute
        }
        if(second<10){
            second="0"+second
        }

        document.getElementById('hour1').innerHTML=hour;
        document.getElementById('minute1').innerHTML=minute;
        document.getElementById('second1').innerHTML=second;

    },1000);
}

