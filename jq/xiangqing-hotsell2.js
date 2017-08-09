$(function(){
	
	
	//详情页获取主页商品id；
	var params = location.search;  
	//console.log(params);       
   
	var id = fn(params,"id");
	//console.log(id)  
	var arr
	
	//left-box3区获取json数据
	$.get("json/left-box3.json",function(data){
		//console.log(data)  
		arr = data ;
		
		for(var i = 0 ; i< arr.length ; i++){
			
			var obj = arr[i] ;
			//console.log(obj.id id)
			if(obj.id == id){
				
				fn2(obj);
				
			}
			
		}
		
		
	})
	
	//热卖区获取json数据
	$.get("json/hotSell.json",function(data){
		//console.log(data)  
		arr = data ;
		
		for(var i = 0 ; i< arr.length ; i++){
			
			var obj = arr[i] ;
			//console.log(obj.id id)
			if(obj.id == id){
				
				fn2(obj);
				
//				$(".goodcar").click(function(){
//					
//					//将商品对象添加到cookie
//					console.log(obj);  
//					$.cookie("cart",JSON.stringify(obj),{expires:60,path:"/"});
//					console.log($.cookie("cart"));
//				});
				
				
			}
			
		}
		
		
	})
	
	//特产区获取json数据
	$.get("json/specialty.json",function(data){
		//console.log(data)  
		arr = data ;
		
		for(var i = 0 ; i< arr.length ; i++){
			
			var obj = arr[i] ;
			//console.log(obj.id id)
			if(obj.id == id){
				
				fn2(obj);
				
			}
			
		}
		
		
	})
	
	function fn2(obj){
		
		//console.log(JSON.stringify(obj));
		
		$("<img src='"+obj.img+"' />").appendTo("#middleImg"); 
		
		
		
		//$("<li><img src='"+obj.img+"' /></li><li><img src='images/images2/2_1.jpeg' /></li><li><img src='images/images2/3_1.jpeg' /></li><li><img src='images/images2/4_1.jpeg' /></li><li><img src='images/images2/5_1.jpeg' /></li>").shift("#small ul");   
		$("<li><img src='"+obj.img+"' /></li>").prependTo("#small ul");   
		
		
		
		
		$("<img src='"+obj.img+"' id='bigImg'/>").appendTo("#bigArea");   
		
		


//		$("<img src='"+obj.img+"' />").appendTo("#box1");    
//		$("<img src='"+obj.img+"' />").appendTo(".zoomImg");    
//		$("<img src='"+obj.img+"' />").appendTo(".bigImgBox");    
		$("<h1>"+obj.title+"</h1>").appendTo("#goodsName");    
		$("<strong>"+obj.strong+"</strong>").appendTo("#goodsName");     
		$("<dl><dt>市 场 价:</dt><dd>"+obj.unit+"<span>"+obj.priced+"</span></dd></dl><dl><dt>商 城 价:</dt><dd>"+obj.unit+"<span>"+obj.price+"</span></dd></dl><dl><dt>商品评分:</dt><dd>共有<em>"+obj.pingLun+"</em>条评价</dd></dl>").appendTo("#priceArea");    
		
	
		
		
		
//		$("<a href='javascript:;'>加入购物车</a>").appendTo(".goodcar");
//		$("<a href='javascript:;'>现在购买</a>").appendTo(".nowbuy");
		
		
		
		$(".goodcar").click(function(event){


//			//点击的商品下标
//			var index = $(this).index();
//			//console.log(index);
//			
//			//点击的商品
//			var obj = arr[index];
//
			
			
			//将商品对象添加到cookie
			 
			
			var goodsArr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
			
			var isExist = false ;//默认cookie中不存在和我当前商品相同的商品
			for(var i = 0 ; i<goodsArr.length ;i++){
				
				if(goodsArr[i].id == obj.id){
					goodsArr[i].num++ ;//数量加1
					isExist = true ;//说明存在相同商品
					$("<i id='number'>"+goodsArr[i].num+"</i>").appendTo("#numberA");
					$("<em class='cart-num' id='top-cart-count'>"+goodsArr[i].num+"</em>").appendTo("#shoparea");
//					$("<input type='text'name='' id='quantity' value='"+goodsArr[i].num+"' />").prependTo("#inp") ;
				}
				
			}
			if(isExist == false){
				
				obj.num = 1 ;
				obj.checked = true ;
				goodsArr.push(obj);
				obj.checked = true; //默认是选中的
				console.log(goodsArr);
			}
			
			
			$.cookie("cart", JSON.stringify(goodsArr), {expires:60});
			console.log( $.cookie("cart") );
			
			
		});

	}
	
	
	function fn(params,id){
		
		params = params.substring(1);    
		var arr= params.split("&");
		for(var i = 0 ; i < arr.length; i++){
			
			var str = arr[i] ;
			var arr2 = str.split("=");
			if(arr2[0] == id){
				return arr2[1];
			}
			
		}
		return "" ;  
		
	}
	
	//加入购物车
//	$(".goodcar").click(function(){
//		
//		//console.log("加入购物车");
//		
//		//点击获取商品下标
//		var  index = $(this).index();
//		
//		var obj = arr[index] ;
//		
//		var id = arr[index].id ;
//		console.log("下标："+id);
//		
		
//	$(".goodcar").click(function(){
//		
//		//console.log("加入购物车");
//		
//		//点击获取商品下标
//	
//		
//		var obj = arr[index] ;
//		
//		var id = arr[index].id ;
//		console.log("下标："+id);
//		
		
		
		
		
	//})
	
	
	
	//点击现在购买跳转结算页面
	
	$(".nowbuy").click(function(){
		
		location.href = "index-goodsCar.html" ;
		
	});
	
	
	
	
	
	//商品加入购物车时的动画
	
	var offset = $("#icon-side").offset();  //结束的地方的元素
	$(".goodcar").click(function(event){   //是$(".addcar")这个元素点击促发的 开始动画的位置就是这个元素的位置为起点
		var addcar = $(this);
		var img = addcar.parent().find('img').attr('src');
		
		var flyer = $('<img class="u-flyer" src="images/19_05255214094330227_240.jpg">');
		flyer.fly({
			//开始位置
			start: {
				left: event.clientX,
				top: event.clientY
			},
			//结束位置
			end: {
				left: offset.left,
				top: offset.top,
				width: 0,
				height: 0
			},
			//结束后
			onEnd: function(){
				console.log("结束");
				$("#msg").show().animate({width: '250px'}, 200).fadeOut(1000);
			}
		});
	});
 	
	
	
	
	
	
	
	
	
	
	    
})
