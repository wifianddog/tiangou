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
			
		





}); //结束
      