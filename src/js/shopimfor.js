
$(function(){
// 点击函数,改变背景色     购物车选  颜色 和 鞋码
			//颜色
			var $span1 = $('.yaya_2 .span1 em');
			//console.log($span1);
			
			//颜色    
				var colorarr = ['蓝色','黑色','红色'];
				var colorstr = '';
				 
			//鞋码    
				var sizearr = ['36码','37码','38码','39码','40码','41码'];
				var sizestr = '';
				
       		 $span1.click(function(){
       		 	var idx = $(this).index();
       		 	colorstr = colorarr[idx];
       		 		//console.log(colorstr);	
       		 	$span1.removeClass('zise').eq(idx).addClass('zise');      		 	
       		 });					
					
			//鞋码
			var $span2 = $('.yaya_2 .span2 em');			
       		 $span2.click(function(){
       		 	var idx = $(this).index();
       		 	sizestr = sizearr[idx];
       		 		//console.log(sizestr);
       		 	$span2.removeClass('zise').eq(idx).addClass('zise');      		 	
       		 });
       		 
       		 console.log(colorstr);
       		 console.log(sizestr);
       		 
       		// 当点击“添加到购物车”，就添加 cookie
		    var str = getCookie("arr");
		    
		    // 当cookie中存放商品信息时，显示数量
		    if(str != ""){
		    	// 页面最顶端显示 商品 件数
				$('.red1').html('1');
		    };
		    
			// 用于存储所有的商品
			var arr = [];

//***********************************************************
// 用来点击的加入购物车
				//点击函数
				$("#addShopCart").click(function() {
			
					var obj = {};
					
			// 这个是图片   $picture		
					obj.$picture = $('.jiatu').attr('jqimg');
					//console.log($('.jiatu').attr('jqimg'));
					
			// 这个是商品信息    $Product
					obj.$Product1 = $('.yaya').html();
					obj.$Product2 = $('.yaya_1').html();
					obj.$Product3 = $('.shuju1').html();
					obj.$Price1 = $('.shuju2 span').html(); //价格
					obj.$Price2 = $('.shuju3 strong').html();  // 商城价格
					obj.$colorstr = colorstr;   // 颜色
					obj.$sizestr = sizestr;   // 鞋码
					obj.$disblock = 'block';   // 底下 tfooter 显示
					obj.$disnone = 'none';   // 让显示的  购物车空空如也  这块消失
					
			// 数量     
					obj.$num = $('#inputnum').val();

					//添加到数组中，然后将数组设置到 cookie 中
					arr.push(obj);
					console.log(arr);
					// 将数组的内容设置到 cookie 中
					addCookie("arr", JSON.stringify(arr));	
							
					alert("添加成功");
					
					location.href = "../html/shopcar.html";
					
				
				});

     		 
// 以上是添加购物车的函数       		 
       		 
        		 
       		 
       		 
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
		

//添加购物车
		
		

});