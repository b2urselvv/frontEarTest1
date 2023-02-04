$(function() {
  console.log("waass");
//  let searchBar = document.getElementById("#mast-head-center-search-frame");
//  $("#mast-head-center-search-frame").css("width" ,searchBar+20);

  $("html").on("click", function(e){
      if(!$(e.target).hasClass("masthead-center-search-input-border-none")){
        console.log("waass");
        $("#masthead-center-search-frame").removeClass("--frame-border-color-active");
      }
      else{
        console.log("waass2");
        $("#masthead-center-search-frame").addClass("--frame-border-color-active");
      }


  });




});




  