
$(function(){
// 点击函数,改变背景色     购物车选  颜色 和 鞋码
			//颜色
			var $span1 = $('.yaya_2 .span1 em');
			//console.log($span1);
       		 $span1.click(function(){
       		 	var idx = $(this).index();
       		 	$span1.removeClass('zise').eq(idx).addClass('zise');      		 	
       		 });

			//鞋码
			var $span2 = $('.yaya_2 .span2 em');			
       		 $span2.click(function(){
       		 	var idx = $(this).index();
       		 	$span2.removeClass('zise').eq(idx).addClass('zise');      		 	
       		 });
       		 
       		// 人气组合那一串
       		var $qing = $('.qing span');			
       		 $qing.click(function(){
       		 	var idx = $(this).index();
       		 	$qing.removeClass('addspan').eq(idx).addClass('addspan');      		 	
       		 });
       		 
       		// 详细说明那一串      		 
			var $changli = $('.pb_changetable li');			
       		 $changli.click(function(){
       		 	var idx = $(this).index();
       		 	$changli.removeClass('hover').eq(idx).addClass('hover');      		 	
       		 });
       		 
       		 
//图片放大镜效果	
		$(".jqzoom").jqueryzoom({xzoom:200,yzoom:200});

});