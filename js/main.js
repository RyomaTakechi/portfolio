$(function() {
    $(window).ready(function() {
        var h = $(window).height();
        $('#main').css("height",h);
    });

    //dropdwn_menuの切り替え
    var flg = true;
    $('.dropdwn_btn').click(function(){
        if(flg) {
            flg = false;
            $('#dropdwn_bar').css("display","none");
            $('#dropdwn_close').fadeIn(1000);
            $('#dropdwn_menu').slideDown();
        }
        else {
            flg = true;
            $('#dropdwn_close').css("display","none");
            $('#dropdwn_bar').fadeIn(1000);
            $('#dropdwn_menu').slideUp();
        }
    });

    //header_listがクリックされた時に移動
    $('#header_profile').click(function() {
        $(window).scrollTop(703);
    });
    $('#header_work').click(function() {
        $(window).scrollTop(1772);
    });
    $('#header_skill').click(function() {
        $(window).scrollTop(2819);
    });
    $('#header_contact').click(function() {
        $(window).scrollTop(3251);
    });

    //dropdwn_listがクリックされた時に移動
    $('#dropdwn_profile').click(function() {
        $(window).scrollTop(702);
        $('#dropdwn_close').css("display","none");
        $('#dropdwn_bar').css("display","block");
        $('#dropdwn_menu').slideUp();
    });
    $('#dropdwn_work').click(function() {
        $(window).scrollTop(1898);
        $('#dropdwn_close').css("display","none");
        $('#dropdwn_bar').css("display","block");
        $('#dropdwn_menu').slideUp();
    });
    $('#dropdwn_skill').click(function() {
        $(window).scrollTop(3310);
        $('#dropdwn_close').css("display","none");
        $('#dropdwn_bar').css("display","block");
        $('#dropdwn_menu').slideUp();
    });
    $('#dropdwn_contact').click(function() {
        $(window).scrollTop(3656);
        $('#dropdwn_close').css("display","none");
        $('#dropdwn_bar').css("display","block");
        $('#dropdwn_menu').slideUp();
    });

    //topボタンの表示・非表示
    $(window).ready(function() {
        $('#top').hide();
    });
    var maxHeight = $('body').outerHeight(true); //bodyの高さの取得
    var profileHeight = $('#profile').outerHeight(true); //profileフォームの高さの取得
    var contactHeight = $('#contact').outerHeight(true) ; //contactフォームの高さの取得

    $(window).scroll(function() {   //”topへ”ボタンのfadeIn・fadeOutの切り替え
        if($(window).scrollTop() >= maxHeight - (profileHeight + contactHeight)) {
            $('#top').fadeIn(300);
        } else {
            $('#top').fadeOut(300);
        }
    });

    //topボタンを押したらTOPへ移動
    $('#top').click(function() {
        $(window).scrollTop(0);
    });

    //ヘッダーのfadeInとfadeOut
    var startPos = 0; //直前までのスクロール値
    var winScrollTop = 0; //現在のスクロール値
    $(window).scroll(function() {
        winScrollTop = $(this).scrollTop();
        if(startPos <= winScrollTop) {
            $('header').css("display", "none");
        } else {
            $('header').slideDown();
        }
        startPos = winScrollTop;
    });

});
