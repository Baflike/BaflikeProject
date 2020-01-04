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

    //  right panel tab start
    $(".right-panel-link-item button").click(function () {
        var leftpanel_id = $(this).attr('data-righttablink');
        $(".right-panel-link-item button").removeClass("right-panel-link-active");
        $(this).addClass("right-panel-link-active");
        $(".right-panel-content-item").removeClass("right-panel-tab-active");
        $("[data-righttabcontent='" + leftpanel_id + "']").addClass("right-panel-tab-active");
    });
    //  right panel tab end


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

        items:1,
        loop:true,
        center:true,
        nav:false,
        singleItem: true,
        dots:false,
        margin:3,
        stagePadding:0,
        smartSpeed:2000,
        
       
   });
   $('.sug-slider-next').click(function() {
    suggestedAds.trigger('next.owl.carousel');
    })
    $('.sug-slider-prev').click(function() {
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
            display: "block"
        });
    });
    $(".popup-friends-cancel").click(function () {
        $(".popup-invite-friends").css({
            display: "none"
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

    //    header-icon active start
    $(".header-icon-panel ul li button").click(function () {
        var checked_class_header_icon = $(this).hasClass("header-button-active");
        if (checked_class_header_icon == true) {
            $(this).removeClass("header-button-active")
        } else {
            $(".header-icon-panel ul li button").removeClass("header-button-active");
            $(this).addClass("header-button-active");
        }



    });

    $(".header-mobile ul li button").click(function () {

        var checked_class_header_icon = $(this).hasClass("header-button-active");
        if (checked_class_header_icon == true) {
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
    $(".header-mobile-button").click(function () {
        var mobilButtonData = $(this).attr("data-buttonmenu");
        if($("[data-contentmenu='" + mobilButtonData + "']").hasClass("data-menu-none")){
            $(".data-panel-menu").addClass("data-menu-none");
            $("[data-contentmenu='" + mobilButtonData + "']").removeClass("data-menu-none");
        }else{
            $(".data-panel-menu").addClass("data-menu-none");
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
            
        } else if (windowSize < 768) {
          
            $(".header-mobile ul li button").removeClass("header-button-active");
            $(".data-panel-menu").addClass("data-menu-none");

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