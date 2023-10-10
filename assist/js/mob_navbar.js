let isMenuBtnOn=true;
var menuStyleOpen={display: "none"};
var menuStyleclose={display: "block"};
$('.btn-menu').on("click", () => {
    if(isMenuBtnOn){
        isMenuBtnOn=false;
        $(".tab_mob_nav_list").css(menuStyleOpen);
        console.log(isMenuBtnOn);
    }else if(!isMenuBtnOn){
        isMenuBtnOn=true;
        $(".tab_mob_nav_list").css(menuStyleclose);
        console.log(isMenuBtnOn);
    }
});