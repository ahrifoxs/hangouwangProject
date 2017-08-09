$(function(){
	
	//等比公式
	//中图width/大图width == 中区域width/大区域width
	$("#middleArea").width( $("#middleImg").width()/$("#bigImg").width()*$("#bigArea").width()  );
	$("#middleArea").height( $("#middleImg").height()/$("#bigImg").height()*$("#bigArea").height()  );
	
	//放大系数
	var scale = $("#bigArea").width() / $("#middleArea").width() ;	
	//console.log(scale) ；
	
	
	//在中图中移动
	$("#middleImg").mousemove(function(e){ 
		
		$("#middleArea").show(); //显示中区域
		$("#bigArea").show();  //显示大区域
		
		var x = e.pageX - $("#middleArea").width()/2 - $("#box").offset().left ; 
		var y = e.pageY - $("#middleArea").height()/2 - $("#box").offset().top ; 
		
		
		if(x < 0){
			x = 0 ;
		}else if( x > $("#middleImg").width() - $("#middleArea").width() ){
			x = $("#middleImg").width() - $("#middleArea").width() ;
		}
		
		if(y < 0){
			y = 0 ;
		}else if( y > $("#middleImg").height() - $("#middleArea").height() ){
			y = $("#middleImg").height() - $("#middleArea").height() ;
		}
		
		
		
		
		$("#middleArea").css({left:x,top:y});
		
		
		//console.log($("#bigImg"));  
		//大图移动位置
		
		//console.log(scale) 
		$("#bigImg").css({left:-x*scale,top:-y*scale}) ;
		
		//console.log(x); 
		
	});
	
	//鼠标移出时middleImg时隐藏中区域和大区域
	$("#middleImg").mouseleave(function(){
		
		$("#middleArea").hide()	;
		
		$("#bigArea").hide() ;
		
		
	});
	
	//点击小图轮换中图
	$("#small li ").mouseenter(function(){
		
		var  index = $(this).index(" #small li ") ;
		//console.log(index);
		
		$("#middleImg img").attr({src:"images/images2/"+ (index+1) +"_2.jpg"}) ;
		//$("#bigImg").attr({src:"images/images2/"+ (index+1) +"_3.jpg"}) ;
		
		
	});  

	
	
});
