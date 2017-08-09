	window.onload = function(){
		
	
		var oBox = document.getElementsByClassName('box')[0];
		var oZoomImg = document.getElementsByClassName('zoomImg')[0];
		var oSmallImg = document.getElementsByClassName('smallImg')[0];
		var oBigImg = document.getElementsByClassName('bigImg')[0];
		
		
		var zoom = 1;
		oBox.onmouseenter = function(e){
			width = oZoomImg.clientWidth ;
		
			console.log('w',width)
			height = oZoomImg.clientHeight;

		}
		document.body.onmousewheel = function(e){
		  e = e || window.event;
			
			zoom +=  e.wheelDelta/1200 ;
			console.log(oZoomImg.clientWidth)
			if(oZoomImg.clientWidth >= 360 ){
				oZoomImg.style.width = 360;
			}else{
			oZoomImg.style.width = width*zoom + 'px'; 
				
			}
			if(oZoomImg.clientHeight >= 360 ){
				oZoomImg.style.height = 360;
			}else{
				
			oZoomImg.style.height = height*zoom + 'px';  
			}
			
			var divX = e.offsetX - oZoomImg.clientWidth/2;

			

			var distanceX = oBox.clientWidth - oZoomImg.clientWidth-6;
			var divY = e.offsetY - oZoomImg.clientHeight/2 ;
			var distanceY = oBox.clientHeight - oZoomImg.clientHeight-6;
			if(divX<=0 ){
				divX = 0;
			}
			if(divX > distanceX ){
				divX = distanceX;
			}
			
			if(divY <= 0 ){
				divY = 0; 
			}
			if(divY > distanceY ){
				divY = distanceY;
			}
			
			oZoomImg.style.left = divX + 'px';
//			oSmallImg.style.left = -divX - 3 + 'px';
//			oBigImg.style.left = -divX*1.666 - 3 + 'px';
							
			oZoomImg.style.top = divY + 'px';
//			oSmallImg.style.top = -divY - 3  + 'px';
//			oBigImg.style.top = -divY*1.666 - 3  + 'px';
			
		}

		oBox.onmousemove = function(e){
//			console.log(e);
			var divX = e.offsetX - oZoomImg.clientWidth/2;

			

			var distanceX = oBox.clientWidth - oZoomImg.clientWidth-6;
			var divY = e.offsetY - oZoomImg.clientHeight/2 ;
			var distanceY = oBox.clientHeight - oZoomImg.clientHeight-6;
			if(divX<=0 ){
				divX = 0;
			}
			if(divX > distanceX ){
				divX = distanceX;
			}
			
			if(divY <= 0 ){
				divY = 0; 
			}
			if(divY > distanceY ){
				divY = distanceY;
			}
			
			oZoomImg.style.left = divX + 'px';
			oSmallImg.style.left = -divX - 3 + 'px';
			oBigImg.style.left = -divX*1.666 - 3 + 'px';
							
			oZoomImg.style.top = divY + 'px';
			oSmallImg.style.top = -divY - 3  + 'px';
			oBigImg.style.top = -divY*1.666 - 3  + 'px';
								
		}
	}
