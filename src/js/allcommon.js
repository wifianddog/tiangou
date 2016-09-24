$(function(){
	
	
// 当cookie中存放商品信息时，显示数量
			var shuliang = getCookie("arr");
		    if(shuliang != ""){
		    	if(shuliang == "1"){
		    		$('.red1').html('0');
		    		return ;
		    	}
		    	// 页面最顶端显示 商品 件数
				$('.red1').html('1');
		    };	
	
	

//  记录登录状态，当cookie中有登录成功的状态的时候，显示已登录
		//获取cookie，并转换回数组
		var strzt = getCookie("arrzhuangtai");
		//var arrzt = JSON.parse(arrzt);
		var arrzt = [];
		if(strzt != ""){
			if(strzt == "1")
			{
				return;
			}
			arrzt = JSON.parse(strzt);
			$('.gaizi1').html(arrzt[0].$gaizi1); 		
			$('.gaizi3').html(arrzt[0].$gaizi3);
			$('.guangli').html(arrzt[0].$guangli);
			$('.gaizhi').html(arrzt[0].$gaizhi);
		
//  判断用户是否已登录，如果已登录，给  退出  display：block 给 退出  绑定移除cookie的函数
			
			$('.zhuangtai').html(' ');			
			$('.tuichu').html(arrzt[0].$zhuangtai);
			$('.tuichu').click(function(){
				removeCookie("arrzhuangtai")
				alert('成功退出当前账户');
				//有一个小bug，点击确定后刷新页面，注意这里是公共代码
			});
		
		}
		
		var stryong = getCookie("arryong");
		//var arrzt = JSON.parse(arrzt);
		var arryong = [];
		if(stryong != ""){
			arryong = JSON.parse(stryong);
			console.log(arryong[0]);
			$('.gaizi2').html(arryong[0].$yonghu);
		}
		
		console.log('啦啦啦');
		console.log(arrzt[0]);

// 

	

	
});// 尾巴
