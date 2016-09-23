


//****************页面加载时执行  jQgery *************************

$(function(){
	
	//  记录登录状态，当cookie中有登录成功的状态的时候，显示已登录
		//获取cookie，并转换回数组
		var strzt = getCookie("arrzhuangtai");
		var arrzt = JSON.parse(strzt);
		
		var stryong = getCookie("arryong");
		var arryong = JSON.parse(stryong);
		
		console.log(arrzt[0]);
		
		$('.gaizi1').html(arrzt[0].$gaizi1); 
		$('.gaizi2').html(arryong[0].$yonghu);
		$('.gaizi3').html(arrzt[0].$gaizi3);
		$('.zhuangtai').html(arrzt[0].$zhuangtai);
		$('.guangli').html(arrzt[0].$guangli);
		$('.gaizhi').html(arrzt[0].$gaizhi);
		
	








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
			
	
});// 包围圈
