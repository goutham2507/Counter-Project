let count=0;
function increase(){
    return count++;
}
function decrease(){
    return count--;
}
function increase1(){
    document.getElementById("a").innerHTML=increase();
}
function decrease1(){
    document.getElementById("a").innerHTML=decrease();
}
function reset(){
    return count=0;
}
function reset1(){
    document.getElementById("a").innerHTML=reset();
}
document.getElementById("inc").addEventListener('click', increase1);
document.getElementById("dec").addEventListener('click', decrease1);
document.getElementById("res").addEventListener('click', reset1);