
// 添加进购物车的商品
$(function(){
		
		//获取cookie，并转换回数组
		var str = getCookie("arr");
		var arr = JSON.parse(str);
		
		//console.log(arr[0]);
	
	
		var $tbody = $('tbody');
		var $tr = $('<tr/>');
		// 第1个td
		var $td1 = $('<td/>');
		var $p = $('<p/>');				
		var $img = $('<img/>');
			$img.attr({
				'src':arr[0].$picture,
				'alt':' ',
				'class':'shangimg'				
			}).appendTo($p);
			
			$aaa = $('<a/>').html(arr[0].$Product3+'&nbsp'+arr[0].$Product1+'&nbsp'+arr[0].$Product2).appendTo($p);
			
			$p.appendTo($td1);
			
		// 第2个td
		var $td2 = $('<td/>');
		$('<span/>').addClass('special').html(arr[0].$Price1).appendTo($td2);
	
		//第3个td
		var $td3 = $('<td/>');
		$('<b/>').html(arr[0].$Price2).appendTo($td3);
		
		// 第4个td
		var $td4 = $('<td/>');
		var $aa1 = $('<a/>');
			//$aa1.attr('href','#');
		var $imgjian = $('<img/>');
			$imgjian.attr({
				'src':'../img/menu_minus.gif',
				'alt':'减少'
				}).appendTo($aa1);
				
				
		var $input = $('<input/>');
			$input.attr({
				'size':'3',
				'type':'text',
				'readonly':'readonly',
				'id':'num',
				'value':arr[0].$num					
			});
			
		var $aa2 = $('<a/>');
			//$aa2.attr('href','#');
		var $imgjia = $('<img/>');
			$imgjia.attr({
				'src':'../img/menu_plus.gif',
				'alt':'增加'
				}).appendTo($aa2);
	
			$aa1.appendTo($td4);
			$input.appendTo($td4);
			$aa2.appendTo($td4);
			
			
		//第5个td    计算总价$$$$$$$$$$$$$$$$$$$$$$$$$
		var $td5 = $('<td/>');
		
		
		//  改变  input  的值 		
		var numvalue = Number($input.attr('value'));
	
		// 给新建的img添加一个点击函数，***减少***数量
		$imgjian.click(function(){
			numvalue--;		
			$input.val(numvalue);
		});
		// 给新建的img添加一个点击函数，***增加***数量
		$imgjia.click(function(){
			numvalue++;		
			$input.val(numvalue)
		});
		
		console.log(numvalue);
		//  计算总价
		var pricell = arr[0].$Price2;   //"￥111"
			pricell = pricell.slice(1); // 切割
			pricell = Number(pricell);  // 转化为整数
		var shuu = 	$input.attr('value');
		//var shuu = 	Number(arr[0].$num);
		var zong = pricell * shuu;
		
		
		
		
		// 计算下面的   价格总计  和  折后价格
		$('.zongji').html('￥'+zong);
		$('<strong/>').html(zong).appendTo($td5);
		
		// 页面最顶端显示 商品 件数
		$('.red1').html('1');
		
		// 第6个td    
		var $td6 = $('<td/>');
		$td6.addClass('blue');
		$('<a/>').attr('href','#').html('取消订购').appendTo($td6);
		
		$td1.appendTo($tr);
		$td2.appendTo($tr);
		$td3.appendTo($tr);
		$td4.appendTo($tr);
		$td5.appendTo($tr);
		$td6.appendTo($tr);
		
		$tr.appendTo($tbody);
	
	
	
	
	
	
	
	
	});