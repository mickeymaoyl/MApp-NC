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
	 	  },
	 	  clearFj:function(){
	 	  	    if(mui.os.plus){
		 	  	    	    plus.io.resolveLocalFileSystemURL( "_downloads/", function( entry ) {
	                         entry.removeRecursively( function(sucess){
	                         	  mui.toast("清除成功");
	                         	  mui.back();
	                         }, function(error){
	                         	  console.log(error);
	                         } );
				     	}, function ( e ) {
							console.log( "Resolve file URL failed: " + e.message );
					 } );
	 	  	    }
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
