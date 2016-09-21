
$(function(){
	// 点击展开，展开其余内容
	var $bb = $('.bb');
	var $bbb = $('.bbb');
	
	var $liz = $('.rightbox .sx ul li.liz');  // 第一个盒子
	var $liz2 = $('.rightbox .sx ul li.liz');  // 第二个盒子
	
	var $p1 = $('.dian1');
	var $p2 = $('.dian2');
	var $p3 = $('.dian3');
	var $p4 = $('.dian4');
	
	
	var $dian1 = $('.dian1 img');
	var $dian2 = $('.dian2 img');
	var $dian3 = $('.dian3 img');
	var $dian4 = $('.dian4 img');
	// 展开
	$dian1.click(function(){
		$bb.css(
			{
				'overflow':'visible',
				'height':'130px'
			});
		$liz.css(
			{
				'overflow':'visible',
				'height':'130px'
			});
		$p1.css('display','none');
		$p2.css('display','block');
	});
	// 收起
	$dian2.click(function(){
		$bb.css(
			{
				'overflow':'hidden',
				'height':'26px'
			});
		$liz.css(
			{
				'overflow':'hidden',
				'height':'26px'
			});
		$p1.css('display','block');
		$p2.css('display','none');
	});
	
	
//	下面的
	$dian3.click(function(){		
		$p3.css('display','none');
		$p4.css('display','block');
	});
	
	$dian4.click(function(){		
		$p3.css('display','block');
		$p4.css('display','none');
	});
	
});
