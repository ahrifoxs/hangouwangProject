
$(function(){
	
	refresh();
	
	
	
	//封装一个从cookie当中获取数据并显示的函数
	function refresh(){
		
		//top区域的icon变色
		$("#list li").mouseenter(function(){
			
			$(this).find(".ico_shop").animate({backgroundPosition:"0 -25px" });
			
		
		})
		
		
		//获取购物车中的cookie
		var arr = $.cookie("cart") ;
		if(arr){
			arr = JSON.parse(arr);
			
			//在创建新节点之前要先清空旧节点
			$("tbody").empty();

			
			//如果购物车中存在商品
			if(arr.length > 0){
				
				var singlePrice = 0 ;//单项商品价格
				
				var totalPrice = 0 ;//总价
				
				//创建新节点
				//for循环遍历arr
				for(var i= 0 ; i<arr.length ; i++){
					
					var obj = arr[i] ;
					
					//创建节点
					var tr = $("<tr class='threeTr'></tr>").appendTo("tbody");
					
					if(obj.checked){
					$("<td><input class='check' type='checkbox' checked='checked'/></td>").appendTo(tr);
					}else{
					$("<td><input class='check' type='checkbox' /></td>").appendTo(tr);
					}
					
					//$("<td><input type='checkbox' /></td>").appendTo(tr);
					$("<td><img src='"+obj.img+"' alt='' /></td>").appendTo(tr);
					$("<td><span>"+obj.title+"</span></td>").appendTo(tr);
					$("<td><span>"+obj.unit+obj.price+"</span></td>").appendTo(tr);
					$("<td><div id='inputBox'><input class='sub' type='button' value='-'/><input class='num' type='text' value='"+obj.num+"'/><input class='sup' type='button' value='+'/></div></td>").appendTo(tr);
					singlePrice = obj.price * obj.num ;
					$("<td><span class='singlePrice'>"+singlePrice+"</span></td>").appendTo(tr);
					$("<td><p>移入收藏夹</p><p><a class='delet' href='JavaScript:;'>删除</a></p></td>").appendTo(tr);
					  
				 
					
					
					if(obj.checked){
						
						totalPrice += obj.num * obj.price ;
						
					}
					
					//totalPrice += obj.price *obj.num ;
				
				}
				
					
				
				
					var tr4 = $("<tr class='fourTr' ></tr>").appendTo("tbody");
					$("<td><i>商品总价（不含运费）<em class='total'>119.60</em>元</i><span>确认订单</span></td>").appendTo(tr4);
				
				 	
				
				 	//显示总价
				 	$(".total").html(totalPrice);
				
				
	
				
			}else{
				
				console.log("购物车中无商品");
				
			}
			
		}else{
			
			console.log("购物车中无商品");
			
		}
		
		
		
		
		
	}
		
		
	//删除功能添加
	$("tbody").on("click",".delet",function(){
		
		//console.log("删除我啊")
		var index = $(this).index("tbody .delet");
		
		//console.log(index)  获取对应商品的下标
		
		var arr = JSON.parse($.cookie("cart"));
		arr.splice(index , 1);   //删除数组中下标为index的商品
		
		$.cookie("cart",JSON.stringify(arr),{expires:30});
		
		refresh();//局部刷新页面
		
		isAllChecked();//删除一个未选中的，其余的有可能是全选的，故要判断其余商品是否全选
		
	});
	
	//点击加号商品的数量增加
	$("tbody").on("click",".sup",function(){
		//console.log("我是加号")
		
		var index= $(this).index("tbody .sup");
		
		//console.log(index);
		
		//将对应商品的数量增加
		var arr = JSON.parse($.cookie("cart"));
		arr[index].num++;   //删除数组中下标为index的商品
		
		$.cookie("cart",JSON.stringify(arr),{expires:30});
		
		refresh();//局部刷新页面
		
	});
		
	//点击加号商品的数量减小
	$("tbody").on("click",".sub",function(){
		//console.log("我是加号")
		
		var index= $(this).index("tbody .sub");
		
		//console.log(index);
		
		//将对应商品的数量增加
		var arr = JSON.parse($.cookie("cart"));
		arr[index].num--;   //删除数组中下标为index的商品
		if(arr[index].num < 1){
			arr[index].num = 1 ;
		}
		
		$.cookie("cart",JSON.stringify(arr),{expires:30});
		
		refresh();//局部刷新页面
		
	});
		
	//选中状态
	$("tbody").on("click",".check",function(){
		//console.log("我是加号")
		
		var index= $(this).index("tbody .check");
		
		//console.log(index);
		var arr = JSON.parse($.cookie("cart"));
		
		arr[index].checked = !arr[index].checked ;
		
		$.cookie("cart",JSON.stringify(arr),{expires:30});
		
		refresh();//局部刷新页面
		
		isAllChecked()//是否全选
		
	});
		
		
	//点击全选
	$("#allChecked").click(function(){
		
		//console.log($(this).prop("checked"));  //判断全选框点击功能是否生效
		var arr = JSON.parse($.cookie("cart"));
		
		for(var i = 0 ; i < arr.length ;i++){
			
			if($(this).prop("checked")){
				
				arr[i].checked = true ;
				
			}else{
				
				arr[i].checked = false ;
				
			}
			
		}
		
		$.cookie("cart",JSON.stringify(arr),{expires:30});
		
		refresh();//局部刷新页面
		
	})
	
	
	
	
	
	isAllChecked();//先判断是否全选
	//判断是否全选的函数
	
	function isAllChecked(){
		  
		var arr = JSON.parse($.cookie("cart"));
		
		var sum = 0 ;
		
		for(var i = 0 ; i < arr.length ; i++){
			
			sum += arr[i].checked ; //如果arr[i].checked 为true则为1 ，否则为0 ；
			
		}
		
		if(sum == arr.length && arr.length != 0){  //判断全选条件
			
			$("#allChecked").prop("checked",true);
			
		}else{   //不全选时执行的动作
			
			$("#allChecked").prop("checked",false);
			
		}
		
	}
	
		
	
	
	
	
	
});





















