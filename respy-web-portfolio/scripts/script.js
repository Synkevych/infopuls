
/*function all(){
	var c = document.getElementsByClassName("content");
	for(i = 0; i < c.length; i++){
		c[i].style.display = "block";
	}
}
document.getElementById("all").onclick = all;

function mobile__apps(){
	var c = document.getElementsByClassName("content");
	var b = document.getElementsByClassName("mobile__apps");
	for(i = 0; i < c.length; i++){
		c[i].style.display = "none";
	}
	for(i = 0; i < b.length; i++){
		b[i].style.display = "block";
	}
}
document.getElementById("mobile__apps").onclick = mobile__apps;

function web__development(){
	var c = document.getElementsByClassName("content");
	var b = document.getElementsByClassName("web__development");
	for(i = 0; i < c.length; i++){
		c[i].style.display = "none";
	}
	for(i = 0; i < b.length; i++){
		b[i].style.display = "block";
	}
}
document.getElementById("web__development").onclick = web__development;

function identify(){
	var c = document.getElementsByClassName("content");
	var b = document.getElementsByClassName("identify");
	for(i = 0; i < c.length; i++){
		c[i].style.display = "none";
	}
	for(i = 0; i < b.length; i++){
		b[i].style.display = "block";
	}
}
document.getElementById("identify").onclick = identify;

function brand__promo(){
	var c = document.getElementsByClassName("content");
	var b = document.getElementsByClassName("brand__promo");
	for(i = 0; i < c.length; i++){
		c[i].style.display = "none";
	}
	for(i = 0; i < b.length; i++){
		b[i].style.display = "block";
	}
}
document.getElementById("brand__promo").onclick = brand__promo;

function graphic__design(){
	var c = document.getElementsByClassName("content");
	var b = document.getElementsByClassName("graphic__design");
	for(i = 0; i < c.length; i++){
		c[i].style.display = "none";
	}
	for(i = 0; i < b.length; i++){
		b[i].style.display = "block";
	}
}
document.getElementById("graphic__design").onclick = graphic__design;

function motion__dynamics(){
	var c = document.getElementsByClassName("content");
	var b = document.getElementsByClassName("motion__dynamics");
	for(i = 0; i < c.length; i++){
		c[i].style.display = "none";
	}
	for(i = 0; i < b.length; i++){
		b[i].style.display = "block";
	}
}
document.getElementById("motion__dynamics").onclick = motion__dynamics;
*/

function all() {
	$('.content').css("display", "block");
}
$('#all').click(all);

function mobile__apps() {
	$('.content').css("display", "none");
	$('.mobile__apps').css("display", "block");
}
$('#mobile__apps').click(mobile__apps);

function web__development() {
	$('.content').css("display", "none");
	$('.web__development').css("display", "block");
}
$('#web__development').click(web__development);

function identify() {
	$('.content').css("display", "none");
	$('.identify').css("display", "block");
}
$('#identify').click(identify);

function brand__promo() {
	$('.content').css("display", "none");
	$('.brand__promo').css("display", "block");
}
$('#brand__promo').click(brand__promo);

function graphic__design() {
	$('.content').css("display", "none");
	$('.graphic__design').css("display", "block");
}
$('#graphic__design').click(graphic__design);

function motion__dynamics() {
	$('.content').css("display", "none");
	$('.motion__dynamics').css("display", "block");
}
$('#motion__dynamics').click(motion__dynamics);

function show_menu() {
	$('.menu__works').css("display", "block")
					 .animate({"opacity" : 1}, 800);
}
$('#sort').click(show_menu);