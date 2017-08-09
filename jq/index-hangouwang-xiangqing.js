

$(function(){
	
	
	//top区域的icon变色
	$("#list li").mouseenter(function(){
		
		$(this).find(".ico_shop").animate({backgroundPosition:"0 -25px" })
		
	
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
   
   	//侧边栏菜单显示功能
   	$("#navAll,#meun").mouseenter(function(){
   		
   		$("#meun").show();
   		
   	});
   	$("#meun").mouseleave(function(){
   		
   		$("#meun").hide();
   		
   	});
	
	
	
	
	
	
	
	//吸顶效果
//	var goodNavTop = $("#ncGoodsIntro").offset().top;
//	
//	$(window).scroll(function(){
//		var scrollTop = $(window).scrollTop();
//		
//		if (scrollTop >= goodNavTop) {
//			$(".ncs-goods-title-nav").fadeIn();
//		}
//		else  {
//			$(".ncs-goods-title-nav").fadeOut();
//		}
//	})

	//右侧边栏返回顶部icon点击事件
	$("#icon-retuen").click(function(){
		
		$("html,body").animate({scrollTop:0},500);
		
	})
	
	
	
	
	
	
	
	
})





















