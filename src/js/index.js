

//************* 运动函数*********************
// getStyle：获取对象样式对应属性的值
	// 参数：
	//     对象， obj
	//     属性， attr
	//  返回值： 对应属性的值
	
function getStyle(obj, attr) {
	
	var objStyle = null;
	if (window.getComputedStyle) {
		objStyle = getComputedStyle(obj);
	} else {
		objStyle = obj.currentStyle;
	}
	
	return objStyle[attr];
}
function startMove(obj, attr, iTarget, fn) {
	
	
	clearInterval(obj.timer);

	obj.timer = setInterval(function() {
		
		// 1. 得到当前的值
		var current = parseInt(getStyle(obj, attr));
		if (attr == "opacity") {
			// 0.3 ==> 0
			current = parseFloat(getStyle(obj, attr));
			current *= 100;
			current = Math.round(current);
		}
		
		// 2. 计算速度
		//     缓冲速度
		var speed = (iTarget - current) / 8;
		
		//   0.3 ===> 0
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		
		// 3. 判断终止条件
		if (current == iTarget) {
			clearInterval(obj.timer);
			
			// 动作完成，调用回调函数
//			if (fn) {
//				fn();
//			}
			
			// 与上面的if等价转换，相当于 fn 存在才执行fn()
			fn && fn();
			
			return ;
		}
		
		//console.log(current, iTarget);
		
		// 4. 更新当前的位置
		obj.style[attr] = current + speed + "px";
		if (attr == "opacity") {
			obj.style.opacity = (current + speed) / 100;
			obj.style.filter = "alpha(opacity="+current + speed+")";
		}
	}, 50);

}





//显示隐藏卡片
$(function(){

// 点击函数，切换版块
       		 $('.content').hide().eq(0).show();
       		 $('.header li').eq(0).addClass('active');
       		 
       		 $('.header li').click(function(){
       		 	var idx = $(this).index();
       		 	$('.header li').removeClass('active').eq(idx).addClass('active');
       		 	$('.content').hide().eq(idx).show();
       		 	
       		 });
       		 
// 鼠标移上去和移开改变透明度.sales
       		var $img = $('.all_li img');
       		$img.each(function(idx,val){
       			var $this = $(this);
       			$(this).mouseover(function(){
       				$this.addClass('mouseover');
       			}).mouseout(function(){
       				$this.removeClass('mouseover');
       			})
       		});
       		
// 图片的轮播
        	var $lunbo_img = $('.lunbo_img img');
        	var $lunbo_one = $('.lunbo_one img');
        	var $lunbo_two = $('.lunbo_two img');
        	var $lunbo_three = $('.lunbo_three img');
        	var $closhes_data = $('.closhes_data img');
        	var $closhes_next = $('.closhes_next img');
       		//console.log($lunbo_img);
       		var index = 0;
       		setInterval(function(){
       			if(index == 4){
       				index = 0;
       			}
       			
       			$lunbo_img.eq(index).fadeIn(3000).fadeOut(3000);
       			$lunbo_one.eq(index).fadeIn(3000).fadeOut(3000);
       			$lunbo_two.eq(index).fadeIn(3000).fadeOut(3000);
       			$lunbo_three.eq(index).fadeIn(3000).fadeOut(3000);
       			$closhes_data.eq(index).fadeIn(3000).fadeOut(3000);
       			$closhes_next.eq(index).fadeIn(3000).fadeOut(3000);
       			index++;
       		},6000);
      

//左侧的导航
		var $huaguo = $('.huaguo');  //a 标签
		var $zuoceul = $('.zuoceul'); // 弹出的东西
		var $first_tan = $('.first_tan'); //大li
		var $menu_ver = $('.menu_ver'); //整体		
		
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
	
	
	// 跳转函数
//		location.href = "demo3-我的购物车.html";

	// 点击登录和免费注册，跳转登录注册页面
	$('.zhuangtai').click(function(){
		location.href = "../html/login.html";
	});
	$('.guangli').click(function(){
		location.href = "../html/login.html";
	});






}); //结束
      