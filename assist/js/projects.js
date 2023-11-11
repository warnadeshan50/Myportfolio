let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
$('.git_btn').eq(0).click(function() {
    window.location = "https://github.com/warnadeshan50/JDBC_gaming_cafe_management_system_MVC" ;
});
$('.git_btn').eq(1).click(function() {
    window.location = "https://github.com/warnadeshan50/chatapp-java-socket";
});
$('.git_btn').eq(2).click(function() {
    window.location = "https://github.com/warnadeshan50/GamingPC_World_Bootstrap";
});
$('.git_btn').eq(3).click(function() {
    window.location = "https://github.com/warnadeshan50/Hostel_management_system/tree/master/hostel_management_system" + this.id;
});
$('#btn_c1_c').eq(0).click(function() {
    window.location = "https://github.com/warnadeshan50/Assignment_03/blob/master/Assingment03/case01/index.html" ;
});
$('#btn_c2_c').eq(0).click(function() {
    window.location = "https://github.com/warnadeshan50/Assignment_03/blob/master/Assingment03/case02/index.html" ;
});
$('#btn_c3_c').eq(0).click(function() {
    window.location = "https://github.com/warnadeshan50/Assignment_03/blob/master/Assingment03/case03/index.html" ;
});
$('#btn_c4_c').eq(0).click(function() {
    window.location = "https://github.com/warnadeshan50/Assignment_03/blob/master/Assingment03/case04/index.html" ;
});
$('#btn_c5_c').eq(0).click(function() {
    window.location = "https://github.com/warnadeshan50/Assignment04/blob/master/Assignment04/case01/index.html" ;
});
$('#btn_c6_c').eq(0).click(function() {
    window.location = "https://github.com/warnadeshan50/Assignment04/tree/master/Assignment04/case02" ;
});
$('#btn_c7_c').eq(0).click(function() {
    window.location = "https://github.com/warnadeshan50/Assignment04/tree/master/Assignment04/case03" ;
});
$('#btn_c8_c').eq(0).click(function() {
    window.location = "https://github.com/warnadeshan50/Assignment04/tree/master/Assignment04/case04" ;
});
$('#btn_c9_c').eq(0).click(function() {
    window.location = "https://github.com/warnadeshan50/Assignment04/tree/master/Assignment04/case05" ;
});
$('#btn_c10_c').eq(0).click(function() {
    window.location = "https://github.com/warnadeshan50/Assignment04/tree/master/Assignment04/case06" ;
});$('#btn_c11_c').eq(0).click(function() {
    window.location = "https://github.com/warnadeshan50/Assignment08/tree/master/Assignment08" ;
});
$('#btn_c12_c').eq(0).click(function() {
    window.location = "https://github.com/warnadeshan50/Assignment09/tree/master/Assignment09" ;
});
$('#btn_s1_s').eq(0).click(function() {
    window.open("./assist/assagments/Assingment03/case01/index.html");
});
$('#btn_s2_s').eq(0).click(function() {
    window.open("./assist/assagments/Assingment03/case02/index.html");
});
$('#btn_s3_s').eq(0).click(function() {
    window.open("./assist/assagments/Assingment03/case03/index.html");
});
$('#btn_s4_s').eq(0).click(function() {
    window.open("./assist/assagments/Assingment03/case04/index.html");
});
$('#btn_s5_s').eq(0).click(function() {
    window.open("./assist/assagments/Assignment04/case01/index.html");
});
$('#btn_s6_s').eq(0).click(function() {
    window.open("./assist/assagments/Assignment04/case02/index.html");
});
$('#btn_s7_s').eq(0).click(function() {
    window.open("./assist/assagments/Assignment04/case03/index.html");
});
$('#btn_s8_s').eq(0).click(function() {
    window.open("./assist/assagments/Assignment04/case04/index.html");
});
$('#btn_s9_s').eq(0).click(function() {
    window.open("./assist/assagments/Assignment04/case05/index.html");
});
$('#btn_s10_s').eq(0).click(function() {
    window.open("./assist/assagments/Assignment04/case06/index.html");
});
$('#btn_s11_s').eq(0).click(function() {
    window.open("./assist/assagments/Assignment08/index01.html");
});
$('#btn_s12_s').eq(0).click(function() {
    window.open("./assist/assagments/Assignment09/index.html");
});
