$(document).ready(function(){

//$('.container').prepend("<div><b>Меню</b></div>");
$("#menu-icon").on("click", function(){
	$(".menu").slideToggle();
	$(this).toggleClass("active");
});
});
$(".img1").on("mouseover", function(){
	$("img").attr('src','img/1.jpg');});
$(".img2").on("mouseover", function(){
	$("img").attr('src','img/2.gif');});
$(".img3").on("mouseover", function(){
	$("img").attr('src','img/3.jpg');});
$(".img4").on("mouseover", function(){
	$("img").attr('src','img/4.jpg');});
$(".img5").on("mouseover", function(){
	$("img").attr('src','img/5.jpg');});
