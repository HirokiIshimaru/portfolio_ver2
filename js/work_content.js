'use strict';

// workコンテンツ変更・borderアニメーション
{
    window.addEventListener('load',()=>{
        let button = document.querySelectorAll(".yearButton");
        let moveBorder = document.querySelector("#moveBorder");
        let chTitle = document.querySelector("#title");
        
        const yearContent = document.querySelectorAll(".yearContent");
        const firstContent = document.querySelector("#firstContent");
        
        button[0].onclick = () =>{

            // クラス付け外し
            firstContent.style.display = "block";
            yearContent[1].classList.remove('show');
            yearContent[2].classList.remove('show');
            console.log("1年生");

            // borderアニメーション
            moveBorder.style.transform = "translateY(0%)";
            moveBorder.style.transition = "ease 0.2s";
            chTitle.innerHTML = "1年";
        }
        button[1].onclick = () =>{

            // クラス付け外し
            yearContent[1].classList.add('show');
            yearContent[0].classList.remove('show');
            yearContent[2].classList.remove('show');
            console.log("2年生");

            // firstChild削除
            firstContent.style.display = "none";

            // borderアニメーション
            moveBorder.style.transform = "translateY(100%)";
            moveBorder.style.transition = "ease 0.2s";
            chTitle.innerHTML = "2年";
        }
        button[2].onclick = () =>{

            // クラス付け外し
            yearContent[2].classList.add('show');
            yearContent[0].classList.remove('show');
            yearContent[1].classList.remove('show');
            console.log("3年生");

            // firstChild削除
            firstContent.style.display = "none";

            // borderアニメーション
            moveBorder.style.transform = "translateY(200%)";
            moveBorder.style.transition = "ease 0.2s";
            chTitle.innerHTML = "3年";
        }
    });
}