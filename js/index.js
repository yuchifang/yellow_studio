$(window).scroll(function(e){
      //scroll 移動頁面上下的時候
 if ($(window).scrollTop()<=0)
  {
  $(".explore").addClass("at_top");
  }
 else
  $(".explore").removeClass("at_top");
});
$(window).scroll(function(e){
      //scroll 移動頁面上下的時候
 if ($(window).scrollTop()<=0)
  {
  $(".navbar").removeClass("navbar-light");
  }
 else

   $(".navbar").addClass("navbar-light");
});

$(document).on('click','a',function(event)
{
//針對document 做監看這個文件有沒有點擊任何超連接   監看a標籤 有click的動作  給function
  event.preventDefault();
  //不要直接跳轉
  var target= $(this).attr("href");
  //this = a 的 href = #section_about
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },500);
  //.animate(移動距離,花的時間)
  //scrollTop: $(target).offset().top
  //scrollTop: $(這東西).offset().top與上面的偏移距離
  //
});
function detect_cat(cat_id,x){
  var catplace=$(cat_id).offset().left+$(cat_id).width()/2;
  if(Math.abs(x-catplace)<80)
    //滑鼠座標-貓的座標小於80(寬度) 的"絕對值"的話
    $(cat_id).css("bottom","0px")//讓catid往下 坐下
  else
    $(cat_id).css("bottom","-50px")
}



$(window).mousemove(function(evt){
  var pagex=evt.pageX;
  var pagey=evt.pageY;
  var x=pagex-$("#section_about").offset().left;
  var y=pagey-$("#section_about").offset().top;
  //x,y已section_about 左上角為定位
  if(y<0 || y>$("#section_about").outerHeight())
    $("#cross").css("opacity",0);
  else
    $("#cross").css("opacity",1);
  $("#cross").css("left",x+"px");
  $("#cross").css("top",y+"px");
  
  var catplace=$("#cat").offset().left+$("#cat").width()/2;
  
  var cattop=$("#cat").offset().top;
  
  var img_url="http://awiclass.monoame.com/catpic/";
  if (pagex<catplace-50)
    $("#cat").attr("src",img_url+"cat_left.png")
  else if (pagex>catplace+50) //中心點+50
    $("#cat").attr("src",img_url+"cat_right.png")
  else
     $("#cat").attr("src",img_url+"cat_top.png")
  if (pagex<catplace-50 && pagey<cattop)
    $("#cat").attr("src",img_url+"cat_lefttop.png")
   if (pagex>catplace+50 && pagey<cattop)
    $("#cat").attr("src",img_url+"cat_righttop.png")
  
  detect_cat("#cat_yellow",pagex);
  detect_cat("#cat_blue",pagex);
  detect_cat("#cat_grey",pagex);
  
  $(".mountain").css("transform","translateX("+(pagex/-20+80)+"px)")
  
  $(".r1text").css("transform","translateX("+(y/-5)+"px)")
   $(".r2text").css("transform","translateX("+(y/-10)+"px)")
   $(".r3text").css("transform","translateX("+(y/-12)+"px)")
   $(".tri1").css("transform","translateX("+(x/-14)+"px)")
   $(".tri2").css("transform","translateX("+(x/-16)+"px)")
   $(".tri3").css("transform","translateX("+(x/-12)+"px)")
   $(".tri4").css("transform","translateX("+(x/-14)+"px)")
   $(".tri5").css("transform","translateX("+(x/-16)+"px)")
  
});


//用Vue.js把影像引入進來 
var vm = new Vue({
  el: "#app",
  data: {
    works:[]
  },
  mounted: function(){
    var vobj =this;
    $.ajax({
      url: "https://awiclass.monoame.com/api/command.php?type=get&name=projects",
      success: function(res){
        
        vobj.works=JSON.parse(res);
      }
      
    })
  }
})