var  news =new Vue({
	 el:"#news",
	 data:{
	 	
	 },
	 created:function(){
	 	 initPage();
	 },
	 methods:{
	 	
	 }
	
});

window.addEventListener('refresh',function(e){
	 console.log(e);
});
function initPage(){
	  mui.init();
	  mui.plusReady(function(){
	  	   
	  });
}
