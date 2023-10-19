var style01={borderBottom: "50px solid #FFD600"}
var style02={borderBottom: "50px solid #52FF00"}
var style03={borderBottom: "50px solid #00FFD1"}
var style04={borderBottom: "50px solid #0066FF"}
var style05={borderBottom: "50px solid #FA0CFF"}
var style06={borderBottom: "50px solid red"}

const style=[style01,style02,style03,style04,style05,style06];
function color(){
    style.unshift(style[5]);
}
const queue =()=>{
    $('.tang').eq(0).css(style[1])
    $('.tang').eq(1).css(style[2]);
    $('.tang').eq(2).css(style[3]);
    $('.tang').eq(3).css(style[4]);
    $('.tang').eq(4).css(style[5]);
    $('.tang').eq(5).css(style[0])
}
setInterval(color,1000);
setInterval(queue,1000);