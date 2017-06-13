  var  _username=null;
  var  _password=null;
  var  _deviceid='test';
  var  _isauto =false;
  (function (){
  	  mui.init();
  	  if(mui.os.plus){
	      mui.plusReady(function(){
	   	        _username=plus.storage.getItem("username");
	   	        _password=plus.storage.getItem("password");
	   	        _isauto =plus.storage.getItem("isauto");
	   	        _deviceid=plus.device.uuid;
	   	        login(_username,_password,_isauto);
	      });
      }else {
              	_username=localStorage.getItem("username");
	   	        _password=localStorage.getItem("password");
	   	         _isauto =localStorage.getItem("isauto");
	   	         login(_username,_password,_isauto);
      	
      }
  })();
  
   function login (username,password,isauto){
   	    if(isauto&&username!=null&&password!=null){
   	    	       mui.post('http://192.168.2.46:8089/mologin',{
				   	   username:username,
				   	   password:password,
				   	   deviceid:_deviceid
				   },function(data){
				   	      if(data.returnCode=='Success'){
				   	      	  //mainPage();
				   	      	  _username=username;
				   	      	  toMain();
				   	      }else{
				   	      	 mui.openWindow('login.html','login');
				   	      }
				   	      
				   },'json')
   	    }else{
   	    	      mui.openWindow('login.html','login');
   	    }
   	
//	    if(username==null||password==null){
//	    	    
//	    	     mui.openWindow('login.html','login');
//	    }else{
//	    	      mui.post('http://192.168.2.46:8089/mologin',{
//				   	   username:username,
//				   	   password:password,
//				   	   deviceid:_deviceid
//				   },function(data){
//				   	      if(data.returnCode=='Success'){
//				   	      	  //mainPage();
//				   	      	  _username=username;
//				   	      	  toMain();
//				   	      }else{
//				   	      	 mui.openWindow('login.html','login');
//				   	      }
//				   	      
//				   },'json')
//	    }
   };
   
         //登录成功后跳转主页面
         function toMain(){
                  	{
						setTimeout(function() {
							mui.openWindow({
								url:'main.html',
								id: 'main',
								show: {
									aniShow: 'pop-in'
								},
								extras:{
									username:_username
								},
								waiting: {
									autoShow: false
								}
							});
						}, 0);
					};
         }
  