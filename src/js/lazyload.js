
// 懒加载
$(function(){
			var $glist = $('#glist');   // 这是ul
			var pageNum = 1;

			// 全局配置
			$.ajaxSetup({
				url:'../ajax/football',
				data:{pageNo:pageNum},
				dataType:'json',
				success:function(res){
					//console.log(res);

					
					$.each(res.data,function(idx,item){

						var $li = $('<li/>');
						var $div = $('<div/>');
						$div.addClass('pic');
						var $a = $('<a/>');
						$a.attr({
							'target':'_blank',
							'href':'#'
						});
						$('<img/>').attr({
							'alt':' ',
							'src':item.tupian
						}).appendTo($a);
						$a.appendTo($div);
						$div.appendTo($li);
						
					
						var $pa = $('<p/>');
						$pa.html(item.danwei);
						
						var $pb = $('<p/>');
						$pb.html(item.danwei);
						
						var $pc = $('<p/>');
						$pc.addClass('text');
						
						var $pd = $('<p/>');
						$pd.addClass('blue1').html(item.all);
						
						$('<del/>').html(item.price).prependTo($pa);
						$('<span/>').html(item.jiangjia).addClass('price').prependTo($pb);
						$('<a/>').attr('href','#').html(item.shangping).appendTo($pc);
						
						
						$pa.appendTo($li);
						$pb.appendTo($li);
						$pc.appendTo($li);
						$pd.appendTo($li);
						
						
						$li.appendTo($glist);
					
					});
						
				}
			});

			// 页面一加载就请求服务器的数据
			$.ajax();

			$(window).on('scroll',function(){
				var scrollTop = $(window).scrollTop();

				// 懒加载：滚动《快到底部》的时候再加载
				if(scrollTop >= $(document).height() - $(window).height() - 100){
					pageNum++;
					if(pageNum>=4){
						pageNum = 1;
					}

					$.ajax({
						data:{pageNo:pageNum}
					});
				}
			});

			// 手动触发滚动事件
			$(window).trigger('scroll');
});