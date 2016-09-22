

$(function(){
	
//1,验证码
	var a = parseInt(Math.random()*10);
	var b = parseInt(Math.random()*10);
	var c = parseInt(Math.random()*10);
	var d = parseInt(Math.random()*10);
	var str = "";
	str += a;
	str += b;
	str += c;
	str += d;
	//console.log(str)
	$('#yanzheng').html(str);




}); // 尾巴
