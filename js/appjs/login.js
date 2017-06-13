


(function (){
	  mui.init();
	  var username =document.getElementById("account");
	  var password =document.getElementById("password");
	  var autoLogin=document.getElementById("autoLogin");
	  var loginButton = document.getElementById('login');
	  var isauto =false;
	  var _isauto ='false';
	  var deviceid='test';
	  //是否自动登录事件
	  autoLogin.addEventListener('toggle',function(event){
			isauto=event.detail.isActive;
			if(isauto)
			    _isauto='true';
			else
			    _isauto='false';
			
	  });
	  
	  if(mui.os.plus){
			  mui.plusReady(function(){
			  	       deviceid =plus.device.uuid;
			  	       loginButton.addEventListener("tap",function(event){
						
							 login(username.value,password.value,_isauto,deviceid);
					   });
			  });
	  }else {
	  	     loginButton.addEventListener("tap",function(event){
							 login(username.value,password.value,isauto,deviceid);
			 });
	  }
	
})();
//登录
     function login(username,password,isauto,deviceid){
 	        mui.post('http://192.168.2.46:8089/mologin',{
				   	   username:username,
				   	   password:password,
				   	   deviceid:deviceid
				   },function(data){
				   	      if(data.returnCode=='Success'){
				   	      	  //mainPage();
//				   	      	  _username=username;
				   	      	  toMain(username);
				   	      	  
				   	      	  setLocalData("username",username);
				   	      	  setLocalData("password",password);
				   	      	  setLocalData("isauto",isauto);
				   	      }else{
				   	      	  mui.toast("登录失败，请重新输入用户名和密码");
				   	      	  document.getElementById("account").value='';
				   	      	  document.getElementById("password").value='';
				   	      }
				   	      
				   },'json')
 };
 
  function setLocalData(key,value){
  	  if(mui.os.plus){
  	  	console.log(key+":"+value);
  	  	   plus.storage.setItem(key,value);
  	  }else{
  	  	  localStorage.setItem(key,value);
  	  }
  }
 
 
        function toMain(_username) {

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