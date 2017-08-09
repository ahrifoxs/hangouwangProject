
$(function(){
	
	//top区域的icon变色
	$("#list li").mouseenter(function(){
		
		$(this).find(".ico_shop").animate({backgroundPosition:"0 -25px" })
		
	
	})
	
	
	//shopeare-1 区域图片向左移动特效
	
	$(".pic-left").mouseenter(function(){
		
		$(this).animate({left:'-10px'},600);
		console.log("1")
	}).mouseleave(function(){
		
		$(this).animate({left:'0px'},600);
		console.log("2")
	})
	
	
	
   //top 动画效果:我的订单
   
   $(".mygoods,.client,.our").mouseenter(function(){
   	
   	$(this).find(".seclectlist").show();
   	
   }).mouseleave(function(){
   	
   	$(this).find(".seclectlist").hide();
   	
   })
	
	
	//侧边栏显示隐藏特效
	//头像
	
	
   $("#icon-weixin").mouseenter(function(){
   	
   	$("#inline").show();
   	
   }).mouseleave(function(){
   	
   	$("#inline").hide();
   	
   })
	
	//二维码
   $("#icon-erweima").mouseenter(function(){
   	
   	$("#pic-erweima , #pic-erweima img").show();
 
   	
   }).mouseleave(function(){
   	
   	$("#pic-erweima , #pic-erweima img").hide();
   	
   	
   })
	
	
	
	//*********************************************轮播图********************************//
	
	
	
	
//	
//	//以下轮播图代码
//	
//	//jq轮播图
//	var list1 = $("#list1");
//	var list2 = $("#list2");
//	var li1 = $("#list1 li");
//	var li2 = $("#list2 li");
//	
//	
//	
//	//复制第一张图到最后
//	li1.first().clone(true).appendTo(list1);
//	
//	//
//	var size = $("#list1 li").size();
//	console.log(size)
//	var wd=parseInt(li1.css("width"));
//	list1.width(wd*size);
//	
//	//开启定时器
//	var i = 0;
//	var timer = setInterval(function(){
//		i++;
//		move();
//	}, 2000);
//	
//	function move(){
//		
//		if (i < 0) {
//			list1.css("left", -wd*(size-1));
//			i = size-1;
//		}
//		
//		if (i >= size){
//			list1.css("left", 0);
//			i = 1;
//		}
//		//console.log(i);
//		list1.stop().animate({left:-i*wd}, 300);
//		
//		li2.eq(i).addClass("active").siblings().removeClass("active");
//		if (i == size-1) {
//			li2.eq(0).addClass("active").siblings().removeClass("active");
//		}
//	}
//	
//	//上一页
//	$("#prev").click(function(){
//		i--;
//		move();
//	})
//	
//	//下一页
//	$("#next").click(function(){
//		i++;
//		move();
//	})
//	
//	li2.mouseenter(function(){
//		i = $(this).index();
//		move();
//	})
//	
//	$("#box").hover(function(){
//		clearInterval(timer);
//	}, 
//	function(){
//		timer = setInterval(function(){
//			i++;
//			move();
//		}, 4000);
//	})
//
//	
//	//轮播图上一章下一张图标显示
//	
//	$("#banner").mouseenter(function(){
// 	
// 	$(this).find("#prev, #next").show();
// 	
// }).mouseleave(function(){
// 	
// 	$(this).find("#prev, #next").hide();
// 	
// })
//
//	
	
	//右侧边栏返回顶部icon点击事件
	$("#icon-retuen").click(function(){
		
		$("html,body").animate({scrollTop:0},500);
		
	})
	
	
	
})





















