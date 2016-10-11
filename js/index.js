/*global $*/
$(function() {
    $(window).scroll( function() {
        var top = $(document).scrollTop();
        if (top > 120) { 
            $('.top-layout-positioner').addClass('affix-top');
            $('.header-logo').addClass('affix');
            $('.header-nav-menu ul li a').css('font-size', '0.8em');
            $('.slicknav_menu').css('top', '-7px');
            $('.slicknav_btn').css('margin-bottom', '4px');
        } else { 
            $('.top-layout-positioner').removeClass('affix-top');
            $('.header-logo').removeClass('affix');
            $('.header-nav-menu ul li a').css('font-size', '1.2em');
            $('.slicknav_menu').css('top', '0');
            $('.slicknav_btn').css('margin-bottom', '11px');
        }
    });
    $('#menu').slicknav();
    $('#menu, .slicknav_menu').on('click','a', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
        url: "https://formspree.io/iurii.grynykha@gmail.com", 
        method: "POST",
        data: {
            userName: $('#user-name-field').val(),
            email: $('#user-email-field').val(),
            message: $('#comments-field').val()
        },
        dataType: "json"
    }).done(function() {
        $('#send').html('Thank you!');
        $('form').trigger("reset");
    }).fail(function(xhr, err) {
        $('#send').html(xhr.statusText);
        $('form').trigger("reset");
    });
});
});
    