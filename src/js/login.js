

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
//、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、	
//console.log(oresult5);
//console.log(mimawan);

// 当点击“登录”，就添加 cookie
		    var str = getCookie("arryong");
			// 用于存储  邮箱   用户名  密码
			var arryong = [];
		

//   绑定点击注册按钮式发生的事件
	var $zhuce = $('.zhuce');
	$zhuce.click(function(){
		if(oresult1==false){
			alert('邮箱不正确');
			return ;
		};
		if(oresult2==false){
			alert('你输入的用户名不正确');
			return ;
		};
		if(oresult3==false || oresult4 !== mimawan){
			alert('密码不合法，请确认');
			return ;
		};
		if(oresult5!==$oyang){
			alert('验证码不正确');
			return ;
		};
		
		//alert('信息正确');
//    ====  待作  ======细节: 检查时除了验证合法性还要看以前有没有注册过


//  到这里验证信息都是正确的了，接下来向cookie中提交数据
			var obj = {};
			obj.$youyou = $username.val();  // 邮箱
			console.log($username.val());
			
			obj.$yonghu = $nickname.val();   // 用户名
			console.log($nickname.val());
			
			obj.$passpass = $password.val();  // 密码
			console.log($password.val());
				//添加到数组中，然后将数组设置到 cookie 中
				arryong.push(obj);
				console.log(arryong);
				// 将数组的内容设置到 cookie 中
				addCookie("arryong", JSON.stringify(arryong));			
	
				alert("添加成功");
		
	});//  点击注册按钮 的函数结束

// 跳转函数
//		location.href = "demo3-我的购物车.html";


	$username_dl = $('#username_dl');
	$password_dl = $('#password_dl');

// 点击注册按钮的函数	
	$('.denglu').click(function(){
	//获取cookie，并转换回数组
		var strdeng = getCookie("arryong");
		console.log(strdeng);
		//var arrdeng = JSON.parse(strdeng);
		var arrdeng = [];
		if(strdeng != ""){
			arrdeng = JSON.parse(strdeng);
		}
		
		console.log(arrdeng);


// 拿出cookie ,判断输入的内容有没有和里面一样的，有就可以登陆成功

		for (var i = 0; i < arrdeng.length; i++)
		{
			var str = arrdeng[i];
			console.log(str);
		
			var username = str.$yonghu;
			var password = str.$passpass;

			var shuyong = $username_dl.val();
			var shupass =$password_dl.val();
			
			if ((shuyong == username) && (shupass !== password))
			{			
				alert("密码不正确！");
			};
			if (shuyong !== username)
			{			
				alert("该用户不存在！");
			};
			//  用户名   和   密码 都正确
			if ((shuyong == username) && (shupass == password))
			{	
				// 登录成功后把登录状态存入 cookie
				var arrzhuangtai = [];
				var obj = {};					
					obj.$gaizi1 = "您好:";  // 前面的字==》您好:gggggg！欢迎光临天狗商城！
					obj.$gaizi3 = "！欢迎光临天狗商城！[";					
					obj.$zhuangtai = "退出!";  // 登录状态
					obj.$gaizhi = "][";
					obj.$guangli = "用户管理";  // 登录状态
					obj.$zhekouu = " ";    //登录成功时把不是会员删掉==》用来清空数据
					
					
					//添加到数组中，然后将数组设置到 cookie 中
						arrzhuangtai.push(obj);
						console.log(arrzhuangtai);
						// 将数组的内容设置到 cookie 中
						addCookie("arrzhuangtai", JSON.stringify(arrzhuangtai));			
			
						console.log("存入登录状态cookie成功！");
				
				
				
				
				alert("登录成功！");
			};
		
		}
		
		





	});// 点击注册按钮的函数      结束



}); // 尾巴
