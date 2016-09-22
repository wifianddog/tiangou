
// 添加进购物车的商品
$(function(){
		var $tbody = $('tbody');
		var $tr = $('<tr/>');
		// 第1个td
		var $td1 = $('<td/>');
		var $p = $('<p/>');
		var $img = $('<img/>');
			$img.attr({
				'src':'../img/minP20160313153110796.jpg',
				'alt':' ',
				'class':'shangimg'				
			}).appendTo($p);
			
			$p.appendTo($td1);
			
		// 第2个td
		var $td2 = $('<td/>');
		$('<span/>').addClass('special').html('￥1369').appendTo($td2);
	
		//第3个td
		var $td3 = $('<td/>');
		$('<b/>').html('￥1369').appendTo($td3);
		
		// 第4个td
		var $td4 = $('<td/>');
		var $aa1 = $('<a/>');
			$aa1.attr('href','#');
			$('<img/>').attr({
				'src':'../img/menu_minus.gif',
				'alt':'减少'
				}).appendTo($aa1);
				
		var $input = $('<input/>');
			$input.attr({
				'size':'3',
				'type':'text',
				'readonly':'readonly',
				'id':'num',
				'value':'1'					
			});
			
		var $aa2 = $('<a/>');
			$aa2.attr('href','#');
			$('<img/>').attr({
				'src':'../img/menu_plus.gif',
				'alt':'增加'
				}).appendTo($aa2);
	
			$aa1.appendTo($td4);
			$input.appendTo($td4);
			$aa2.appendTo($td4);
			
		//第5个td
		var $td5 = $('<td/>');
		$('<strong/>').html('￥1099').appendTo($td5);
		
		// 第6个td
		var $td6 = $('<td/>');
		$td6.addClass('blue');
		$('<a/>').attr('href','#').appendTo($td6);
		
		$td1.appendTo($tr);
		$td2.appendTo($tr);
		$td3.appendTo($tr);
		$td4.appendTo($tr);
		$td5.appendTo($tr);
		$td6.appendTo($tr);
		
		$tr.appendTo($tbody);
		
	
	});