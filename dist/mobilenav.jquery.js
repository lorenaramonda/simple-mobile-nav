(function ( $ ) {
    $.fn.mobilenav = function (options) {
        var settings = $.extend({
            // These are the defaults.
            sticky: false,
            mainCategoryLinked: true
        }, options );

        var body = $('body');

        // init
        this.prepend('<button type="button" id="toggle-menu"><span>Menu</span></button>');
        this.children('ul').addClass('main');

        this.find('ul.main li').each( function (i, el) {
            if ($(el).children('ul').length > 0) {
                $(el).addClass('has-submenu');
                $(el).children('ul').addClass('submenu');
            }
        });


        if (settings.sticky) {
            body.addClass('stick-mobile-nav');
            body.css('paddingTop', this.outerHeight());
            var calcHeight = 'calc(100vh - ' + this.outerHeight() + 'px)';
            this.find('ul.main').css('height', calcHeight);
        }

        var submenuLink = '.has-submenu > a';

        if (settings.mainCategoryLinked) {
            this.find(submenuLink).append('<span></span>');
            submenuLink += ' span';
        } else {
            this.find('.has-submenu').addClass('full');
        }
        this.addClass('mobile-nav').removeClass('mobile-nav-loading');

        $('#toggle-menu').click( function () {
            body.toggleClass('open-mobile-nav');
        });


        this.find(submenuLink).click( function (e) {
            e.preventDefault();
            $(this).closest('li').toggleClass('open');
        });

    };
}( jQuery ));
