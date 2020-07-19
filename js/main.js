$(function() {

    var h = $(window).height();
    $('#main').height(h);

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
    $('#header_work').click(function() {
        $(window).scrollTop(800);
    });
    $('#header_skill').click(function() {
        $(window).scrollTop(1870);
    });
    $('#header_profile').click(function() {
        $(window).scrollTop(2552);
    });
    $('#header_contact').click(function() {
        $(window).scrollTop(3409);
    });

    //dropdwn_listがクリックされた時に移動
    $('#dropdwn_work').click(function() {
        $(window).scrollTop(800);
    });
    $('#dropdwn_skill').click(function() {
        $(window).scrollTop(1985);
    });
    $('#dropdwn_profile').click(function() {
        $(window).scrollTop(2625);
    });
    $('#dropdwn_contact').click(function() {
        $(window).scrollTop(3389);
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
            $('header').slideUp();
        } else {
            $('header').slideDown();
        }
        startPos = winScrollTop;
    });


});
