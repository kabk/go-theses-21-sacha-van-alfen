function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



$(window).on("scroll",function(e){

    var pos = $(window).height() - $(window).scrollTop();

    $(".intermezzo1").css("top", $(window).height() +  pos)
    // $(".intermezzo2").css("top",  $(window).height() + pos/2)
    // $(".intermezzo3").css("left", $(window).height() +  pos)
    // $(".intermezzo4").css("",  $(window).height() + pos/2)
    // $(".intermezzo5").css("", $(window).height() +  pos)

});
