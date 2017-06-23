var  setting =new Vue({
	 el:"#settings",
	 data:{
	 	   username:'',
	 	   uname:'',
	 },
	 ready:function(){
	 	 initPage();
	 },
	 methods:{
	 	  logout:function(){
	 	  	   clearUserInfo();
	 	  	   login();
	 	  }
	 }
	
});



function clearUserInfo(){
	     if(mui.os.plus){
	     	  plus.storage.clear();
	     }else{
	     	  localStorage.clear();
	     }
}

function login(){
	  mui.openWindow({
	  	  url:'index.html'
	  })
}

function initPage(){
	  mui.init();
	  mui.plusReady(function(){
	  	    //如果有参数 
	  	     setting.username =plus.storage.getItem("username");
	  	     setting.uname =plus.storage.getItem("uname");
	  	     
	  });
	  mui.ready(function(){
	  	     setting.username =localStorage.getItem("username");
	  	     setting.uname =localStorage.getItem("uname");
	  });
}
