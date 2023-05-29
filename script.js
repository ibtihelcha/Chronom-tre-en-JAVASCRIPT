window.onload=function(){
var h = 0;
var m=0;
var s=0;
var ms=0;
var heure = document.querySelector('.hrs');
var minute = document.querySelector('.min');
var seconde = document.querySelector('.sec');
var milliseconde = document.querySelector('.ms');
var starte=document.querySelector('.start') ;
var resete=document.querySelector('.reset');
var stope=document.querySelector('.stop');
var Interval;

starte.onclick= function() {
    clearInterval(Interval);
    Interval=setInterval(time ,10);
    ;}

stope.onclick= function(){
    clearInterval(Interval)
    }

resete.onclick= function() {
    clearInterval(Interval)
    ms=0;
    s=0;
    m=0;
    h=0;
    milliseconde.innerHTML="00"; 
    seconde.innerHTML="00";
    minute.innerHTML="00";
    heure.innerHTML="00";}

    function time(){
        ms++;
        if (ms<=9){
            milliseconde.innerHTML='0' + ms;
            
        }
        
        if (ms > 9){
            milliseconde.innerHTML=ms;
        }
        
        if (ms > 99){
            s++;
            seconde.innerHTML='0'+  s;
            ms=0;
            milliseconde.innerHTML='0'+ 0;
        }
        
        if ( s > 9){
            seconde.innerHTML=s;
        }
        
        if (s > 59 ){
            m++;
            minute.innerHTML="0"+m;
            ms=0;
            s=0;
            milliseconde.innerHTML='0'+0;
            seconde.innerHTML='0'+0;
        }
        
        if (m > 9){
            minute.innerHTML=m ;
        }
        
        if (m > 59){
            h++;
            heure.innerHTML='0'+ h;
            ms=0;
            s=0;
            m=0;
            milliseconde.innerHTML='0'+0;
            seconde.innerHTML='0'+0;
            minute.innerHTML='0'+0;
        }
        
        if (h>9){
          heure.innerHTML=h;
        }
        
        if (h > 24){
            ms=0;
            s=0;
            m=0;
            h=0;
         milliseconde.innerHTML="00";
         seconde.innerHtml="00";
         minute.innerHTML="00";
        heure.innerHTML="00";
      
        }
   
    };
};