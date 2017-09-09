!function(t){t.fn.touristpointnav=function(n){var i,a,o=t.extend({Speed:220,autostart:!0,autohide:1},n);i=t(this),a=i.find("ul").parent("li").children("a"),a.attr("data-option","off"),a.unbind("click").on("click",function(){var n=t(this);o.autohide&&n.parent().parent().find("a[data-option='on']").parent("li").children("ul").slideUp(o.Speed/1.2,function(){t(this).parent("li").children("a").attr("data-option","off"),t(this).parent("li").children("a").parent("li").removeClass("foricons")}),"off"==n.attr("data-option")&&(n.parent("li").addClass("foricons"),n.parent("li").children("ul").slideDown(o.Speed,function(){n.attr("data-option","on")})),"on"==n.attr("data-option")&&(n.attr("data-option","off"),n.parent("li").removeClass("foricons"),n.parent("li").children("ul").slideUp(o.Speed))}),o.autostart&&i.find("a").each(function(){t(this).parent("li").parent("ul").slideDown(o.Speed,function(){t(this).parent("li").children("a").attr("data-option","on")})})}}(window.jQuery||window.Zepto);


jQuery(document).ready(function($) {

	'use strict';
    //***************************
    // Sticky Header Function
    //***************************
	  jQuery(window).scroll(function() {
	      if (jQuery(this).scrollTop() > 170){  
	          jQuery('body').addClass("careplus-sticky");
	      }
	      else{
	          jQuery('body').removeClass("careplus-sticky");
	      }
	  });
    
    //***************************
    // BannerOne Functions
    //***************************
      jQuery('.touristpoint-banner').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: false,
          arrows: false,
          fade: true,
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });

    //***************************
    // Fancybox Function
    //***************************
    jQuery(".fancybox").fancybox({
      openEffect  : 'elastic',
      closeEffect : 'elastic',
    });

    //***************************
    // Menu Function
    //***************************
    jQuery(".touristpoint-nav").touristpointnav({
      Speed: 400,
      autostart: false,
      autohide: true
    });
    //***************************
    // Parent AddClass Function
    //***************************
    jQuery(".touristpoint-sub-menu").parent("li").addClass("sub-menu-icon");
    //***************************
    // MenuToggle Function
    //***************************
    jQuery('.touristpoint-navbar-open a').on('click', function() {
        jQuery('div.touristpoint-header-menu').animate({
            'width': 'show'
        }, 200, function() {
            jQuery('div.touristpoint-header-menu').fadeIn(200);
            jQuery('body').addClass('menu-show');
        });
    });

    jQuery('.header-menu-close').on('click', function() {
        jQuery('div.touristpoint-header-menu').animate({
            'width': 'hide'
        }, 200, function() {
            jQuery('div.touristpoint-header-menu').fadeOut(200);
            jQuery('body').removeClass('menu-show');
        });
    });

    //***************************
    // PartnerSlider Functions
    //***************************
      jQuery('.touristpoint-partner-slider').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          infinite: true,
          dots: false,
          prevArrow: false,
          nextArrow: false,
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });


    //***************************
    // ThumbSlider Functions
    //***************************
    jQuery('.careplus-tabs-thumb,.careplus-tabs-text').slick({
          slidesToShow: 1,
          autoplay: false,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.careplus-tabs-list'
        });
        jQuery('.careplus-tabs-list').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: false,
          asNavFor: '.careplus-tabs-thumb,.careplus-tabs-text',
          dots: false,
          arrows: false,
          vertical: false,
          centerMode: false,
          focusOnSelect: true,
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    vertical: false,
                  }
                }
              ],
        });
      //***************************
      // ThumbSlider Functions
      //***************************
      jQuery('.touristpoint-images-thumb').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.touristpoint-images-list'
          });
          jQuery('.touristpoint-images-list').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.touristpoint-images-thumb',
            dots: false,
            vertical: false,
            prevArrow: "<span class='slick-arrow-left'><i class='fa fa-angle-left'></i></span>",
            nextArrow: "<span class='slick-arrow-right'><i class='fa fa-angle-right'></i></span>",
            centerMode: false,
            focusOnSelect: true,
            responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 5,
                      slidesToScroll: 1,
                      infinite: true,
                      vertical: false,
                    }
                  },
                  {
                    breakpoint: 800,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      vertical: false,
                    }
                  },
                  {
                    breakpoint: 400,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      vertical: false,
                    }
                  }
                ],
          });
      //***************************
      // ThumbSlider Functions
      //***************************
      jQuery('.touristpoint-permotional-thumb').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.touristpoint-permotional-list'
          });
          jQuery('.touristpoint-permotional-list').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.touristpoint-permotional-thumb',
            dots: false,
            vertical: false,
            prevArrow: false,
            nextArrow: false,
            centerMode: false,
            focusOnSelect: true,
            responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      infinite: true,
                      vertical: false,
                    }
                  },
                  {
                    breakpoint: 800,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      vertical: false,
                    }
                  },
                  {
                    breakpoint: 400,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      vertical: false,
                    }
                  }
                ],
          });
      //***************************
      // ThumbSlider Functions
      //***************************
      jQuery('.touristpoint-shop-thumb').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.touristpoint-shop-thumb-list'
          });
          jQuery('.touristpoint-shop-thumb-list').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.touristpoint-shop-thumb',
            dots: false,
            vertical: false,
            prevArrow: "<span class='slick-arrow-left'><i class='fa fa-angle-left'></i></span>",
            nextArrow: "<span class='slick-arrow-right'><i class='fa fa-angle-right'></i></span>",
            centerMode: false,
            focusOnSelect: true,
            responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      infinite: true,
                      vertical: false,
                    }
                  },
                  {
                    breakpoint: 800,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      vertical: false,
                    }
                  },
                  {
                    breakpoint: 400,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      vertical: false,
                    }
                  }
                ],
          });

  //***************************
    // Progressbar Function
    //***************************
    jQuery('.progressbar1').progressBar({
      percentage : false,
      animation : true,
      backgroundColor : "#cccccc",
      barColor : "#e95c53",
      height : "5",
    });


    //***************************
    // slider Functions
    //***************************
      $( function() {
          $( "#slider-range,#slider-range2" ).slider({
            range: true,
            min: 0,
            max: 9000,
            values: [ 1000, 9000 ],
            slide: function( event, ui ) {
              $( "#amount,#amount2" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
          });
          $( "#amount,#amount2" ).val( "$" + $( "#slider-range,#slider-range2" ).slider( "values", 0 ) +
            " - $" + $( "#slider-range,#slider-range2" ).slider( "values", 1 ) );
        } );

        //***************************
        // Masonry Functions
        //***************************
      jQuery('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          fitWidth: true
        }
      });

        //***************************
        // nav scroll Function
        //***************************
        $(document).ready(function() {
          $('.scrollbox').enscroll();
      });


        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        })


});

