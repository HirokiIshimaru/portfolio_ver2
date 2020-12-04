'use strict';

// scrollNav
{
    // pageYが710以上スクロールされた場合scrollNavを表示・非表示にする
    window.addEventListener('scroll',()=>{

        let scroll = window.pageYOffset; /*垂直のスクロール量*/
        let menu = document.getElementById("scroll_nav");
        console.log(window.scrollY); /*垂直のスクロール量をconsoleに表示*/
        if(scroll>=700){
            menu.style.display = "flex";
            menu.style.transition = "ease 0.5s all";
            menu.style.opacity = "1";
            menu.style.transform = "translateY(0px)";
        }else{
            menu.style.opacity = "0";
            menu.style.transform = "translateY(-100px)";
        }
    });
}

// workの年nav
{
    window.addEventListener('scroll',()=>{
    
        let scroll = window.pageYOffset;
        let yearList = document.getElementById("displayYearlist");
        if(scroll>=2300){
            yearList.style.opacity = "0";
            yearList.style.transform = "translateX(-250px)";
            
        }else if(scroll>=1610){
            yearList.style.opacity = "1";
            yearList.style.transition = "ease-out 0.8s";
            yearList.style.transform = "translateY(0px)";
        }else{
            yearList.style.opacity = "0";
            yearList.style.transform = "translateX(-250px)";
        }
    });
}