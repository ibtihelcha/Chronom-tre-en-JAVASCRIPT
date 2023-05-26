window.onload=function time (){
var heure=document.getElementsByClassName("hrs")[0]
var minute=document.getElementsByClassName("min")[0]
var  seconde=document.getElementsByClassName("sec")[0]
var  milliseconde=document.getElementsByClassName("ms")[0]
var starte=document.getElementsByClassName('start')[0]
var  resete=document.getElementsByClassName('reset')[0]
var  stope=document.getElementsByClassName('stop')[0]
var h=00;
var m=00;
var s=00;
var ms=00;

var interval ;

function startTimer(){
    ms++;
if (ms<=9){
    milliseconde.innerHtml='0' + ms;
    
}
if (ms > 9){
    milliseconde.innerHtml=ms;
}
if (ms > 99){
    s++;
    seconde.innerHtml='0'+  s;
    ms=0;
    milliseconde.innerHtml='0'+ 0;
}
if ( s > 9){
    seconde.innerHtml=s;

}
if (s > 59 ){
    m++;
    minute.innerHtml='0'+m;
    s=0;
    seconde.innerHtml='0'+0;
}
if (m > 9){
    minute.innerHtml=m 
}

if (m > 59){
    h++;
    heure.innerHtml='0'+ h;
    m=0;
    minute.innerHtml='0'+ 0;
}
if (h>9){
  heure.innerHtml=h;
}
if (h > 24){
milliseconde.innerHTML="00";
seconde.innerHTML="00";
minute.innerHTML="00";
heure.innerHTML="00";
}

}
starte.onclick= function() {
    clearInterval(interval);
    interval=setInterval(startTimer ,10);
}
stope.onclick= function(){
    clearInterval(interval)
}
resete.onclick= function() {
    clearInterval(interval)
    ms="00"
    s="00"
    m="00"
    h="00"
    milliseconde.innerHtml=ms; 
    seconde.innerHtml=s;
    minute.innerHtml=m;
    heure.innerHtml=h;}
}