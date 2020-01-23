$(document).ready(function () {
    var minus = '../img/minus.png';
    var plus = '../img/plus.png';

    $(".money_transfer_header img").click(function () {
        if ($(".money_transfer_header_minus").css("display") === "block") {
            $('.money_transfer_header_minus').css('display', "none");
            $('.money_transfer_header_plus').css('display', "block");
            $('.money_transfer_footer').css('display', "none");


        } else {
            $('.money_transfer_header_minus').css('display', "block");
            $('.money_transfer_header_plus').css('display', "none");
            $('.money_transfer_footer').css('display', "flex");

        }
    });


    $(".add_fund_header img").click(function () {
        if ($(".add_fund_header_minus").css("display") === "block") {
            $('.add_fund_header_minus').css('display', "none");
            $('.add_fund_header_plus').css('display', "block");
            $('.add_fund_footer').css('display', "none");


        } else {
            $('.add_fund_header_minus').css('display', "block");
            $('.add_fund_header_plus').css('display', "none");
            $('.add_fund_footer').css('display', "block");

        }
    });

    $(".with_drow_header img").click(function () {
        if ($(".with_drow_header_minus").css("display") === "block") {
            $('.with_drow_header_minus').css('display', "none");
            $('.with_drow_header_plus').css('display', "block");
            $('.with_drow_footer').css('display', "none");


        } else {
            $('.with_drow_header_minus').css('display', "block");
            $('.with_drow_header_plus').css('display', "none");
            $('.with_drow_footer').css('display', "block");

        }
    });
    //  right panel tab start
    $(".right-panel-link-item button").click(function () {
        var leftpanel_id = $(this).attr('data-righttablink');
        $(".right-panel-link-item button").removeClass("right-panel-link-active");
        $(this).addClass("right-panel-link-active");
        $(".right-panel-content-item").removeClass("right-panel-tab-active");
        $("[data-righttabcontent='" + leftpanel_id + "']").addClass("right-panel-tab-active");
    });
    //  right panel tab end

    //  messagebox popup start

    $(".popup-messagebox-box-top").click(function () {
        $(".popup-messagebox-box-content").toggleClass("popup-messagebox-box-hide");
    });
    $(".popup-messagebox-box-top img").click(function () {
        $(".popup-messagebox-box-content").css({
            "display": "none"
        });
    });

    //  messagebox popup end

    $(document)
        .one('focus.autoExpand', 'textarea.autoExpand', function () {
            var savedValue = this.value;
            this.value = '';
            this.baseScrollHeight = this.scrollHeight;
            this.value = savedValue;
        })
        .on('input.autoExpand', 'textarea.autoExpand', function () {
            var minRows = this.getAttribute('data-min-rows') | -1,
                rows;
            this.rows = minRows;
            rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
            this.rows = minRows + rows;
        });


    // statistic info start
    $(".ads-tablink").click(function () {
        var statistic_id = $(this).attr('data-bftab');
        $(this).closest('.ads-tab').children(".ads-tablink").removeClass("ads-tablink-active");
        $(this).closest('.ads-tab').children("[data-bftab='" + statistic_id + "']").addClass("ads-tablink-active");
        $(this).closest('.ads-statistic-content').children(".ads-statistic-info").removeClass("statistic-active");
        $(this).closest('.ads-statistic-content').children("[data-bfid='" + statistic_id + "']").addClass('statistic-active');
    });
    // statistic info end
    // statistic add image start
    $('.ads-media-upload-icon').click(function () {
        console.log('a');
        $('.ads-medi-input').attr('accept', '.jpg, .png, .jpeg');
        $('.ads-medi-input').show();
        $('.ads-medi-input').focus();
        $('.ads-medi-input').click();
        $('.ads-medi-input').hide();
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.ads-media-upload').css('background-image', 'url(' + e.target.result + ')');

            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".ads-medi-input").change(function () {
        readURL(this);
    });
    // statistic add image end

    // owl carousel code
    var suggestedAds = $(".sug-owl-carousel");
    suggestedAds.owlCarousel({

        items: 1,
        loop: true,
        center: true,
        nav: false,
        singleItem: true,
        dots: false,
        margin: 3,
        stagePadding: 0,
        smartSpeed: 2000,


    });
    $('.sug-slider-next').click(function () {
        suggestedAds.trigger('next.owl.carousel');
    })
    $('.sug-slider-prev').click(function () {
        suggestedAds.trigger('prev.owl.carousel');
    })

    // owl carousel code


    //    ranking tab active start
    $(".ranking-tab-link").click(function () {
        var data_ranklink = $(this).attr('data-ranklink');
        $(".ranking-tab-link").removeClass("ranking-tab-link-active");
        $(this).addClass("ranking-tab-link-active");
        $('.ranking-tab-content').removeClass("ranking-active");
        $("[data-ranktab='" + data_ranklink + "']").addClass("ranking-active");
    });
    //    ranking tab active end
    $(".ranking-tab-people").prepend('<ul class="ranking-tab-number ranking-number-people"></ul>');
    $(".ranking-tab-earn").prepend('<ul class="ranking-tab-number ranking-number-earn"></ul>');
    var raniking_people_numbersize = $(".raking-table-people tr").length;
    var raniking_earn_numbersize = $(".raking-table-earn tr").length;

    for (i = 1; i <= raniking_people_numbersize; i++) {

        if (i > 0 && i < 4) {
            $(".ranking-number-people").append('<li class="ranking-number-item" style="background-color: rgba(118, 151, 243, 0.2);">' + i + '</li>')
        } else if (i > 3 && i < 9) {
            $(".ranking-number-people").append('<li class="ranking-number-item" style="background-color: rgba(251, 31, 31, 0.2);">' + i + '</li>')
        } else {
            $(".ranking-number-people").append('<li class="ranking-number-item" style="background-color: rgba(27, 172, 11, 0.2);">' + i + '</li>')
        }


        console.log(i);
    }
    for (i = 1; i <= raniking_earn_numbersize; i++) {

        if (i > 0 && i < 4) {
            $(".ranking-number-earn").append('<li class="ranking-number-item" style="background-color: rgba(118, 151, 243, 0.2);">' + i + '</li>')
        } else if (i > 3 && i < 9) {
            $(".ranking-number-earn").append('<li class="ranking-number-item" style="background-color: rgba(251, 31, 31, 0.2);">' + i + '</li>')
        } else {
            $(".ranking-number-earn").append('<li class="ranking-number-item" style="background-color: rgba(27, 172, 11, 0.2);">' + i + '</li>')
        }



    };
    // //    friends popup start
    $(".left-panel-button-friends").click(function () {
        $(".popup-invite-friends").css({
            display: "flex"
        });
        $("body").css({
            overflow: "hidden"
        });
    });
    $(".popup-friends-cancel").click(function () {
        $(".popup-invite-friends").css({
            display: "none"
        });
        $("body").css({
            overflow: "auto"
        });
    });

    $(".popup-friends-input").click(function () {
        $(this).select();
        document.execCommand('copy');
        $(".popup-friends-info").text("Copied");
        $(".popup-friends-info").css({
            "color": "green",
            "font-weight": "bold"
        });

    });
    // //    friends popup end
    // //    my profile edit popup start
    $(".profile-edit-btn").click(function () {
        $(".popup-my-profile-edit-overlay").css({
            display: "flex"
        });
        $("body").css({
            overflow: "hidden"
        });
    });
    $(".popup-my-profile-cancel").click(function () {
        $(".popup-my-profile-edit-overlay").css({
            display: "none"
        });
        $("body").css({
            overflow: "auto"
        });
    });
    // //    my profile edit popup end

    // //    status popup start

    $(".status-activate-button").click(function () {
        $(".popup-status-wrapper").css({
            display: "flex"
        });
        $("body").css({
            overflow: "hidden"
        });
    });
    $(".popup-status-cancel").click(function () {
        $(".popup-status-wrapper").css({
            display: "none"
        });
        $("body").css({
            overflow: "auto"
        });
    });

    // //    status popup end

    //   profile photos/followers tab activete start

    $(".profile-panel-left button").click(function () {
        var data_profilebtndata = $(this).attr('data-profilebtn');
        $(".profileContent").removeClass("profileContentActive");
        $(".profile-panel-left button").removeClass("active-button");
        $(this).addClass("active-button");
        $("[data-profilecontent='" + data_profilebtndata + "']").addClass("profileContentActive");
    });


    //   profile photos/followers tab activete end


    //   profile photos/followers tab activete start

    $(".profile-follow-list-buttons button").click(function () {
        var data_profilebtndata = $(this).attr('data-profilebtn');
        $(".profile-follow-list-tab").removeClass("profile-follow-list-tab-active");
        $(".profile-follow-list-buttons button").removeClass("tab-list-active");
        $(this).addClass("tab-list-active");
        $("[data-profilecontent='" + data_profilebtndata + "']").addClass("profile-follow-list-tab-active");
    });


    //   profile photos/followers tab activete end

    //    header-icon active start
    $(".header-web-button").click(function () {
        var checked_class_header_icon = $(this).hasClass("header-button-active");
        var checked_class_profile_icon = $(this).hasClass("header-profile-content");
        var checked_class_arrow = $(this).hasClass("button-active-arrow");
        if (checked_class_profile_icon == true) {
            $(".header-icon-panel ul li button").removeClass("header-button-active");
            $(".header-icon-panel ul li button").removeClass("button-active-arrow");
        } else if (checked_class_header_icon == true && checked_class_arrow == true) {
            $(this).removeClass("header-button-active");
            $(this).removeClass("button-active-arrow");

        } else {
            $(".header-icon-panel ul li button").removeClass("header-button-active");
            $(".header-icon-panel ul li button").removeClass("button-active-arrow");
            $(this).addClass("header-button-active");
            $(this).addClass("button-active-arrow");
        }



    });

    $(".header-mobile-button").click(function () {
        var checked_class_profile_icon = $(this).hasClass("header-profile-content");
        var checked_class_header_icon = $(this).hasClass("header-button-active");
        if (checked_class_profile_icon == true) {
            $(".header-mobile ul li button").removeClass("header-button-active");

        } else if (checked_class_header_icon == true) {
            $(this).removeClass("header-button-active")
        } else {
            $(".header-mobile ul li button").removeClass("header-button-active");
            $(this).addClass("header-button-active");

        }



    });
    //    header-icon active end
    //    header mobile button activate start
    // $(".btn-mobile-menu").click(function () {
    //     $(".panel-left").toggle(function () {
    //         $(".panel-left").css({
    //             display: "block"
    //         });

    //     }, function () {
    //         $(".panel-left").css({
    //             display: "none"
    //         });
    //     });
    // });

    $(".header-web-button").click(function () {
        var webButtonData = $(this).attr("data-buttonmenu");
        if ($("[data-contentmenu='" + webButtonData + "']").hasClass("data-web-menu-none")) {
            $(".data-panel-web-menu").addClass("data-web-menu-none");
            $("[data-contentmenu='" + webButtonData + "']").removeClass("data-web-menu-none");
        } else {
            $(".data-panel-web-menu").addClass("data-web-menu-none");
        }
    });
    // my profile password seen start
    $(".password-see-content img").click(function () {
        var password_see_my_profile = $(".password-see-content input").attr("type");
        if (password_see_my_profile == "text") {
            $(".password-see-content input").attr('type', 'password');
        } else {
            $(".password-see-content input").attr('type', 'text');
        }
    });
    // my profile password seen end
    $(".header-mobile-button").click(function () {
        var mobilButtonData = $(this).attr("data-buttonmenu");
        if ($("[data-contentmenu='" + mobilButtonData + "']").hasClass("data-menu-none")) {
            $(".data-panel-menu").addClass("data-menu-none");
            $("[data-contentmenu='" + mobilButtonData + "']").removeClass("data-menu-none");
            $("body").addClass("mobile-body-scroll-hidden");
        } else {
            $(".data-panel-menu").addClass("data-menu-none");
            $("body").removeClass("mobile-body-scroll-hidden");
        }
    });

    //    header mobile button activate end

    //    width change event start
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

    function checkWidth() {
        var windowSize = $(window).width();

        if (windowSize > 768) {
            $(".header-icon-panel ul li button").removeClass("header-button-active");
            $(".header-icon-panel ul li button").removeClass("button-active-arrow");
            $(".data-panel-web-menu").addClass("data-web-menu-none");

        } else if (windowSize < 768) {

            // $(".header-mobile ul li button").removeClass("header-button-active");
            // $(".data-panel-menu").addClass("data-menu-none");

        }

    }

    // Execute on load

    //    width change event end


    // new SimpleBar($('.right-panel-tab-content')[0]);

    //statistic add tag search start
    // var location = new Bloodhound({
    //     datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
    //     queryTokenizer: Bloodhound.tokenizers.whitespace,
    //     prefetch: {
    //       url: 'assets/citynames.json',
    //       filter: function(list) {
    //         return $.map(list, function(cityname) {
    //           return { name: cityname }; });
    //       }
    //     }
    //   });
    //   location.initialize();

    //   $('input').tagsinput({
    //     typeaheadjs: {
    //       name: 'citynames',
    //       displayKey: 'name',
    //       valueKey: 'name',
    //       source: location.ttAdapter()
    //     }
    //   });
    //statistic add tag search end



});
// document.getElementById("popup-friends-input").onclick = function() {
//     this.select();
//     document.execCommand('copy');
// };