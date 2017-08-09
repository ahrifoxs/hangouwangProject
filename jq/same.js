$(function(){


	$.get("json/same.json",function(data){
		
		//console.log(data);
		
		var arr = data ;
		console.log(arr)
		for(var i=0;i<arr.length ;i++){
			
			
			
			$("<a href='#'><img src='"+arr[i].goodsLeftArea+"' alt='神农架土豆' /></a>").appendTo(".goods-left-area").appendTo(".same");
			
			var goodsRightArea = arr[i].goodsRightArea ;
			
			console.log(goodsRightArea);
			for(var j=0 ; j<goodsRightArea.length;j++){
				
				if(j == 2){
					
					$("<li><div class='bigimg'><a href='#'><img src='"+goodsRightArea[j].img+"' alt='' /></a></div></li>").appendTo("ul");
					
				}else{
					
					$("<li><dl><dt class='imgbox'><a href='#'><img src='"+goodsRightArea[j].img+"' class='change'/><span></span></a></dt><dd class='goods-name'><a href='#'>"+goodsRightArea[j].title+"</a></dd><dd class='goods-price'><em>"+goodsRightArea[j].unit+goodsRightArea[j].price+"</em><span class='original'>"+goodsRightArea[j].unit+goodsRightArea[j].priced+"</span></dd></dl></li>").appendTo("ul");
					
				}  
				
				
			}
			
		}
		
		
	})
	
	
	
	
	
	
})




















