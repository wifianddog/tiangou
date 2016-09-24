


//****************页面加载时执行  jQgery *************************

$(function(){
	
	




	//左侧的导航
	
		var $leftmenu = $('.leftmenu');// 所有商品，点击弹出竖直导航
		var $hua = $('.hua');  //a 标签
		var $huaguo = $('.huaguo'); // 能弹出来的大哥大的珠宝标签
		var $zuoceul = $('.zuoceul'); // 弹出的东西
		var $first_tan = $('.first_tan'); //大li
		var $gaiheight = $('.menu_ver'); //整体	
		var $ulul = $('.ulul');	
		
		$leftmenu.on('mouseover',function(){   ///////
			
			
				$gaiheight.show(350);
				
				$gaiheight.on('mouseout',function(){
				
					$gaiheight.hide();
				
				}).on('mouseover',function(){
				
					$gaiheight.show();
					
//					里面的小的弹出来的
					$huaguo.on('mouseover',function(){   ///////
			
						$zuoceul.addClass('zuoceblock');
						
						$zuoceul.on('mouseout',function(){
						
							$zuoceul.removeClass('zuoceblock');
						
						}).on('mouseover',function(){
						
							$zuoceul.addClass('zuoceblock');
						
					});
										
					}).on('mouseout',function(){   ///////
						
						$zuoceul.removeClass('zuoceblock');
						
					});
			});
			
		}).on('mouseout',function(){
				
				$gaiheight.hide();
			});
			
	
// 跳转函数
//		location.href = "我的购物车.html";

	// 点击登录和免费注册，跳转登录注册页面
	$('.zhuangtai').click(function(){
		location.href = "../html/login.html";
	});
	$('.guangli').click(function(){
		location.href = "../html/login.html";
	});
	
	
	
});// 包围圈
