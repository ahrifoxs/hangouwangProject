window.onload = function(){
	
    var aInput = document.getElementsByTagName("input");
    
//  var falges1 = ture;
//  var falges2 = ture;
    
    //登录
    aInput[3].onclick = function(){
    	
    	if(aInput[2].checked ){

    		var username = getCookie("user");
    		var passworde = getCookie("pwd");
    		username = aInput[0].value;
    		passworde = aInput[1].value
    	}
    	
		var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1/myfirstproject/php/denglu2.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("username="+ aInput[0].value + "&password=" + aInput[1].value);
        xhr.onreadystatechange = function(){
            if (xhr.readyState==4 && xhr.status==200) {
                console.log(xhr.responseText);
                
               
            }
        }
        
//      if(aInput[0].value ==   || aInput[1].value == ){
//      	
//      	 location.href = "index-hangouwang.html" ;
        	  
 //       }
        
        


    }
	
	
}
