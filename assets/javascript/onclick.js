//Want an onclick event for the search bar button
//Want a onlick event for the language buttons  

    var eng = $("#btnEng")
    var grm = $("#btnGrm")
    var spn = $("#btnSpn")
    
    var searchBar = $("#search-bar")
    
    // var frn = $("#btnFrn")
    // var itl = $("#btnItl")

    $("#btnEng").on("click", function() {
        console.log("You Clicked English")
    });

    $("#btnGrm").on("click", function(){
        console.log("You Clicked German");
        
    });

    $("#btnSpn").on("click", function(){
        console.log("You Clicked Spanish");
        
    });

    (function() {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();



    