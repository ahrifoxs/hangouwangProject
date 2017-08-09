$(function(){
	
	/***************************第一部分的商品点击事件和图片插入***************************************/
	
	
	
	$.get("json/left-box3.json",function(data){
		
		//console.log(data);
		var obj = data ;
		
		var leftBox = obj.leftBox ;
		//console.log(leftBox )
		var rightBox = obj.rightBox ;
		//console.log(rightBox )
		
		var left = $("<div class='left'></div>").appendTo(".wrapper");	
		for(var i= 0 ;i<leftBox.length ; i++){
			
			
			$("<div class='"+leftBox[i].clas+"'><a href='JavaScript:;'><img src='"+leftBox[i].img+"' class='"+leftBox[i].clas+"'/></a></div>").appendTo(left);		
			
			
			
		}
		
		$(".wrapper").on("click","img",function(){
			
			var index = $(this).index(".wrapper img" );
			
			var id = leftBox[index].id
			
			location.href="index-xiangaqing.html?id="+id;
			
		})
		
		
		var centerBox = obj.centerBox ;
		//console.log(centerBox )
		var center = $("<div class='center'></div>").appendTo(".wrapper")	;
		for(var j=0 ;j<centerBox.length;j++){
			
			
			$("<div class='center-box'><a href='JavaScript:;'><img src='"+centerBox[j].img+"' class='pic-left'/></a></div>").appendTo(center);		
			
		}
		
		$(".wrapper").on("click","img",function(){
			
			var index = $(this).index(".wrapper img" );
			console.log(index)
			var id = centerBox[index].id ;
			
			loaction.href = "index-xiangaqing.html?id="+id;
			
			
		})
		
		
		var right = $("<div class='right'></div>").appendTo(".wrapper");	
		for(var k=0;k<rightBox.length;k++){
			
		$("<div class='right-box'><a href='JavaScript:;'><img src='"+rightBox[k].img+"' class='pic-left'/></a></div>").appendTo(right);		
		
		}
		
		var index = $(this).index(".wrapper img" );
		console.log(index)
		var id = rightBox[index].id
		
		location.href="index-xiangaqing.html?id="+id;

		
	})
	
	
	/***************************第2部分的商品点击事件和图片插入  hostSell***************************************/
	
	
	var arr = [];
	$.get("json/hotSell.json",function(data){
		
		//console.log(data);
		arr = data;
		var ul = $("<ul></ul>").appendTo("#hotsell");
		for(var i=0 ;i<arr.length;i++){
			
			$("<li><a href='JavaScript:;' title='热卖品'><img src='"+arr[i].img+"'/></a></li>").appendTo(ul);
			
		}
		
		//点击事件
		$("#hotsell").on("click", "img", function(){
		
			var index = $(this).index("#hotsell img") ;
			
			//console.log(index)
			var id = arr[index].id;
			//console.log(id);
			//console.log("热卖")
			location.href="index-xiangaqing.html?id="+id; 
			//location.href="index-xiangaqing.html" 
			
		} ) ;
		
		
	})
		
	/***************************第3部分的商品点击事件和图片插入  specialty***************************************/
		
	
	
	var arr1 = [];
	$.get("json/specialty.json",function(data){
		
		console.log(data);
		
		arr1 = data ;
		
		var ul = $("<ul></ul>").appendTo("#specialty");

		for(var i= 0 ;i<arr1.length;i++){
			
			$("<li><a href='JavaScript:;' title='特产'><img src='"+arr1[i].img+"'/></a></li>").appendTo(ul);
			
		}
		
		//点击事件
		$("#specialty").on("click","img",function(){
			
			//console.log("特产")
			var index = $(this).index("#specialty img");
			
			var id = arr1[index].id ;
			
			
			location.href="index-xiangaqing.html?id="+id; 
			
			
		})
			
		
	})
		
		
		

	
	
	
	
	
})
