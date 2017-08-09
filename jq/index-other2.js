$(function(){
	
	$.get("json/left-box2.json",function(data){
		
		//console.log(data);
		
		var arr = data ;
		
		for(var i=0 ;i<arr.length ;i++){  
			
			var leftBox = arr[i].leftBox ;
			//console.log(leftBox);
			var centerBox = arr[i].centerBox ;
			//console.log(centerBox);
			var rightBox = arr[i].rightBox ;
			console.log(rightBox);
//			var hotsell = arr[i].hotsell ;
//			//console.log(hotsell);
//			var specialty = arr[i].specialty ;
			//console.log(specialty);

			for(var j=0 ;j<leftBox.length;j++){
				
				var obj = leftBox[j] ;
				
				var left = $("<div class='left'></div>").appendTo(".wrapper");	
				$("<div class='left-box'><a href='#'><img src='"+leftBox[j].img+"' class='pic-left'/></a></div>").appendTo(left);		
				
			}
			
			for(var k=0 ;k<centerBox.length;k++){
				
				var obj = centerBox[k] ;
				
				var center = $("<div class='center'></div>").appendTo(".wrapper")	;
				$("<div class='center-box'><a href='#'><img src='"+obj.centerBox[k]+"' class='pic-left'/></a></div>").appendTo(center);		
						
			}
			
			
			
			
			
			
			
		}
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
