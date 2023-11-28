window.addEventListener("load", (event) => {
    var menuBtn = document.querySelector('.menu-trigger');
    var mainMenu = document.querySelector('.main-menu');
    menuBtn.addEventListener("click", showMenu)

    function showMenu() {
        if (mainMenu.style.display === "block") {
            mainMenu.style.display = "none";
            this.classList.remove("active");
        } else {
            mainMenu.style.display = "block";
            this.classList.add("active");
        }
    }
    function checkMedia() {
        if (window.matchMedia("(max-width: 769px)").matches) {
            mainMenu.classList.add('sp');
            mainMenu.classList.remove('pc');
        } else {
            mainMenu.classList.add('pc');
            mainMenu.classList.remove('sp');
            mainMenu.removeAttribute("style");
        }
    }
    checkMedia();
    window.onresize = checkMedia;

});

$(document).on("click", ".level-button_1", function () {
    $('.level-trigger_1').toggleClass('one');
});
$(document).on("click", ".level-button_2", function () {
    $('.level-trigger_2').toggleClass('one');
});

$(function () { $('.serviceContent_accBtn').on('click', function () { $(this).next().slideToggle(600); $(this).find('span').toggleClass("open"); $('serviceContent_accBtn').not($(this)).find('span').removeClass("open"); }); });
$(function () { $('.faq_col .component.faq_qu').each(function () { $(this).on('click', function () { $(this).toggleClass('on'); $(this).nextAll(".faq_col .component.faq_an").toggleClass('on'); }); }); });



//繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺吶ｋ縺ｨ荳企Κ縺ｫ蝗ｺ螳壹＆縺帙ｋ縺溘ａ縺ｮ險ｭ螳壹ｒ髢｢謨ｰ縺ｧ縺ｾ縺ｨ繧√ｋ
function FixedAnime() {
    var headerH = $('.navi_custom').outerHeight(true);
    var scroll = $(window).scrollTop();
    if (scroll >= headerH) {//header縺ｮ鬮倥＆莉･荳翫↓縺ｪ縺｣縺溘ｉ
        $('.navi_custom').addClass('scroll-nav');//scroll-nav縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ莉倅ｸ�
    } else {//縺昴ｌ莉･螟悶�
        $('.navi_custom').removeClass('scroll-nav');//scroll-nav縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ髯､蜴ｻ
    }
}

// 逕ｻ髱｢繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ繧偵＠縺溘ｉ蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ
$(window).scroll(function () {
    FixedAnime();/* 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ騾比ｸｭ縺九ｉ繝倥ャ繝繝ｼ繧貞�迴ｾ縺輔○繧矩未謨ｰ繧貞他縺ｶ*/
});

// 繝壹�繧ｸ縺瑚ｪｭ縺ｿ霎ｼ縺ｾ繧後◆繧峨☆縺舌↓蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ
$(window).on('load', function () {
    FixedAnime();/* 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ騾比ｸｭ縺九ｉ繝倥ャ繝繝ｼ繧貞�迴ｾ縺輔○繧矩未謨ｰ繧貞他縺ｶ*/
});