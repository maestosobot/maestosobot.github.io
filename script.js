jQuery(document).ready(function() {

  jQuery(".menu-trigger").click(function() {
    jQuery(".navbar").slideToggle(400, function() {
      jQuery(this).toggleClass("navbar-e").css('display', '');
    });
  });

});
