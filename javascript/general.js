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


    // Dashboard widget customization:
    document.addEventListener('DOMContentLoaded', (event) => {

        var dragSrcEl = null;

        function handleDragStart(e) {
            this.style.opacity = '1';

            dragSrcEl = this;

            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', this.innerHTML);
        }

        function handleDragOver(e) {
            if (e.preventDefault) {
                e.preventDefault();
            }

            e.dataTransfer.dropEffect = 'move';

            return false;
        }

        function handleDragEnter(e) {
            this.classList.add('over');
        }

        function handleDragLeave(e) {
            this.classList.remove('over');
        }

        function handleDrop(e) {
            if (e.stopPropagation) {
                e.stopPropagation(); // stops the browser from redirecting.
            }

            if (dragSrcEl !== this) {
                dragSrcEl.innerHTML = this.innerHTML;
                this.innerHTML = e.dataTransfer.getData('text/html');
            }

            return false;
        }

        function handleDragEnd(e) {
            this.style.opacity = '1';

            items.forEach(function (item) {
                item.classList.remove('over');
            });
        }


        let items = document.querySelectorAll('.WidgetContainer .widget');
        items.forEach(function (item) {
            item.addEventListener('dragstart', handleDragStart, false);
            item.addEventListener('dragenter', handleDragEnter, false);
            item.addEventListener('dragover', handleDragOver, false);
            item.addEventListener('dragleave', handleDragLeave, false);
            item.addEventListener('drop', handleDrop, false);
            item.addEventListener('dragend', handleDragEnd, false);
        });
    });

    // Edit widget function
    function Show_Hide_Widget_buttons() {
        var editButton = document.getElementById('EditWidgetButton');
        var x = document.getElementById("HideShowButton1").style.display;
        if (x == "block") {
            editButton.innerHTML = 'Modify Widgets';
            document.getElementById("HideShowButton1").style.display = "none";
            document.getElementById("HideShowButton2").style.display = "none";
            document.getElementById("HideShowButton3").style.display = "none";
            document.getElementById("HideShowButton4").style.display = "none";
            document.getElementById("HideShowButton5").style.display = "none";
            document.getElementById("HideShowButton6").style.display = "none";
            document.getElementById("HideShowButton7").style.display = "none";
            document.getElementById("HideShowButton8").style.display = "none";
            document.getElementById("HideShowButton9").style.display = "none";
            document.getElementById("CancelButton").style.display = "none";
            alert("Your changes have been saved.");

        } else {
            document.getElementById("HideShowButton1").style.display = "block";
            document.getElementById("HideShowButton2").style.display = "block";
            document.getElementById("HideShowButton3").style.display = "block";
            document.getElementById("HideShowButton4").style.display = "block";
            document.getElementById("HideShowButton5").style.display = "block";
            document.getElementById("HideShowButton6").style.display = "block";
            document.getElementById("HideShowButton7").style.display = "block";
            document.getElementById("HideShowButton8").style.display = "block";
            document.getElementById("HideShowButton9").style.display = "block";
            document.getElementById("CancelButton").style.display = "block";

            editButton.innerHTML = 'Save Changes';
        }
    };

    function HideBB() {
        var editButton = document.getElementById('HideShowButton1');
        var BlackboardWidget = document.getElementById("BB").style.display;
        if (BlackboardWidget == "none") {
            editButton.innerHTML = 'Hide';
            document.getElementById("BB").style.display = "block";

        } else {
            document.getElementById("BB").style.display = "none";

            editButton.innerHTML = 'Show';

        }
    }

    function HideEV() {
        var editButton = document.getElementById('HideShowButton2');
        var EvisionWidget = document.getElementById("EV").style.display;
        if (EvisionWidget == "none") {
            editButton.innerHTML = 'Hide';
            document.getElementById("EV").style.display = "block";

        } else {
            document.getElementById("EV").style.display = "none";

            editButton.innerHTML = 'Show';

        }
    }

    function HideES() {
        var editButton = document.getElementById('HideShowButton3');
        var EmailScheduleWidget = document.getElementById("ES").style.display;
        if (EmailScheduleWidget == "none") {
            editButton.innerHTML = 'Hide';
            document.getElementById("ES").style.display = "block";

        } else {
            document.getElementById("ES").style.display = "none";

            editButton.innerHTML = 'Show';

        }
    }

    function HideCOVID() {
        var editButton = document.getElementById('HideShowButton4');
        var COVIDWIdget = document.getElementById("COVID").style.display;
        if (COVIDWIdget == "none") {
            editButton.innerHTML = 'Hide';
            document.getElementById("COVID").style.display = "block";

        } else {
            document.getElementById("COVID").style.display = "none";

            editButton.innerHTML = 'Show';

        }
    }

    function HidePay() {
        var editButton = document.getElementById('HideShowButton5');
        var PayWidget = document.getElementById("Pay").style.display;
        if (PayWidget == "none") {
            editButton.innerHTML = 'Hide';
            document.getElementById("Pay").style.display = "block";

        } else {
            document.getElementById("Pay").style.display = "none";

            editButton.innerHTML = 'Show';

        }
    }

    function HideLIB() {
        var editButton = document.getElementById('HideShowButton6');
        var LIBWidget = document.getElementById("LIB").style.display;
        if (LIBWidget == "none") {
            editButton.innerHTML = 'Hide';
            document.getElementById("LIB").style.display = "block";

        } else {
            document.getElementById("LIB").style.display = "none";

            editButton.innerHTML = 'Show';

        }
    }

    function HideHealth() {
        var editButton = document.getElementById('HideShowButton7');
        var HealthWidget = document.getElementById("Health").style.display;
        if (HealthWidget == "none") {
            editButton.innerHTML = 'Hide';
            document.getElementById("Health").style.display = "block";

        } else {
            document.getElementById("Health").style.display = "none";

            editButton.innerHTML = 'Show';

        }
    }

    function HideWork() {
        var editButton = document.getElementById('HideShowButton8');
        var WorkWidget = document.getElementById("Work").style.display;
        if (WorkWidget == "none") {
            editButton.innerHTML = 'Hide';
            document.getElementById("Work").style.display = "block";

        } else {
            document.getElementById("Work").style.display = "none";

            editButton.innerHTML = 'Show';

        }
    }

    function HideNS() {
        var editButton = document.getElementById('HideShowButton9');
        var NSWidget = document.getElementById("NS").style.display;
        if (NSWidget == "none") {
            editButton.innerHTML = 'Hide';
            document.getElementById("NS").style.display = "block";

        } else {
            document.getElementById("NS").style.display = "none";

            editButton.innerHTML = 'Show';

        }
    }

});
