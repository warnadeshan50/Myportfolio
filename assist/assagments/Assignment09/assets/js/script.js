var style={background: "white"}
var style2={background: "red"}
var style_1={background: "#FF6666"}
let current=0;
let direction="right"
let count=10;
let interval=null;

function lights(){
    $('.blb').eq(current).css(style2);
    $('.blb').eq(current+1).css(style_1);
    $('.blb').eq(current-1).css(style_1);
}
const myFuction =()=> {
    $(".blb").css(style);
    if(direction==="right"){
        current++;
        lights();
        if(current===count>=0) {
            lights()
        }
        if (current===count-1){
            direction="left";
        }
    }else{
        current--;
        lights();
        if(current===1) {
            $('.blb').eq(current).css(style2);
        }
        if(current===0){
            direction="right"
        }
    }
}
$('button').eq(0).on('click',()=>{
    if(interval===null){
        interval=setInterval(myFuction,40);
        $('#audio')[0].play();
    }
});

$('button').eq(1).on('click',()=>{
    clearInterval(interval);
    interval=null;
    $('#audio')[0].pause();
});