window.onload=function(){
	var oDiv=document.getElementById('div');
	var oUl1=document.getElementById('ul1');
	var oLi1=oUl1.getElementsByTagName('li');
	var oUl2=document.getElementById('ul2');
	var oLi2=oUl2.getElementsByTagName('li');
	var timer=null;
	var time=null;
	var oLi1Height=oLi1[0].offsetHeight;
	var index=0;


	for (var i=0;i<oLi2.length; i++) {
	    oLi2[i].index=i;
	    oLi2[i].onmouseover=function(){
			show(this.index)
	}
}

oDiv.onmouseover=function(){
		clearInterval(time);
	}
	oDiv.onmouseout=function(){
		time=setInterval(function(){
		index++;
		if(index==oLi2.length){index=0};
		show(index);
	},2000)
	}

	clearInterval(time);
	time=setInterval(function(){
		index++;
		if(index==oLi2.length){index=0};
		show(index);
	},2000)


	function show(j){
		for(var i=0;i<oLi2.length;i++){
				oLi2[i].className="";
			}
			oLi2[j].className="active";

			clearInterval(timer)
			timer=setInterval(function(){
				iSpeed=(-oUl1.offsetTop-oLi1Height*j)/8;
				var iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
				oUl1.style.top=oUl1.offsetTop+iSpeed+'px';
			},20)
	}	
}