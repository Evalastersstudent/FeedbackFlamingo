function main() {
      if ($('a[rel*="external"]').prop("target", "_blank"));

      var DEMOnav = document.getElementById("DEMOnav");
      var pijlDEMOnav = document.getElementById("pijlDEMOnav");
      var tekstDEMOnav = document.getElementById("tekstDEMOnav");
      DEMOnav.addEventListener("mouseover", function() {
        pijlDEMOnav.style.borderColor = "white";
        tekstDEMOnav.style.color = "white";
      });
      DEMOnav.addEventListener("mouseout", function() {
        pijlDEMOnav.style.borderColor = "#e3314b";
        tekstDEMOnav.style.color = "#e3314b";
      });

      'use strict';
      (function() {
        var body = document.body;
        var menu = document.getElementsByClassName('menu')[0];
        var navkleinscherm = document.getElementsByClassName('navkleinscherm')[0];

        menu.addEventListener('click', function toggleClasses() {
          [body, menu, navkleinscherm].forEach(function (el) {
            el.classList.toggle('open');
          });
        }, false);
      })();

      var naarweb = document.getElementById("naarweb");
      var pijlnaarweb = document.getElementById("pijlnaarweb");
      naarweb.addEventListener("mouseover", function() {
        pijlnaarweb.style.borderColor = "#e3314b";
      });
      naarweb.addEventListener("mouseout", function() {
        pijlnaarweb.style.borderColor = "white";
      });

      var naarmail = document.getElementById("naarmail");
      var pijlnaarmail = document.getElementById("pijlnaarmail");
      naarmail.addEventListener("mouseover", function() {
        pijlnaarmail.style.borderColor = "#e3314b";
      });
      naarmail.addEventListener("mouseout", function() {
        pijlnaarmail.style.borderColor = "white";
      });

      var klantworden = document.getElementById("klantworden");
      var pijlklantworden = document.getElementById("pijlklantworden");
      klantworden.addEventListener("mouseover", function() {
        pijlklantworden.style.borderColor = "#e3314b";
      });
      klantworden.addEventListener("mouseout", function() {
        pijlklantworden.style.borderColor = "white";
      });

      $(document).ready(function(){
        $('.klantenslider').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 1000,
          pauseOnHover: true,
          dots: true,
          swipe: true,
          adaptiveHeight: true,
          prevArrow: '<button type="button" class="pijllinks"></button>',
          nextArrow: '<button type="button" class="pijlrechts"></button>'
        });
      });

      var waypoint = new Waypoint({
        element: $('#smileys'),
        handler: function(direction) {
          if (direction === 'down') {
            $('#smileys').addClass('gekleurd');
          } else {
            $('#smileys').removeClass('gekleurd');
          }
        }, offset: '65%'
      });
}

window.onload = function() {
      main();
}
