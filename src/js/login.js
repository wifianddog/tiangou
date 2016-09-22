

$(function(){
	
//1,验证码函数
	function yangzhengma(){
		var a = parseInt(Math.random()*10);
		var b = parseInt(Math.random()*10);
		var c = parseInt(Math.random()*10);
		var d = parseInt(Math.random()*10);
		var str = "";
		str += a;
		str += b;
		str += c;
		str += d;
		
		return str;
	}
	
	var str = yangzhengma();  // 页面刚加载是有一个验证码	
	$('#yanzheng').html(str);
	
	$('#yanzheng').click(function(){	// 点击时改变验证码
		$('#yanzheng').html(yangzhengma());
		console.log(str)
	});



// 验证电子邮箱
	var oresult1 = "";   // 用来保存判断结果,全局变量

	var $username = $("#username"); // input
	var $span2 = $("#p2 span");
	
	$username.on('focus',function(){    // 获得焦点时
		$span2.html('填写正确的邮箱');
		
	}).on('input',function(){          // 输入时验证
		var str = $(this).val();
		var reg = /\w+@[a-zA-Z0-9]+\.[a-zA-Z]+/;
		oresult1 = reg.test(str);  	// reg.test(str) 返回 true 或 false 
				
	}).on('blur',function(){			// 失去焦点时
		if(oresult1 == false){
			$span2.html('邮箱不正确');
		}else{
			$span2.html('填写对了');
		}
	});
	

//     验证用户名
	var oresult2 = "";   // 用来保存判断结果,全局变量
	var $nickname = $("#nickname"); // input
	var $span3 = $("#p3 span");
	
	$nickname.on('focus',function(){    // 获得焦点时
		$span3.html("4-20位英文字符,数字,'_'的组合。");
		
	}).on('input',function(){          // 输入时验证
		var str = $(this).val();
		var reg = /^[a-zA-Z]\w{3,19}$/;
		oresult2 = reg.test(str);  	// reg.test(str) 返回 true 或 false 
				
	}).on('blur',function(){			// 失去焦点时
		if(oresult2 == false){
			$span3.html('你输入的用户名不正确');
		}else{
			$span3.html('用户名可以注册');
		}
	});
	
	
//     验证密码  
	var oresult3 = "";   // 用来保存判断结果,全局变量
	var $password = $("#password"); // input
	var $span4 = $("#p4 span");
	var mimawan = ""; // 保存输入的密码
	
	$password.on('focus',function(){    	// 获得焦点时
		$span4.html("6-16位字符");
		
	}).on('input',function(){          // 输入时验证
		var str = $(this).val();
		mimawan = $(this).val();  // 保存密码，用来和重复密码对比
		var reg = /^.{5,15}$/;
		oresult3 = reg.test(str);  	// reg.test(str) 返回 true 或 false 
				
	}).on('blur',function(){			// 失去焦点时
		if(oresult3 == false){
			$span4.html('密码不合法，请确认');
		}else{
			$span4.html('密码合法');
		}
	});
	
	//4-20英文字符,数字,'_'的组合。
	
//验证重复密码
	var oresult4 = "";   // 用来保存判断结果,全局变量
	var $passwordchecked = $("#passwordchecked"); // input
	var $span5 = $("#p5 span");
	
	$passwordchecked.on('focus',function(){    	// 获得焦点时
		$span5.html("两次密码必须一致");
		
	}).on('input',function(){          // 输入时验证
				
		oresult4 = $(this).val();  	
				
	}).on('blur',function(){			// 失去焦点时
		if(oresult4 !== mimawan){
			$span5.html('密码不合法，请确认');
		}else{
			$span5.html('密码一致');
		}
	});

// 验证验证码
	var oresult5 = "";   // 用来保存判断结果,全局变量
	var $yanzhengma = $("#yanzhengma"); // input
	var $span6 = $("#p6 span");
	var $oyang = $('#yanzheng').html(); // 取验证码
	
	$yanzhengma.on('input',function(){          // 输入时验证
				
		oresult5 = $(this).val();  	
				
	})
//	.on('blur',function(){			// 失去焦点时
//		if(oresult5 !== $oyang){
//			alert('验证码输入错误');
//		}else{}
			
//	});
	
console.log(oresult5);
console.log(mimawan);

//   绑定点击注册按钮式发生的事件
	var $zhuce = $('.zhuce');
	$zhuce.click(function(){
		if(oresult1==false){
			alert('邮箱不正确');
			return ;
		}
		if(oresult2==false){
			alert('你输入的用户名不正确');
			return ;
		}
		if(oresult3==false || oresult4 !== mimawan){
			alert('密码不合法，请确认');
			return ;
		}
		if(oresult5!==$oyang){
			alert('邮箱不正确');
			return ;
		}
		
		alert('信息正确');
	});

//	var btnGoto = document.getElementById("goto");
//	
//	btnGoto.onclick = function() {
//		// 跳转到另一个页面？
//		
//		location.href = "demo3-我的购物车.html";
//	}


}); // 尾巴
