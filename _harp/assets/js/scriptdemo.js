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

      var buttonDEMOaanvragen = document.getElementById("buttonDEMOaanvragen");
      var pijlDEMOaanvragen = document.getElementById("pijlDEMOaanvragen");
      buttonDEMOaanvragen.addEventListener("mouseover", function() {
            pijlDEMOaanvragen.style.borderColor = "#e3314b";
      });
      buttonDEMOaanvragen.addEventListener("mouseout", function() {
            pijlDEMOaanvragen.style.borderColor = "white";
      });

      function replaceValidationUI( form ) {
            form.addEventListener( "invalid", function( event ) {
                  event.preventDefault();
            }, true );
            form.addEventListener( "submit", function( event ) {
                  if ( !this.checkValidity() ) {
                        event.preventDefault();
                  }
            });

            $('input').blur(function() {
                  // Error verwijderen
                      $(this).next('.error-message').remove();

                  // Validiteit checken
                      if (this.checkValidity() === false) {
                            // Foutmelding toevoegen
                                $(this).after(
                                      "<div class='error-message'>" + this.validationMessage + "</div>"
                                );

                            // Class toevoegen
                                $(this).addClass("ongeldig");
                      }
            });

            var submitButton = form.querySelector( "button" );
            submitButton.addEventListener( "click", function( event ) {
                  var validFields = form.querySelectorAll( ":valid" );
                  var invalidFields = form.querySelectorAll( ":invalid" );
                  var errorMessages = form.querySelectorAll( ".error-message" );
                  var parent;
                  for ( var i = 0; i < errorMessages.length; i++ ) {
                        errorMessages[ i ].parentNode.removeChild( errorMessages[ i ] );
                  }
                  for ( var i = 0; i < invalidFields.length; i++ ) {
                        invalidFields[i].insertAdjacentHTML(
                              "afterend",
                              "<div class='error-message'>"+invalidFields[ i ].validationMessage+"</div>"
                        );
                        console.log(invalidFields[ i ].placeholder + ' is niet ingevuld');
                        invalidFields[ i ].className = "ongeldig";
                  }
                  if ( invalidFields.length > 0 ) {
                        invalidFields[ 0 ].focus();
                  }
            });
      }
      var forms = document.querySelectorAll( "form" );
      for ( var i = 0; i < forms.length; i++ ) {
            replaceValidationUI( forms[ i ] );
      }
}

window.onload = function() {
      main();
}
