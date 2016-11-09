$(function(){
//导航
//JS
  /*  var fw44=$(".fw444");
	var item4=$(".item4");
	var jiao=$(".jiao");
	for(var i=0;i<fw44.length;i++){
	   fw44[i].index=i;
	   fw44[i].onmouseover=function(){
	          item4[this.index].style.display="block";
              jiao[this.index].style.display="block";
	   }
	   fw44[i].onmouseout=function(){
	          item4[this.index].style.display="none";
			  jiao[this.index].style.display="none";
	   }
	}*/
  //JQ
  $(".fw444").mouseover(function(){
	  var index=$(this).index();
     $(".item4").css("display","none").eq(index-5).css("display","block");
     $(".jiao").css("display","none").eq(index-5).css("display","block");
  }).mouseout(function(){
     $(".item4").css("display","none");
     $(".jiao").css("display","none");
  })
//city
  //JS
   /* var choicecity=$(".choicecity")[0];
	var city=$(".select")[0];
	var body=$("body")[0];
	city.onclick=function(e){
	   var e=e||window.event;
	   if(e.cancelBubble){
	     e.cancelBubble=true;
	   }else{
	    e.stopPropagation();
	   }
       choicecity.style.display="block";
	  } 
	body.onclick=function(){
		  choicecity.style.display="none";
	   }*/
  //JQ
    $(".select:first").click(function(event){
	   event.stopPropagation();    
       $(".choicecity:first").css("display","block");
	})
	$("body").click(function(){
        $(".choicecity:first").css("display","none");
	})
//
    var denglu=$(".denglu")[0];
	var xiala_mune=$(".xiala-mune")[0];
	var cone=$(".cone")[0];
        denglu.onmouseover=function(){
	          xiala_mune.style.display="block";
			  cone.style.display="block";
	   }
	   denglu.onmouseout=function(){
	          xiala_mune.style.display="none";
              cone.style.display="none";
	   }

	var dropdown=$(".dropdown")[0];
	var yytt=$(".yytt")[0];
	var coney=$(".coney")[0]
        dropdown.onmouseover=function(){
	          yytt.style.display="block";
              coney.style.display="block";
	   }
	   dropdown.onmouseout=function(){
	          yytt.style.display="none";
			  coney.style.display="none";
	   }
   //JQ
    var now=0;
    var next=0;
	var width=$(".imnages6:first").width();
	var t=setInterval(move,2000);
	var flag=false;
    function move () {
		next=now+1;
		if(next>=$(".imnages6").length){
		   next=0;
		}
       $(".imnages6").eq(next).css({"left":width}).end().eq(now).animate({"left":-width},500).end().eq(next).animate({left:0},500,function(){flag=false});
       $(".circle").css({background:"#ccc"}).eq(next).css({background:"#e40077"});
	   now=next;
	}
	function movel () {
		next=now-1;
		if(next<0){
		   next=$(".imnages6").length-1;
		}
       $(".imnages6").eq(next).css({left:-width}).end().eq(now).animate({left:width},500).end().eq(next).animate({left:0},500,function(){flag=false});
       $(".circle").css({background:"#ccc"}).eq(next).css({background:"#e40077"});
	   now=next;
	};
	$(".zhong").mouseover(function(){
	       clearInterval(t);
	})
	$(".zhong").mouseout(function(){
	       t=setInterval(move,2000);
	})
    
	$(".btnr").click(function(){
	     if(flag){
		     move();
		 }
		 flag=false;
	})
	$(".btnl").click(function(){
		 if(flag){
			 movel();
		 }
		 flag=false;
	})
	$(".circle").click(function(){
		   var index=$(this).index()
		     if(index>now){
		     $(".imnages6").eq(index).css({left:width}).end().eq(now).animate({left:-width}).end().eq(index).animate({left:0});
             $(".circle").css({background:"#ccc"}).eq(index).css({background:"#e40077"});
		  }else if(index<now){
		     $(".imnages6").eq(index).css({left:-width}).end().eq(now).animate({left:width}).end().eq(index).animate({left:0});
             $(".circle").css({background:"#ccc"}).eq(index).css({background:"#e40077"});
		  }
		   now=index;
		   next=index;
	})
  //JS
 /* var imgs=$(".imnages6");
  var btn=$(".circle");
  var zhong=$(".zhong")[0];
  var box=$(".imgbox")[0];
  var width=parseInt(getStyle(box,"width"));
  var btnl=$(".btnl")[0];
  var btnr=$(".btnr")[0];
  var flag=true;
  var n=0;
  var next=0;
  var t=setInterval(move,2000);

    function  move() {
		next=n+1;
		if(next>=imgs.length){
		     next=0;
		}
        imgs[next].style.left=width+"px";
        animate(imgs[n],{left:-width},1000);
        animate(imgs[next],{left:0},1000,function(){
		  flag=true});
        for(var i=0;i<btn.length;i++){
		      btn[i].style.background="#ccc";
		}
		btn[next].style.background="#e40077";
		n=next;
    }
 
    zhong.onmouseover=function(){
	      clearInterval(t);
	}
	zhong.onmouseout=function(){
	      t=setInterval(move,2000);
	}
    
    btnr.onclick=function(){
	    if(flag){
			move()
		}
		flag=false;
	}
     btnl.onclick=function(){
		 if(flag){
		    movel();   
        } 
	    flag=false; 
	}
        function  movel() {
		next=n-1;
		if(next<0){
		     next=imgs.length-1;
		}
        imgs[next].style.left=-width+"px";
        animate(imgs[n],{left:width},1000);
        animate(imgs[next],{left:0},1000,function(){
		  flag=true});
        for(var i=0;i<btn.length;i++){
		      btn[i].style.background="#ccc";
		}
		btn[next].style.background="#e40077";
		n=next;
    }

	//原点按钮点击
	for(var i=0;i<btn.length;i++){
	     btn[i].index=i;
		 btn[i].onclick=function(){
		    if(this.index>n){
			  imgs[this.index].style.left=width+"px";
              animate(imgs[n],{left:-width},1000);
              animate(imgs[this.index],{left:0},1000);
              for(var i=0;i<btn.length;i++){
		      btn[i].style.background="#ccc";
		    }
		       btn[this.index].style.background="#e40077";
			   n=this.index;
			   next=this.index;
			}else if(this.index<n){
			   imgs[this.index].style.left=-width+"px";
              animate(imgs[n],{left:width},1000);
              animate(imgs[this.index],{left:0},1000);
              for(var i=0;i<btn.length;i++){
		      btn[i].style.background="#ccc";
		    }
		       btn[this.index].style.background="#e40077";
			   n=this.index;
			   next=this.index;
			}
		 }
	}*/

//节点轮播
   //JQ
   /*   var t2=setInterval(move2,2000);
	  var width2=$(".lis").outerWidth();
	  var flag=true;
	  function move2 () {
		  $(".img-box").animate({left:-width2},600,function(){
		        $(".img-box").append($(".lis:first")).css("left",0);
					flag=true;
		  })
	  }
	   function movel2 () {
		   if(flag){
		      $(".lis:last").insertBefore($(".lis:first"));
              $(".img-box").css("left",-width2).animate({"left":0},600,function(){
			     flag=true;
			  })
		   }
            flag=false;
	  }
      $(".yingyeting").mouseover(function(){
	            	 clearInterval(t2);          
		  }).mouseout(function(){
	            	t2=setInterval(move2,2000);        
		  })
      $(".btnr2").click(function(){
	     if(flag){
		   move2();
		 }
		 flag=false;
	  })
	  $(".btnl2").click(function(){
		   movel2();
	  })*/
  //JS
    var img=$(".lis");
	var imgbox=$(".img-box")[0];
	var btnl2=$(".btnl2")[0];
	var btnr2=$(".btnr2")[0];
	var outbox=$(".out-box")[0];
    var aw=parseInt(getStyle(img[0],"width"))+parseInt(getStyle(img[0],"margin-right"));
    var t2=setInterval(move2,2000);
    var flag=true;
	function move2(){
		animate(imgbox,{left:-aw},600,function(){
		      var first=getFirst(imgbox);
			  imgbox.appendChild(first);
			  imgbox.style.left=0;
			  flag=true;
		});
	}
    outbox.onmouseover=function(){
	      clearInterval(t2);
	}
	outbox.onmouseout=function(){
	      t2=setInterval(move2,2000);
	}

    btnr2.onclick=function(){
	      if(flag){
			  move2();
			} 
		 flag=false;
	}
    btnl2.onclick=function(){
	      if(flag){
			  movel2();
			  }
			flag=false;
	}
	function movel2(){
	     var first=getFirst(imgbox);
		 var last=getLast(imgbox);
         imgbox.insertBefore(last,first);
		 imgbox.style.left=-aw+"px";
		 animate(imgbox,{left:0},600,function(){
		   flag=true;
		 });
	} 
//节点轮播
//公告
  //JS
 /* var gonggaocenter=$(".gonggaocenter");
  var Gleft=$(".Gleft")[0];
  var Gright=$(".Gright")[0];
  var now=0;
  Gright.onclick=function(){
	  now++;
      if(now>=gonggaocenter.length){
	     now=0;
	  }
      for(var i=0;i<gonggaocenter.length;i++){
          gonggaocenter[i].style.display="none";
	  }
           gonggaocenter[now].style.display="block";
  }
  Gleft.onclick=function(){
	  now--;
      if(now<0){
	     now=gonggaocenter.length-1;
	  }
      for(var i=0;i<gonggaocenter.length;i++){
          gonggaocenter[i].style.display="none";
	  }
           gonggaocenter[now].style.display="block";

  }*/
    //JQ
	var now=0;
	var next=0;
	$(".Gright").click(function(){
	      next=now+1;
		  if(next>=$(".gonggaocenter").length){
		     next=0;
		  }
		 $(".gonggaocenter").eq(next).css("display","block").end().eq(now).css("display","none")
	      now=next;
		 })
	$(".Gleft").click(function(){
	      next=now-1;
		  if(next<0){
		     next=$(".gonggaocenter").length-1;
		  }
		 $(".gonggaocenter").eq(next).css("display","block").end().eq(now).css("display","none")
	      now=next;
		 })
//3定位图片
  //js
  /*var cjwt=$(".cjwt")[0];
  var zxzx=$(".zxzx")[0];
  var tsjy=$(".tsjy")[0];
  cjwt.onmouseover=function(){
      animate(cjwt,{left:-80},200,Tween.Quad.easeIn);
  }
  cjwt.onmouseout=function(){
      animate(cjwt,{left:-22},200,Tween.Quad.easeIn);
  }
  zxzx.onmouseover=function(){
      animate(zxzx,{left:-80},200,Tween.Quad.easeIn);
  }
  zxzx.onmouseout=function(){
      animate(zxzx,{left:-22},200,Tween.Quad.easeIn);
  }
  tsjy.onmouseover=function(){
      animate(tsjy,{left:-80},200,Tween.Quad.easeIn);
  }
  tsjy.onmouseout=function(){
      animate(tsjy,{left:-22},200,Tween.Quad.easeIn);
  }*/
  //JQ
   $(".cjwt:first").mouseover(function(){
          $(this).animate({left:-80},200,Tween.Quad.easeIn);
   })
   $(".cjwt:first").mouseout(function(){
          $(this).animate({left:-22},200,Tween.Quad.easeIn);
   })
   $(".zxzx:first").mouseover(function(){
          $(this).animate({left:-80},200,Tween.Quad.easeIn);
   })
   $(".zxzx:first").mouseout(function(){
          $(this).animate({left:-22},200,Tween.Quad.easeIn);
   })
   $(".tsjy:first").mouseover(function(){
          $(this).animate({left:-80},200,Tween.Quad.easeIn);
   })
   $(".tsjy:first").mouseout(function(){
          $(this).animate({left:-22},200,Tween.Quad.easeIn);
   })
   //lazy加载
   $(".lazy").lazyload({
    effect:"fadeIn"
  })
});
 