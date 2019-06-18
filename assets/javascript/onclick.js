//Want an onclick event for the search bar button
//Want a onlick event for the language buttons  

    var eng = $("#btnEng")
    var grm = $("#btnGrm")
    var spn = $("#btnSpn")
    
    var searchBar = $("#search-bar")
    
    // var frn = $("#btnFrn")
    // var itl = $("#btnItl")

    $("#btnEng").on("click", function() {
        console.log("You Clicked English");
    });

    $("#btnGrm").on("click", function(){
        console.log("You Clicked German");
        
    });

    $("#btnSpn").on("click", function(){
        console.log("You Clicked Spanish");
        
    });



    