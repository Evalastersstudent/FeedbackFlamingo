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
}

window.onload = function() {
      main();
}
