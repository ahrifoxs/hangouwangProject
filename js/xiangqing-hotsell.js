$(function(){
	
	//var arr = [];
	//2.给other-items-botton中的dl添加点击事件
	
	
	
	//1.获取数据
	
	$.get("json/xiangqing-hotsell.json",function(data){
		
		//console.log(typeof data);
		var arr = data ;
		//console.log(arr)
		for(var i=0 ; i<arr.length ;i++){
			
			var obj = arr[i] 
			
			$("<dl class='other-list'><dt class='hotsellpic'><a href='javascript:;'><img src='"+obj.img+"' /></a></dt><dd class='title'><a href='#'><p>"+obj.title+"</p></a></dd>	<dd id='price'><em>"+obj.unit+obj.price+"</em></dd></dl>").appendTo("#other-items-botton");
			 
		}
		
		$("#other-items-botton").on("click","dl",function(){
		
		//console.log(22);
		var index = $(this).index("dl");
		//console.log(index)
		var id = arr[index-5].id ;
		console.log(id);
		
		location.href="index-xiangaqing.html?id="+id;
	})
		
		
	})
	
	
//	var params = location.search;
//	console.log(params);
	
	
	
	
	
	
})
