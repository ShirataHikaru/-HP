function slideInLeft() {
  $('#animeA').css({
    'opacity' : '1',
  })
  .animate({'right':'2%'}, 1500);

}

function slideInRight() {
  $('#animeB').css({
    'opacity' : '1',
  })
  .animate({'left':'2%'}, 1500);
}


$(function() {
  $('.stageBase').css({'height':$(window).height()});
  $.scrollify({
    section:'.stageBase',
    scrollSpeed: 1000,
    before:function(i,panels){
      var ref = panels[i].attr('id');
      if(ref == 'stage2'){
        slideInLeft();
        slideInRight();
      }
    },
    after:function(i,panels){
      var ref = panels[i].attr('id');
        $('#animeA').css('right','100%');
        $('#animeB').css('left','100%');
    }
  });
  $("#animeA, #animeB").css("opacity", "0");
});
