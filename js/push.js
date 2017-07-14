(function(){
	
	if(mui.os.plus){
		 mui.plusReady(function(){
		 	   
		 	  var cid =plus.storage.getItem("cid");
		 	  if(cid==null||cid==''||cid==undefined){
		 	  	     cid =plus.push.getClientInfo().clientid;
		 	  	     if(cid==null||cid==''||cid==undefined){
		 	  	     	 return ;
		 	  	     }else{
		 	  	     	var param = new Object();
		 	  	     	param.cid=cid;
		 	  	     	param.username=plus.storage.getItem("username");
		 	  	     	sendUrlCmd(this,'wxApprove','pushcid',param,function(data){
		 	  	     		 if(data){
		 	  	     		 	
		 	  	     		 	 if(data.cid!='empty'){
		 	  	     		 	 	   plus.storage.setItem('cid',data.cid);
		 	  	     		 	 }
		 	  	     		 	
		 	  	     		 }
		 	  	     	});
		 	  	     	
		 	  	     	
		 	  	     }
		 	  	    
		 	  }else{
		 	  	  console.log("已经获取到cleintID");
		 	  }
		 	
//				 	plus.push.addEventListener( "click", function ( msg ) {  
//					// 分析msg.payload处理业务逻辑  
//					mui.alert( "You clicked111: " + msg.content );  
//					var  mainWB =  plus.webview.getWebviewById("main");
//	   	            mui.fire(mainWB,'refresh1');
//					}, false );
//					
					plus.push.addEventListener( "receive", function ( msg ) {  
						// 分析msg.payload处理业务逻辑  
						//mui.alert( "You clicked222: " + msg.content );  
						var  mainWB =  plus.webview.getWebviewById("main");
		   	    		mui.fire(mainWB,'refresh1');
		   	    		
		   	    		var  mainWB2 =  plus.webview.getWebviewById("approvelist.html");
		   	    		mui.fire(mainWB2,'refresh1');
					}, false );
		 })
	}
	
})();
