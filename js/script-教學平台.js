$(document).ready(function(){
$('.menu-icon').click(function() {

  $(this).toggleClass('menu-active');

  if ($('.menu-wrap').width() === 260) {
    $('.menu-wrap').animate({
      'width': '0'
    });
    $('#main').animate({
      'left': '0px'
    });
    $('.profile-wrap').removeClass('scale');
    $('.menu-wrap>ul>li').removeClass('menulist');
  } else {
    $('.menu-wrap').animate({
      'width': '260px'
    });
    $('#main').animate({
      'left': '-260px'
    });
    $('.profile-wrap').addClass('scale');
    $('.menu-wrap>ul>li').addClass('menulist');
  }
});

    $('.jk1').click(function() {
      window.location = 'profile.html';
      return false;
    });

    $('.jk2').click(function() {
      window.location = '登入.html';
      return false;
    });
});