//***************************
    // Counter Function
    //***************************
    jQuery('#word-count1').jQuerySimpleCounter({
      end:3500,
      duration: 30000
    });
    jQuery('#word-count2').jQuerySimpleCounter({
      end:2735,
      duration: 30000
    });
    jQuery('#word-count3').jQuerySimpleCounter({
      end:1580,
      duration: 30000
    });
    jQuery('#word-count4').jQuerySimpleCounter({
      end:3500,
      duration: 30000
    });

    //***************************
    // TOUR GRID Function
    //***************************
    jQuery(window).on('load', function() {
    var $grid = $('.touristpoint-tour-grid-filter,.touristpoint-filtrable-gallery').isotope({
      itemSelector: '.element-item',
      layoutMode: 'fitRows'
    });
    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
      }
    };
    // bind filter button click
    $('.filters-button-group').on( 'click', 'a', function() {
      var filterValue = $( this ).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.filters-button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'a', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    }); 

});


    //***************************
    // input calander Function
    //***************************
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
     
    var checkin = $('#dp1').datepicker({
      onRender: function(date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
      }
    }).on('changeDate', function(ev) {
      if (ev.date.valueOf() > checkout.date.valueOf()) {
        var newDate = new Date(ev.date)
        newDate.setDate(newDate.getDate() + 1);
        checkout.setValue(newDate);
      }
      checkin.hide();
      $('#dp2')[0].focus();
    }).data('datepicker');
    var checkout = $('#dp2').datepicker({
      onRender: function(date) {
        return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
      }
    }).on('changeDate', function(ev) {
      checkout.hide();
    }).data('datepicker');


    //***************************
    // input calander Function
    //***************************
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
     
    var checkin = $('#dp3').datepicker({
      onRender: function(date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
      }
    }).on('changeDate', function(ev) {
      if (ev.date.valueOf() > checkout.date.valueOf()) {
        var newDate = new Date(ev.date)
        newDate.setDate(newDate.getDate() + 1);
        checkout.setValue(newDate);
      }
      checkin.hide();
      $('#dp4')[0].focus();
    }).data('datepicker');
    var checkout = $('#dp4').datepicker({
      onRender: function(date) {
        return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
      }
    }).on('changeDate', function(ev) {
      checkout.hide();
    }).data('datepicker');
