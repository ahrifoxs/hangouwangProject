
$(function(){
	
	//******************************left-box********************************//
	
	//var obj = {};
	
	$(".wrapper,#hotsell").on("click", "img", function(){
	
		//location.href="index-xiangaqing.html?id="+id; 
		location.href="index-xiangaqing.html" 
		
	} ) ;
	
	
	
	
	
	 
	
	$.get("json/left-box.json",function(data){
		
		//.wrapper 特价区动态图添加
		//console.log(data);
		var obj = data ;
		
		var left = $("<div class='left'></div>").appendTo(".wrapper");	
		$("<div class='left-box'><a href='#'><img src='"+obj.leftBox1+"' class='pic-left'/></a></div>").appendTo(left);		
		$("<div class='left-box'><a href='#'><img src='"+obj.leftBox2+"' class='pic-left'/></a></div>").appendTo(left);		
		
		var center = $("<div class='center'></div>").appendTo(".wrapper")	;
		$("<div class='center-box'><a href='#'><img src='"+obj.centerBox1+"' class='pic-left'/></a></div>").appendTo(center);		
		$("<div class='center-box'><a href='#'><img src='"+obj.centerBox2+"' class='pic-left'/></a></div>").appendTo(center);		
		$("<div class='center-box'><a href='#'><img src='"+obj.centerBox3+"' class='pic-left'/></a></div>").appendTo(center);		
		$("<div class='center-box'><a href='#'><img src='"+obj.centerBox4+"' class='pic-left'/></a></div>").appendTo(center);		
		  
		var right = $("<div class='right'></div>").appendTo(".wrapper");	
		$("<div class='right-box'><a href='#'><img src='"+obj.rightBox1+"' class='pic-left'/></a></div>").appendTo(right);		
		$("<div class='right-box'><a href='#'><img src='"+obj.rightBox2+"' class='pic-left'/></a></div>").appendTo(right);		
		
		
		//hotsell 热卖区动图添加
		
		var ul = $("<ul></ul>").appendTo("#hotsell");
		$("<li><a href='#' title='热卖品'><img src='"+obj.hotsell1+"'/></a></li>").appendTo(ul);
		$("<li><a href='#' title='热卖品'><img src='"+obj.hotsell2+"'/></a></li>").appendTo(ul);
		$("<li><a href='#' title='热卖品'><img src='"+obj.hotsell3+"'/></a></li>").appendTo(ul);
		
		//specialty 特产区动图添加
		
		var ul = $("<ul></ul>").appendTo("#specialty");
		$("<li><a href='#' title='特产'><img src='"+obj.specialty1+"'/></a></li>").appendTo(ul);
		$("<li><a href='#' title='特产'><img src='"+obj.specialty2+"'/></a></li>").appendTo(ul);
		$("<li><a href='#' title='特产'><img src='"+obj.specialty3+"'/></a></li>").appendTo(ul);
		
		 
	})
	
	
	
	
	
	
})


















