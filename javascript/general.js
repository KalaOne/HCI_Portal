$(function () {
    var bsOverlay = $('.bs-canvas-overlay');
    $('[data-toggle="canvas"]').on('click', function () {
        var ctrl = $(this),
            elm = ctrl.is('button') ? ctrl.data('target') : ctrl.attr('href');
        $(elm).addClass('mr-0');
        $(elm + ' .bs-canvas-close').attr('aria-expanded', "true");
        $('[data-target="' + elm + '"], a[href="' + elm + '"]').attr('aria-expanded', "true");
        if (bsOverlay.length)
            bsOverlay.addClass('show');
        return false;
    });

    $('.bs-canvas-close, .bs-canvas-overlay').on('click', function () {
        var elm;
        if ($(this).hasClass('bs-canvas-close')) {
            elm = $(this).closest('.bs-canvas');
            $('[data-target="' + elm + '"], a[href="' + elm + '"]').attr('aria-expanded', "false");
        } else {
            elm = $('.bs-canvas')
            $('[data-toggle="canvas"]').attr('aria-expanded', "false");
        }
        elm.removeClass('mr-0');
        $('.bs-canvas-close', elm).attr('aria-expanded', "false");
        if (bsOverlay.length)
            bsOverlay.removeClass('show');
        return false;
    });

    // Show modal for settings
    $(".btnShow").click(function () {
        $("#sampleModal").modal("show");
    });

    // Colour inversion function
    $("#colour-inversion").click(function () {
        let css = 'html {-webkit-filter: invert(100%);' +
            '-moz-filter: invert(100%);' +
            '-o-filter: invert(100%);' +
            '-ms-filter: invert(100%); }';

        let head = $('head')[0];
        let invertStyle = $('#invert')[0];

        if (invertStyle) {
            head.removeChild(invertStyle);
        } else {
            let style = document.createElement('style');

            style.type = 'text/css';
            style.id = 'invert';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            //injecting the css to the head
            head.appendChild(style);
        }
    })

    
    // Changing font size functions
    $('#smaller-font').click(function () {
        if (document.body.style.fontSize == "") {
            document.body.style.fontSize = "1.0em";
          }
        document.body.style.fontSize = parseFloat(document.body.style.fontSize) - (1 * 0.2) + "em";
    })

    $('#larger-font').click(function () {
        if (document.body.style.fontSize == "") {
            document.body.style.fontSize = "1.0em";
          }
        document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (1 * 0.2) + "em";
    })

});
