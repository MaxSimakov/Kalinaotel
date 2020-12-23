
$(document).ready(function () {

    $("#tabs").removeClass('ui-widget');

    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
            'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional["ru"]);








    if ($(window).width() >= 700) {
        $(".data").datepicker({ autoClose: true });
        $('#fullpage').fullpage({
            //anchors: ['page1', 'page2', 'page3', 'page4', 'page6', 'page7', 'page8'],
            menu: '#menu',
            css3: true,
            scrollingSpeed: 1000,
            afterLoad: function (anchorLink, index) {
                var loadedSection = $(this);

                if (index == 1) {
                    $('#menu').removeClass('black');

                    $('header .logo').removeClass('black');
                    $('header .right').removeClass('black');
                    $('footer .cop').removeClass('black');
                }
                // Начало квартир
                if (index == 2) {
                    $('#menu').addClass('black');
                    $('header .logo').addClass('black');
                    $('header .right').addClass('black');
                    $('footer .cop').addClass('black');
                }
                if (index == 3) {
                    $('#menu').addClass('black');
                    $('header .logo').addClass('black');
                    $('header .right').addClass('black');
                    $('footer .cop').addClass('black');
                }
                if (index == 4) {
                    $('#menu').addClass('black');
                    $('header .logo').addClass('black');
                    $('header .right').addClass('black');
                    $('footer .cop').addClass('black');
                }

                if (index == 5) {
                    $('#menu').addClass('black');
                    $('header .logo').addClass('black');
                    $('header .right').addClass('black');
                    $('footer .cop').addClass('black');
                }
                if (index == 5) {
                    $('#menu').addClass('black');
                    $('header .logo').addClass('black');
                    $('header .right').addClass('black');
                    $('footer .cop').addClass('black');
                }
                if (index == 6) {
                    $('#menu').addClass('black');
                    $('header .right').addClass('black');
                    $('header .logo').addClass('black');
                    $('footer .cop').addClass('black');
                }
                if (index == 7) {
                    $('#menu').addClass('black');
                    $('header .logo').addClass('black');
                    $('footer .cop').addClass('black');
                    $('header .right').addClass('black');
                }
                if (index == 8) {
                    $('#menu').addClass('black');
                    $('header .logo').addClass('black');
                    $('footer .cop').addClass('black');
                    $('header .right').addClass('black');
                }
                if (index == 9) {
                    $('#menu').addClass('black');
                    $('header .logo').addClass('black');
                    $('footer .cop').addClass('black');
                    $('header .right').addClass('black');
                }
                // Конец квартир

                if (index == 10) {
                    $('#menu').removeClass('black');
                    $('header .logo').removeClass('black');
                    $('footer .cop').removeClass('black');
                    $('header .right').removeClass('black');
                }
                if (index == 11) {
                    $('#menu').addClass('black');
                    $('header .logo').addClass('black');
                    $('footer .cop').addClass('black');
                    $('header .right').addClass('black');
                }
                if (index == 12) {
                    $('#menu').removeClass('black');
                    $('header .logo').addClass('black');
                    $('footer .cop').addClass('black');
                    $('header .right').removeClass('black');
                }
            }





        });


    }

    $('.section.bg2 .grid .item_kv_1').fancybox({
        'onComplete': function () {
            $('.kv_g1').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_2').fancybox({
        'onComplete': function () {
            $('.kv_g2').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_3').fancybox({
        'onComplete': function () {
            $('.kv_g3').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_4').fancybox({
        'onComplete': function () {
            $('.kv_g4').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_5').fancybox({
        'onComplete': function () {
            $('.kv_g5').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_6').fancybox({
        'onComplete': function () {
            $('.kv_g6').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_7').fancybox({
        'onComplete': function () {
            $('.kv_g7').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_8').fancybox({
        'onComplete': function () {
            $('.kv_g8').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_9').fancybox({
        'onComplete': function () {
            $('.kv_g9').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_10').fancybox({
        'onComplete': function () {
            $('.kv_g10').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_11').fancybox({
        'onComplete': function () {
            $('.kv_g11').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_12').fancybox({
        'onComplete': function () {
            $('.kv_g12').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_13').fancybox({
        'onComplete': function () {
            $('.kv_g13').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_14').fancybox({
        'onComplete': function () {
            $('.kv_g14').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_15').fancybox({
        'onComplete': function () {
            $('.kv_g15').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_16').fancybox({
        'onComplete': function () {
            $('.kv_g16').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_17').fancybox({
        'onComplete': function () {
            $('.kv_g17').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_18').fancybox({
        'onComplete': function () {
            $('.kv_g18').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_19').fancybox({
        'onComplete': function () {
            $('.kv_g19').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_new_kv_1').fancybox({
        'onComplete': function () {
            $('.new_kv_g1').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_new_kv_2').fancybox({
        'onComplete': function () {
            $('.new_kv_g2').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_20').fancybox({
        'onComplete': function () {
            $('.kv_g20').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });
    $('.section.bg2 .grid .item_kv_21').fancybox({
        'onComplete': function () {
            $('.kv_g21').bxSlider({
                infiniteLoop: false,
                adaptiveHeight: true
            });
        }
    });





    $("#num1").click(function () {
        $(this).addClass('active');
        $("#num2").removeClass('active');
        $(".num2").removeClass('active');
        $(".num1").addClass('active');
        return false;
    });


    $("#num2").click(function () {
        $(this).addClass('active');
        $("#num1").removeClass('active');
        $(".num1").removeClass('active');
        $(".num2").addClass('active');
        return false;
    });




    $(document).on('click', '#moveUp', function () {
        $.fn.fullpage.moveSectionUp();
        return false;
    });
    //adding the action to the button
    $(document).on('click', '#moveDown', function () {
        $.fn.fullpage.moveSectionDown();
        return false;
    });



    $(".name").click(function () {
        $(this).removeClass("form_red");
    });
    $(".phone").click(function () {
        $(this).removeClass("form_red");
    });
    $(".mail").click(function () {
        $(this).removeClass("form_red");
    });


    $(".form_podbor_kv, .form_zakaza_romant, .form_phone, .form_quest").submit(function () {
        var form = $(this);
        var error = false;
        form.find('.phone').each(function () {
            if ($(this).val() == '') {
                $(this).addClass("form_red");
                error = true; // ошибка
            }
        });
        // form.find('.name').each( function(){
        //     if ($(this).val() == '') {
        //         $(this).addClass("form_red");
        //         error = true; // ошибка
        //     }
        // });


        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: './zayavka_osn.php',
                dataType: 'json',
                data: data,
                beforeSend: function (data) {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                },
                success: function (data) {
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        $.fancybox.close();
                        $('.thanks_link').click();
                        form[0].reset();
                    }
                },
                complete: function (data) {
                    form.find('input[type="submit"]').prop('disabled', false);
                }

            });
        }
        return false;
    });

    $(".form_zakaza_kv, .form_head").submit(function () {
        var form = $(this);
        var error = false;
        form.find('.phone').each(function () {
            if ($(this).val() == '') {
                $(this).addClass("form_red");
                error = true; // ошибка
            }
        });
        // form.find('.name').each( function(){
        //     if ($(this).val() == '') {
        //         $(this).addClass("form_red");
        //         error = true; // ошибка
        //     }
        // });


        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: './zayavka_date.php',
                dataType: 'json',
                data: data,
                beforeSend: function (data) {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                },
                success: function (data) {
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        $.fancybox.close();
                        $('.thanks_link').click();
                        form[0].reset();
                    }
                },
                complete: function (data) {
                    form.find('input[type="submit"]').prop('disabled', false);
                }

            });
        }
        return false;
    });

    $(".form_dolgo").submit(function () {
        var form = $(this);
        var error = false;
        form.find('.phone').each(function () {
            if ($(this).val() == '') {
                $(this).addClass("form_red");
                error = true; // ошибка
            }
        });


        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: './zayavka_date2.php',
                dataType: 'json',
                data: data,
                beforeSend: function (data) {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                },
                success: function (data) {
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        $.fancybox.close();
                        $('.thanks_link').click();
                        form[0].reset();
                    }
                },
                complete: function (data) {
                    form.find('input[type="submit"]').prop('disabled', false);
                }

            });
        }
        return false;
    });


    var flag = 0;
    $(document).mouseleave(function () {
        if (flag == 0) {
            flag = 1;
            $('#phone_modal_button').click();
        }
    });

    if ($(window).width() < 991) {
        setTimeout(function () { $('#phone_modal_button').click(); }, 90000)
    }

    $('body').on('click', '.rc-flat__book__btn', function () {
        $('.fancybox-slide').animate({
            scrollTop: 0
        }, 1000);
    });


});