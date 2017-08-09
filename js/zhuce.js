window.onload = function(){
	
	var aInput = document.getElementsByTagName("input");
	
	
	
	//获取上次登录的用户
	aInput[0].value = getCookie("user");
	aInput[1].value = getCookie("pwd") ;
	
	
	
	var flag1 = false; //表示用户名是否正确
	var flag2 = false; //表示密码是否正确
	var flag3 = false; //表示重复密码是否正确
	var flag4 = false; //表示邮箱是否正确
	
	//用户名
	aInput[0].onkeyup = function(){  
		
		var value = this.value ;  
		
		var reg = /^.{3,15}$/;
		
		if (reg.test(value)){
			flag1 = true;
			console.log(1)
		}
		else {
//			oToast.innerHTML = "用户名不合法";
			flag1 = false;
			console.log(11)
		}
		
	}
    
    
    //密码
	aInput[1].onkeyup = function(){
		var value = this.value;
		var reg = /^.{6,20}$/;
		if (reg.test(value)){
			flag2 = true;
			console.log(2)
		}else{
			flag2 = false;
			console.log(22)
	
		}
		
	}
	
	
	//确认密码
	aInput[2].onkeyup = function(){
		var value = this.value;

		if (value == aInput[1].value){
			flag3 = true;
			console.log(3)
		}
		else {
			flag3 = false;
			console.log(33)
		}
	}
	
	//邮箱
	
	aInput[3].onkeyup = function(){
		var value = this.value;
		var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
		if (reg.test(value)){
			flag4 = true;
			console.log(4)
		}else{
			flag4 = false;
			console.log(44)
	
		}
		
	}
	
	//注册
	aInput[6].onclick = function(){
		
		if (flag1 && flag2 && flag3 && flag4) {
			
			if (aInput[4].checked && aInput[5].checked){
				
				var d = new Date();
				d.setDate(d.getDate()+10);
				setCookie("user", aInput[0].value, d); //保存用户名到cookie
				setCookie("pwd", aInput[1].value, d); //保存密码到cookie
				
				
			console.log("1111");
			
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "http://127.0.0.1/myfirstproject/php/zhuce.php", true);
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            //console.log("username="+aInput[0].value+ "&password="+aInput[1].value +"&email="+aInput[3].value)
            xhr.send("username="+aInput[0].value+ "&password="+aInput[1].value +"&email="+aInput[3].value);
            console.log(aInput[0].value,aInput[1].value,aInput[3].value)
            xhr.onreadystatechange = function(){
            	console.log(xhr.readyState,xhr.status)
                if (xhr.readyState==4 && xhr.status==200) {
                    console.log(xhr.responseText);
                }
            }
				
			console.log("666666")
			
			
			}
			console.log("注册成功！");
			
				
			
			
		}
		else {
		
			console.log("输入有误， 请检查");
		}
		return false;
	}

	
	
	
	
	
	
}
