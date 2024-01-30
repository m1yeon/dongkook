
$(document).ready(function(){
//1. 탑버튼 클릭시 화면 부드럽게 올라가게 하기
$('.t_btn').click(function(){
  $('html, body').animate({'scrollTop':'0'},500);

  return false;
});





//2. 스크롤시 나오는 탑버튼 구현하기
$(window).scroll(function(){
  let scl_top = $(this).scrollTop();
  console.log(scl_top);

      if(scl_top >= 400){
        $('.t_btn').fadeIn();
        //$('.f_btn > li:first-cihld').animate({'bottom':'100px'},300);
      }else{
        $('.t_btn').fadeOut();
        //$('.f_btn > li:first-cihld').animate({'bottom':'20px'},300);
      }

  });
  




});